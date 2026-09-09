/**
 * Informes de auditoría de inventario publicados en la bitácora.
 * REGLA: los informes nuevos van AL PRINCIPIO del array.
 * Textos: string (es) o { es, pt }.
 */
window.BITACORA_AUDIT_REPORTS = [
  {
    id: "2026-09-09-panes",
    at: "2026-09-09T09:40:00-03:00",
    title: {
      es: "Auditoría de stock de panes — 2,5 semanas",
      pt: "Auditoria de estoque de pães — 2,5 semanas",
    },
    period: {
      es: "24/08/2026 00:00 a 09/09/2026 23:59 (hora Uruguay)",
      pt: "24/08/2026 00:00 a 09/09/2026 23:59 (horário Uruguai)",
    },
    source: {
      es: "API de producción (Render) · solo lectura · sin cambios en el banco",
      pt: "API de produção (Render) · somente leitura · sem alterações no banco",
    },
    verdictTone: "warn",
    verdictTitle: {
      es: "Veredicto: el libro de Siñeriz cierra; el número “errado” es stock negativo + suma al cargar compra",
      pt: "Veredito: o livro de Siñeriz fecha; o número “errado” é estoque negativo + soma ao lançar a compra",
    },
    verdictBody: {
      es: "En Siñeriz (la tienda que opera) PÃO NORMAL hoy es 32 UM y coincide con los lotes FIFO (22 + 10). En la ventana se vendieron 746 panes (1 por hot dog), se cargaron 1.154 y se descartaron 121. La apertura implícita el 24/08 ya era −255. El sistema deja vender sin compra y, al ingresar N panes, hace stock + N (ej. −238 + 300 = 62). El historial muestra 62, no 300. No hay doble descuento. Matriz no vendió panes en el período.",
      pt: "Em Siñeriz (a loja que opera) PÃO NORMAL hoje é 32 UM e coincide com os lotes FIFO (22 + 10). Na janela venderam-se 746 pães (1 por hot dog), lançaram-se 1.154 e descartaram-se 121. A abertura implícita em 24/08 já era −255. O sistema deixa vender sem compra e, ao entrar N pães, faz estoque + N (ex. −238 + 300 = 62). O Histórico mostra 62, não 300. Não há desconto duplo. A Matriz não vendeu pães no período.",
    },
    kpis: [
      { value: "32", label: { es: "Stock Siñeriz hoy (= FIFO)", pt: "Estoque Siñeriz hoje (= FIFO)" } },
      { value: "746", label: { es: "Panes vendidos (ficha)", pt: "Pães vendidos (ficha)" } },
      { value: "1.154", label: { es: "Entradas cargadas", pt: "Entradas lançadas" } },
      { value: "−238", label: { es: "Peor saldo antes de una compra (8/09)", pt: "Pior saldo antes de uma compra (8/09)" }, tone: "warn" },
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
            "Al cargar 300 panes el 8/09 el historial muestra −238 → 62, no 300. Otras cargas partieron de −161, −65, −12 y −4.",
            "Se vende sin anotar la compra. El motor suma en aritmética (negativo + llegada).",
            "No es un bug de resta. Sí es el número que el local lee como error.",
          ],
          pt: [
            "Atenção",
            "Ao lançar 300 pães em 8/09 o histórico mostra −238 → 62, não 300. Outras entradas partiram de −161, −65, −12 e −4.",
            "Vende-se sem lançar a compra. O motor soma em aritmética (negativo + chegada).",
            "Não é bug de baixa. É o número que o local lê como erro.",
          ],
        },
      },
      {
        tone: "warn",
        cells: {
          es: [
            "Atención",
            "31/08: descarte de 100 UM con motivo “LEVOU PARA LOJA MATRIZ”.",
            "Se bajó como descarte, no como transferencia. En Matriz no hay ninguna entrada de pan en la ventana; el stock de PÃO NORMAL no se tocó desde el 28/08.",
            "No. El descarte restó exactamente 100 en Siñeriz. Esos 100 no ingresaron en Matriz.",
          ],
          pt: [
            "Atenção",
            "31/08: descarte de 100 UM com motivo “LEVOU PARA LOJA MATRIZ”.",
            "Baixou como descarte, não como transferência. Na Matriz não há nenhuma entrada de pão na janela; o estoque de PÃO NORMAL não foi tocado desde 28/08.",
            "Não. O descarte descontou exatamente 100 em Siñeriz. Esses 100 não entraram na Matriz.",
          ],
        },
      },
      {
        tone: "alert",
        cells: {
          es: [
            "Integridad",
            "Matriz PÃO NORMAL: stock 47 vs lotes FIFO 50 (faltan 3 panes en el contador).",
            "Tienda inactiva en la ventana (0 ventas). Hueco anterior al 24/08.",
            "Sí, desajuste viejo de ledger en Matriz. No afecta Siñeriz.",
          ],
          pt: [
            "Integridade",
            "Matriz PÃO NORMAL: estoque 47 vs lotes FIFO 50 (faltam 3 pães no contador).",
            "Loja inativa na janela (0 vendas). Buraco anterior a 24/08.",
            "Sim, desajuste antigo de ledger na Matriz. Não afeta Siñeriz.",
          ],
        },
      },
      {
        tone: "info",
        cells: {
          es: [
            "Dato",
            "2/09: lote semilla de 4 UM, agotado en una hora.",
            "Típico de devolver stock al cancelar cuando no hay lotes activos (restoreFifo).",
            "No mueve el hueco de cientos. No es doble venta.",
          ],
          pt: [
            "Dado",
            "2/09: lote semente de 4 UM, esgotado em uma hora.",
            "Típico de devolver estoque ao cancelar quando não há lotes ativos (restoreFifo).",
            "Não move o buraco de centenas. Não é venda dupla.",
          ],
        },
      },
      {
        tone: "ok",
        cells: {
          es: [
            "OK",
            "Siñeriz hoy: stock 32 = remainingQty de lotes. 746 panes de ficha = 746 hot dogs con productId. 0 líneas sin producto.",
            "FIFO y contador alineados después de 737 pedidos listos/completados.",
            "No hay corrida stock vs lotes en la tienda operativa.",
          ],
          pt: [
            "OK",
            "Siñeriz hoje: estoque 32 = remainingQty dos lotes. 746 pães da ficha = 746 hot dogs com productId. 0 linhas sem produto.",
            "FIFO e contador alinhados após 737 pedidos prontos/concluídos.",
            "Não há corrida estoque vs lotes na loja operacional.",
          ],
        },
      },
    ],
    productsTitle: {
      es: "Hot dogs con receta de PÃO NORMAL (Siñeriz, listos + completados)",
      pt: "Hot dogs com receita de PÃO NORMAL (Siñeriz, prontos + concluídos)",
    },
    productsHeaders: {
      es: ["Producto", "Canal", "Uds.", "Stock actual", "Notas"],
      pt: ["Produto", "Canal", "Uds.", "Estoque atual", "Notas"],
    },
    products: [
      [
        "Cimarrón, Rottweiler, Chihuahua, Bulldog, Vira-lata, Vira-lata promo",
        { es: "PDV + delivery (737 pedidos)", pt: "PDV + delivery (737 pedidos)" },
        "746",
        "n/a (ficha)",
        { es: "1 pan cada uno. Sin líneas huérfanas (todas con productId).", pt: "1 pão cada. Sem linhas órfãs (todas com productId)." },
      ],
    ],
    productsNote: {
      es: "Los hot dogs no restan stock del producto: se descuenta PÃO NORMAL. Días sin venta de pan: 31/08, 07/09 y 09/09 (hasta las 09:28). El 06/09 fue el pico (135 panes).",
      pt: "Os hot dogs não baixam estoque do produto: desconta-se PÃO NORMAL. Dias sem venda de pão: 31/08, 07/09 e 09/09 (até 09:28). O 06/09 foi o pico (135 pães).",
    },
    ingredientsTitle: {
      es: "Panes — altas, consumo teórico, descarte, saldo",
      pt: "Pães — entradas, consumo teórico, descarte, saldo",
    },
    ingredientsHeaders: {
      es: ["Insumo", "Unidad", "Altas 2,5 sem.", "Descarte", "Consumo ficha", "Stock hoy", "Lotes = stock"],
      pt: ["Insumo", "Unidade", "Entradas 2,5 sem.", "Descarte", "Consumo ficha", "Estoque hoje", "Lotes = estoque"],
    },
    ingredients: [
      ["Siñeriz PÃO NORMAL", "UM", "1.154", "121", "746", "32", { es: "Sí (apertura implícita −255)", pt: "Sim (abertura implícita −255)" }],
      ["Matriz PÃO NORMAL", "UM", "0", "0", "0", "47", { es: "No (lotes 50, hueco −3)", pt: "Não (lotes 50, buraco −3)" }],
      ["Matriz PÃO EXTRA", "UM", "0", "0", "0", "93", { es: "Sí", pt: "Sim" }],
    ],
    ingredientsNote: {
      es: "Identidad Siñeriz: −255 + 1.154 − 746 − 121 = 32. Cinco cargas partieron de stock negativo; la del 8/09 (−238 + 300 = 62) es la más visible en el historial. Entre dos snapshots hay un desfase de 1 UM (venta o carrera al grabar).",
      pt: "Identidade Siñeriz: −255 + 1.154 − 746 − 121 = 32. Cinco entradas partiram de estoque negativo; a de 8/09 (−238 + 300 = 62) é a mais visível no histórico. Entre dois snapshots há um desvio de 1 UM (venda ou corrida ao gravar).",
    },
    discardsIngTitle: {
      es: "Descartes de pan (5 eventos, 121 UM)",
      pt: "Descartes de pão (5 eventos, 121 UM)",
    },
    discardsIngHeaders: {
      es: ["Insumo", "Cantidad", "Eventos", "Motivo típico"],
      pt: ["Insumo", "Quantidade", "Eventos", "Motivo típico"],
    },
    discardsIng: [
      ["PÃO NORMAL · 31/08", "100 UM", "1", { es: "LEVOU PARA LOJA MATRIZ (no ingresó en Matriz)", pt: "LEVOU PARA LOJA MATRIZ (não entrou na Matriz)" }],
      ["PÃO NORMAL · 01/09", "18 UM", "1", "VENCIDO"],
      ["PÃO NORMAL · 24/08, 29/08, 06/09", "3 UM", "3", { es: "Quebró / prueba de masa / fino y se quebró", pt: "Quebrou / teste de massa / fino e quebrou" }],
    ],
    discardsProdTitle: {
      es: "Descartes de producto",
      pt: "Descartes de produto",
    },
    discardsProd: [
      {
        name: "—",
        when: { es: "24/08–09/09", pt: "24/08–09/09" },
        reason: "—",
      },
    ],
    invoicesNote: {
      es: "Las compras de pan en Siñeriz se cargaron como lotes manuales o transferencia ya paga (50 + 50 + 10 UM). No se cruzaron notas fiscales en esta corrida.",
      pt: "As compras de pão em Siñeriz foram lançadas como lotes manuais ou transferência já paga (50 + 50 + 10 UM). Não se cruzaram notas fiscais nesta corrida.",
    },
    deliveryTitle: {
      es: "Cancelaciones en la ventana",
      pt: "Cancelamentos na janela",
    },
    deliveryHeaders: {
      es: ["#", "Tienda", "Estado", "Restock", "Cuándo"],
      pt: ["#", "Loja", "Status", "Restock", "Quando"],
    },
    delivery: [
      ["10597", "sineriz", "cancelled", { es: "sí · 1 Vira-lata", pt: "sim · 1 Vira-lata" }, "8/09 13:22 UY"],
      ["10279", "sineriz", "cancelled", { es: "no (empanadas)", pt: "não (empanadas)" }, "3/09 13:28 UY"],
      ["10232", "sineriz", "cancelled", { es: "no (donut)", pt: "não (donut)" }, "1/09 22:26 UY"],
      ["10099", "sineriz", "cancelled", { es: "sí · 1 Salsicha Kids", pt: "sim · 1 Salsicha Kids" }, "29/08 16:56 UY"],
      ["10230", "matriz", "cancelled", { es: "no · Dog Vira-lata", pt: "não · Dog Vira-lata" }, "1/09 22:02 UY"],
    ],
    deliveryNote: {
      es: "Cinco cancelaciones en Siñeriz y dos en Matriz (se listan las de pan o las recientes). Una sola devolvió un hot dog al stock. No explican el hueco de cientos. El delivery no se partió aparte: las 746 unidades son todos los ready/completed.",
      pt: "Cinco cancelamentos em Siñeriz e dois na Matriz (listam-se os de pão ou os recentes). Só um devolveu um hot dog ao estoque. Não explicam o buraco de centenas. O delivery não foi separado: as 746 unidades são todos os ready/completed.",
    },
    methodTitle: { es: "Cómo se auditó", pt: "Como foi auditado" },
    methodBody: {
      es: "GET de solo lectura a la API de producción. Ventas = pedidos ready/completed con instante COALESCE(readyAt, updatedAt, createdAt). Consumo = receta actual × cantidad (PÃO NORMAL = 1 UM por hot dog). Altas = lotes FIFO (manual, transfer, seed) con snapshot stockBefore/stockAfter. Descartes = ingredient_discards. Integridad = stock vs suma de remainingQty. Identidad de la ventana = apertura implícita + altas − ventas − descartes = stock actual. No se escribió nada en el banco.",
      pt: "GET somente leitura na API de produção. Vendas = pedidos ready/completed com instante COALESCE(readyAt, updatedAt, createdAt). Consumo = receita atual × quantidade (PÃO NORMAL = 1 UM por hot dog). Entradas = lotes FIFO (manual, transfer, seed) com snapshot stockBefore/stockAfter. Descartes = ingredient_discards. Integridade = estoque vs soma de remainingQty. Identidade da janela = abertura implícita + entradas − vendas − descartes = estoque atual. Nada foi escrito no banco.",
    },
  },
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
