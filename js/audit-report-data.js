/**
 * Informes de auditoría de inventario publicados en la bitácora.
 * REGLA: los informes nuevos van AL PRINCIPIO del array.
 * Textos: string (es) o { es, pt }.
 */
window.BITACORA_AUDIT_REPORTS = [
  {
    id: "2026-08-19-3semanas",
    at: "2026-08-19T10:03:00-03:00",
    title: {
      es: "Auditoría de inventario — 3 semanas",
      pt: "Auditoria de estoque — 3 semanas",
    },
    period: {
      es: "29/07/2026 00:00 a 19/08/2026 09:34 (hora Uruguay)",
      pt: "29/07/2026 00:00 a 19/08/2026 09:34 (horário Uruguai)",
    },
    source: {
      es: "PostgreSQL de producción (Render) · solo lectura · sin cambios en el banco",
      pt: "PostgreSQL de produção (Render) · somente leitura · sem alterações no banco",
    },
    verdictTone: "ok",
    verdictTitle: {
      es: "Veredicto: no hubo doble descuento silencioso del sistema",
      pt: "Veredito: não houve desconto duplo silencioso do sistema",
    },
    verdictBody: {
      es: "En Sineriz (la tienda que opera de verdad) el stock actual de cada materia prima coincide con la suma de lotes FIFO. Los 1.411 perros vendidos coinciden 1 a 1 con el pan de ficha y con 101,588 kg de frankfurter (0,072 kg × esos perros). Las diferencias de cantidad vienen de cómo se carga el inventario (stock tipeado como conteo físico, descarte usado para deshacer un alta, notas fiscales vacías, un lote semilla de 461 kg de barbecue) — no de que el PDV o el delivery hayan restado dos veces.",
      pt: "Em Sineriz (a loja que realmente opera) o estoque atual de cada matéria-prima coincide com a soma dos lotes FIFO. Os 1.411 dogs vendidos batem 1 a 1 com o pão da ficha e com 101,588 kg de frankfurter (0,072 kg × esses dogs). As diferenças de quantidade vêm de como o estoque é carregado (saldo digitado como contagem física, descarte usado para desfazer uma entrada, notas fiscais vazias, um lote semente de 461 kg de barbecue) — não de PDV ou delivery terem descontado duas vezes.",
    },
    kpis: [
      { value: "1.369", label: { es: "Pedidos listos (PDV + delivery)", pt: "Pedidos prontos (PDV + delivery)" } },
      { value: "2.947", label: { es: "Unidades vendidas Sineriz", pt: "Unidades vendidas Sineriz" } },
      { value: "8", label: { es: "Pedidos web delivery", pt: "Pedidos web delivery" } },
      { value: "2", label: { es: "Hallazgos de integridad", pt: "Achados de integridade" }, tone: "warn" },
    ],
    findingsTitle: { es: "Qué es sistema y qué es operación", pt: "O que é sistema e o que é operação" },
    findingsHeaders: {
      es: ["Severidad", "Qué se ve", "Origen", "¿Error del sistema?"],
      pt: ["Severidade", "O que se vê", "Origem", "Erro do sistema?"],
    },
    findings: [
      {
        tone: "warn",
        cells: {
          es: [
            "Atención",
            "Empanadas, Coca y donuts pasan a stock negativo y luego el número se pisa (no se suma una compra).",
            "Superadmin tipeó el conteo físico. Cero filas en ingresos de producto. Notas fiscales del período sin ítems vinculados.",
            "No. El sistema permite vender sin stock y pisar el saldo, por diseño.",
          ],
          pt: [
            "Atenção",
            "Empanadas, Coca e donuts vão a estoque negativo e depois o número é sobrescrito (não se soma uma compra).",
            "Superadmin digitou a contagem física. Zero linhas de entrada de produto. Notas fiscais do período sem itens vinculados.",
            "Não. O sistema permite vender sem estoque e sobrescrever o saldo, por desenho.",
          ],
        },
      },
      {
        tone: "warn",
        cells: {
          es: [
            "Atención",
            "Coca Zero 350: alta 0→180 el 3/8 y descarte de 180 el 4/8 (“errei, era para adc normal”). El mismo día Coca común 111→291.",
            "Alta cargada en el producto equivocado y deshecha con descarte.",
            "No. El descarte restó exactamente lo pedido.",
          ],
          pt: [
            "Atenção",
            "Coca Zero 350: alta 0→180 em 3/8 e descarte de 180 em 4/8 (“errei, era para adc normal”). No mesmo dia Coca comum 111→291.",
            "Alta lançada no produto errado e desfeita com descarte.",
            "Não. O descarte descontou exatamente o pedido.",
          ],
        },
      },
      {
        tone: "info",
        cells: {
          es: [
            "Dato",
            "Lote semilla MOLHO BARBECUE 461 kg el 1/8, agotado el 3/8. Consumo real de ficha: 2,472 kg (103 Rottweiler × 0,024 kg).",
            "Al quedar sin lotes activos, el sistema crea un lote con el stock actual. Alguien dejó el stock en 461 (casi seguro 461 g tipeados como kg).",
            "No es doble venta. Sí es un hueco de UX: guardar la ficha materializa un lote fantasma.",
          ],
          pt: [
            "Dado",
            "Lote semente MOLHO BARBECUE 461 kg em 1/8, esgotado em 3/8. Consumo real da ficha: 2,472 kg (103 Rottweiler × 0,024 kg).",
            "Sem lotes ativos, o sistema cria um lote com o estoque atual. Alguém deixou o estoque em 461 (quase certamente 461 g digitados como kg).",
            "Não é venda dupla. É um buraco de UX: salvar a ficha materializa um lote fantasma.",
          ],
        },
      },
      {
        tone: "alert",
        cells: {
          es: [
            "Integridad",
            "Matriz PÃO NORMAL: stock 29 vs lotes FIFO 37 (faltan 8 panes en el contador).",
            "Tienda casi inactiva (10 pedidos PDV). Única divergencia material stock vs lotes.",
            "Sí, desajuste de ledger en Matriz. No afecta Sineriz.",
          ],
          pt: [
            "Integridade",
            "Matriz PÃO NORMAL: estoque 29 vs lotes FIFO 37 (faltam 8 pães no contador).",
            "Loja quase inativa (10 pedidos PDV). Única divergência material estoque vs lotes.",
            "Sim, desajuste de ledger na Matriz. Não afeta Sineriz.",
          ],
        },
      },
      {
        tone: "warn",
        cells: {
          es: [
            "Atención",
            "MILKDANI'S DULCE DE LECHE stock −1 (2 vendidos). SALSICHA FRANKFI Matriz −1,662 kg.",
            "Venta permitida sin stock cargado.",
            "No. Los negativos son explícitos en el código de retiro.",
          ],
          pt: [
            "Atenção",
            "MILKDANI'S DULCE DE LECHE estoque −1 (2 vendidos). SALSICHA FRANKFI Matriz −1,662 kg.",
            "Venda permitida sem estoque carregado.",
            "Não. Negativos são explícitos no código de baixa.",
          ],
        },
      },
      {
        tone: "ok",
        cells: {
          es: [
            "OK",
            "Sineriz: stock de cada insumo = remainingQty de lotes (salvo 0,001 g de redondeo en SEM COBERTURA).",
            "FIFO y contador de materia prima siguen alineados después de 1.356 pedidos listos.",
            "No hay corrida de inventario en la tienda operativa.",
          ],
          pt: [
            "OK",
            "Sineriz: estoque de cada insumo = remainingQty dos lotes (salvo 0,001 g de arredondamento em SEM COBERTURA).",
            "FIFO e contador de matéria-prima seguem alinhados após 1.356 pedidos prontos.",
            "Não há corrida de estoque na loja operacional.",
          ],
        },
      },
    ],
    productsTitle: {
      es: "Productos vendidos (Sineriz, listos + completados)",
      pt: "Produtos vendidos (Sineriz, prontos + concluídos)",
    },
    productsHeaders: {
      es: ["Producto", "Canal", "Uds.", "Stock actual", "Notas"],
      pt: ["Produto", "Canal", "Uds.", "Estoque atual", "Notas"],
    },
    products: [
      ["DOG VIRA-LATA", "PDV 1.159 + delivery 1", "1.160", "n/a (ficha)", { es: "1 pan + 0,072 kg frankfurter c/u", pt: "1 pão + 0,072 kg frankfurter cada" }],
      ["COCA-COLA 350ML", "PDV", "386", "241", { es: "Stock se pisa a mano; no hay ingresos por nota", pt: "Estoque é sobrescrito à mão; não há entradas por nota" }],
      ["COCA ZERO 350ML", "PDV 216 + delivery 1", "217", "72", { es: "Descarte 180 uds el 4/8 (deshacer alta)", pt: "Descarte 180 un. em 4/8 (desfazer alta)" }],
      ["EMPANADA DE CARNE", "PDV", "211", "5", { es: "Descarte 2 (canje JyQ→carne). Stock llega a negativo y se reescribe", pt: "Descarte 2 (troca JyQ→carne). Estoque chega a negativo e é reescrito" }],
      ["CAFÉ EXPRESSO", "PDV", "194", "392", { es: "Altas 512→595 el 8/8 y 388→393 el 19/8", pt: "Altas 512→595 em 8/8 e 388→393 em 19/8" }],
      ["Dog Bulldog", "PDV 146 + delivery 1", "147", "n/a (ficha)", ""],
      ["Dog Rottweiler", "PDV 102 + delivery 1", "103", "n/a (ficha)", { es: "Único perro que consume barbecue por ficha", pt: "Único dog que consome barbecue pela ficha" }],
      ["EMPANADA JAMÓN Y QUESO", "PDV 84 + delivery 1", "85", "0", { es: "Stock 0 al corte", pt: "Estoque 0 no corte" }],
      ["EMPANADA DE POLLO", "PDV", "82", "1", ""],
      ["QUEIJO E BATATA (extra)", "PDV", "68", "n/a (ficha)", { es: "0,020 kg palha + 0,024 kg queijo por unidad", pt: "0,020 kg palha + 0,024 kg queijo por unidade" }],
      ["CAPUCCINO", "PDV", "54", "160 (CAPPUCCINO)", { es: "Nombre del ticket ≠ nombre de catálogo", pt: "Nome do ticket ≠ nome do catálogo" }],
      ["Donuts (6 SKUs)", "PDV + 1 delivery", "194", "0–83", { es: "Ingresos por SET de stock, no por nota", pt: "Entradas por SET de estoque, não por nota" }],
    ],
    productsNote: {
      es: "Los productos con ficha (hot dogs) no restan stock del producto al vender: se descuenta materia prima. Ingresos de reventa en el período: 0 filas en product_stock_entries.",
      pt: "Produtos com ficha (hot dogs) não baixam estoque do produto na venda: desconta-se matéria-prima. Entradas de revenda no período: 0 linhas em product_stock_entries.",
    },
    ingredientsTitle: {
      es: "Materias primas Sineriz — altas, consumo teórico, descarte, saldo",
      pt: "Matérias-primas Sineriz — entradas, consumo teórico, descarte, saldo",
    },
    ingredientsHeaders: {
      es: ["Insumo", "Unidad", "Altas 3 sem.", "Descarte", "Consumo ficha", "Stock hoy", "Lotes = stock"],
      pt: ["Insumo", "Unidade", "Entradas 3 sem.", "Descarte", "Consumo ficha", "Estoque hoje", "Lotes = estoque"],
    },
    ingredients: [
      ["PÃO NORMAL", "UM", "1.362", "6", "1.411", "46", { es: "Sí", pt: "Sim" }],
      ["SALSICHA FRANKFURT", "KG", "89,332", "0,500", "101,588", "18,425", { es: "Sí", pt: "Sim" }],
      ["QUEIJO RALADO", "KG", "22,135", "0", "45,928", "2,350", { es: "Sí", pt: "Sim" }],
      ["MAIONESE", "KG", "33,030", "0,090", "42,330", "6,917", { es: "Sí", pt: "Sim" }],
      ["ALFACE", "KG", "3,396", "1,055", "2,060", "0,690", { es: "Sí", pt: "Sim" }],
      ["BATATA PALHA", "KG", { es: "11,460 semilla", pt: "11,460 semente" }, "0,060", "29,580 *", "11,460", { es: "Sí", pt: "Sim" }],
      ["CATCHUP", "KG", "0", "0,040", "13,364 *", "19,612", { es: "Sí", pt: "Sim" }],
      ["MOSTARDA", "KG", "0", "0,016", "5,228 *", "16,250", { es: "Sí", pt: "Sim" }],
      ["TOMATE", "KG", "2,275", "0,555", "4,635", "2,330", { es: "Sí", pt: "Sim" }],
      ["GRÃOS", "KG", "0", "0,340", "3,822", "2,135", { es: "Sí", pt: "Sim" }],
      ["MOLHO BARBECUE", "KG", { es: "462,013 semilla", pt: "462,013 semente" }, "0", "2,472", "0,420", { es: "Sí (lote fantasma ya vaciado)", pt: "Sim (lote fantasma já esvaziado)" }],
      ["AZEITE", "L", "0", "0", "0,250", "3,520", { es: "Sí", pt: "Sim" }],
      ["GUARDANAPO FLORAX", "UM", { es: "5.000 semilla", pt: "5.000 semente" }, "0", { es: "0 (uso tienda)", pt: "0 (uso loja)" }, "5.000", { es: "Sí", pt: "Sim" }],
    ],
    ingredientsNote: {
      es: "Altas = lotes creados en la ventana (manual o semilla). Consumo ficha = receta × unidades vendidas, sin personalizaciones. *Sobreestima toppings opcionales (p. ej. palha en Vira-lata). El pan y la salchicha son obligatorios y cierran: esa es la prueba fuerte de que el motor de descuento funciona.",
      pt: "Entradas = lotes criados na janela (manual ou semente). Consumo ficha = receita × unidades vendidas, sem personalizações. *Superestima toppings opcionais (ex.: palha no Vira-lata). Pão e salsicha são obrigatórios e fecham: essa é a prova forte de que o motor de baixa funciona.",
    },
    discardsIngTitle: {
      es: "Descartes de materia prima (46 eventos)",
      pt: "Descartes de matéria-prima (46 eventos)",
    },
    discardsIngHeaders: {
      es: ["Insumo", "Cantidad", "Eventos", "Motivo típico"],
      pt: ["Insumo", "Quantidade", "Eventos", "Motivo típico"],
    },
    discardsIng: [
      ["PÃO NORMAL", "6 UM", "6", { es: "Pan quebrado / pedido mal armado / quedó frío", pt: "Pão quebrado / pedido mal montado / ficou frio" }],
      ["ALFACE", "1,055 kg", "15", { es: "Queimado / murcho", pt: "Queimado / murcho" }],
      ["TOMATE", "0,555 kg", "4", { es: "Azedo / partes estragadas", pt: "Azedo / partes estragadas" }],
      ["SALSICHA FRANKFURT", "0,500 kg", "5", { es: "Cayó, estalló, error de receta, quedó frío", pt: "Caiu, estourou, erro de receita, ficou frio" }],
      ["GRÃOS", "0,340 kg", "2", "Azedo"],
      ["MAIONESE", "0,090 kg", "3", { es: "Pedido frío / receta mal hecha", pt: "Pedido frio / receita errada" }],
      ["BATATA PALHA", "0,060 kg", "3", { es: "Mismo grupo de errores de receta", pt: "Mesmo grupo de erros de receita" }],
      ["CATCHUP", "0,040 kg", "4", { es: "Errores de receta", pt: "Erros de receita" }],
      ["MOSTARDA", "0,016 kg", "4", { es: "Errores de receta", pt: "Erros de receita" }],
    ],
    discardsProdTitle: {
      es: "Descartes de producto (2 eventos)",
      pt: "Descartes de produto (2 eventos)",
    },
    discardsProd: [
      {
        name: "COCA-COLA ZERO 350ML · 180 uds",
        when: { es: "3/8 21:52 UY · superadmin", pt: "3/8 21:52 UY · superadmin" },
        reason: "errei, era para adc normal",
      },
      {
        name: "EMPANADA DE CARNE · 2 uds",
        when: { es: "14/8 16:44 UY · superadmin", pt: "14/8 16:44 UY · superadmin" },
        reason: "TROCOU 2 DE RyQ POR DUAS DE CARNE",
      },
    ],
    invoicesNote: {
      es: "3 notas fiscales en el período (Focatto ×2, Atacadão ×1): 0 ítems vinculados a insumo o producto. Las compras reales de pan, frankfurter, queijo y mayo se cargaron como lotes manuales.",
      pt: "3 notas fiscais no período (Focatto ×2, Atacadão ×1): 0 itens vinculados a insumo ou produto. As compras reais de pão, frankfurter, queijo e maionese foram lançadas como lotes manuais.",
    },
    deliveryTitle: {
      es: "Delivery web (8 pedidos en 3 semanas)",
      pt: "Delivery web (8 pedidos em 3 semanas)",
    },
    deliveryHeaders: {
      es: ["#", "Tienda", "Estado", "Modo", "Creado (UTC)"],
      pt: ["#", "Loja", "Status", "Modo", "Criado (UTC)"],
    },
    delivery: [
      ["8388", "sineriz", "ready", "home", "1/8 13:43"],
      ["8837", "sineriz", { es: "cancelled (teste / Ezequiel)", pt: "cancelled (teste / Ezequiel)" }, "home", "7/8 18:26"],
      ["8865", "matriz", { es: "ready (listo 3 días después)", pt: "ready (pronto 3 dias depois)" }, "home", "8/8 00:27"],
      ["9116", "sineriz", "completed", "counter", "11/8 00:42"],
      ["9148", "matriz", "completed", "counter", "11/8 22:44"],
      ["9232", "matriz", "ready", "counter", "13/8 20:32"],
      ["9296", "matriz", { es: "pending (abandonado)", pt: "pending (abandonado)" }, "home", "15/8 00:18"],
      ["9297", "matriz", { es: "pending (abandonado)", pt: "pending (abandonado)" }, "home", "15/8 00:19"],
    ],
    deliveryNote: {
      es: "El delivery no mueve un volumen que pueda explicar faltantes de insumo. Dos pending en Matriz nunca se marcaron listos: no descontaron stock.",
      pt: "O delivery não move um volume que explique faltas de insumo. Dois pending na Matriz nunca foram marcados prontos: não descontaram estoque.",
    },
    methodTitle: { es: "Cómo se auditó", pt: "Como foi auditado" },
    methodBody: {
      es: "Consultas SELECT contra producción, transacción de solo lectura. Ventas = pedidos ready/completed. Canal delivery = createdBy delivery. Altas de insumo = lotes FIFO. Descartes = tablas de descarte. Integridad = stock vs suma de remainingQty de lotes activos. Consumo teórico = recetas actuales × cantidades por productId (no por nombre). El sistema no guarda un libro diario de cada retiro por pedido: palha/mayo con extras no se reconstruyen al gramo sin replay de personalizaciones. Pan y frankfurter, que no se personalizan, sí cierran.",
      pt: "Consultas SELECT contra produção, transação somente leitura. Vendas = pedidos ready/completed. Canal delivery = createdBy delivery. Entradas de insumo = lotes FIFO. Descartes = tabelas de descarte. Integridade = estoque vs soma de remainingQty dos lotes ativos. Consumo teórico = receitas atuais × quantidades por productId (não por nome). O sistema não guarda um livro diário de cada baixa por pedido: palha/maionese com extras não se reconstroem ao grama sem replay das personalizações. Pão e frankfurter, que não se personalizam, fecham.",
    },
  },
];
