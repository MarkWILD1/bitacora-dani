/**
 * Bitácora Dani — feed cronológico.
 * REGLA: las entradas nuevas van AL PRINCIPIO del array (más reciente arriba).
 * t = fecha/hora ISO con zona -03:00 (Uruguay).
 * Textos: string (es) o { es, pt }.
 * Fuente histórica: TODO.md de danis-hotdog-system (fechas de aplicación del bloque).
 */
window.BITACORA_CHANGELOG = [
  {
    at: "2026-08-13T18:52:00-03:00",
    module: { es: "Delivery", pt: "Delivery" },
    moduleHref: "propuestas/delivery.html",
    title: {
      es: "Modal de despacho horizontal: motoboys a la izquierda, botones a la derecha",
      pt: "Modal de despacho horizontal: motoboys à esquerda, botões à direita",
    },
    status: "done",
    details: {
      es: [
        "La lista de motoboys queda a la izquierda y se puede scrollear completa",
        "Dar salida y Cancelar quedan fijos a la derecha, siempre visibles"
      ],
      pt: [
        "A lista de motoboys fica à esquerda e pode ser rolada por completo",
        "Dar saída e Cancelar ficam fixos à direita, sempre visíveis"
      ],
    },
  },
  {
    at: "2026-08-13T18:50:00-03:00",
    module: { es: "Delivery", pt: "Delivery" },
    moduleHref: "propuestas/delivery.html",
    title: {
      es: "Al despachar se elige el motoboy de la lista",
      pt: "Ao despachar escolhe-se o motoboy da lista",
    },
    status: "done",
    details: {
      es: [
        "Despachar ya no sale solo: abre la lista de motoboys (nombre y celular)",
        "El cajero elige quién lleva el pedido y confirma Dar salida",
        "Si no hay motoboys cargados, avisa y lleva a la pestaña Motoboys"
      ],
      pt: [
        "Despachar já não sai sozinho: abre a lista de motoboys (nome e celular)",
        "O caixa escolhe quem leva o pedido e confirma Dar saída",
        "Se não houver motoboys cadastrados, avisa e leva à aba Motoboys"
      ],
    },
  },
  {
    at: "2026-08-13T18:35:00-03:00",
    module: { es: "Delivery", pt: "Delivery" },
    moduleHref: "propuestas/delivery.html",
    title: {
      es: "Despacho del motoboy primero; el cobro queda para el retorno",
      pt: "Despacho do motoboy primeiro; a cobrança fica para o retorno",
    },
    status: "done",
    details: {
      es: [
        "El cajero despacha el pedido listo sin cobrar: el motoboy sale y el cliente ve «en camino»",
        "Cuando el motoboy vuelve, en el PDV (columna En ruta / cobro) se registra efectivo, PIX o máquina",
        "Retirada en mostrador sigue cobrando en el momento; PagBank se confirma en caja al retorno"
      ],
      pt: [
        "O caixa despacha o pedido pronto sem cobrar: o motoboy sai e o cliente vê «a caminho»",
        "Quando o motoboy volta, no PDV (coluna Em rota / cobrança) registra dinheiro, PIX ou máquina",
        "Retirada no balcão continua cobrando na hora; PagBank confirma no caixa no retorno"
      ],
    },
  },
  {
    at: "2026-08-13T18:10:00-03:00",
    module: { es: "SuperAdmin", pt: "SuperAdmin" },
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Fix: el descuento de materia prima queda aislado por tienda",
      pt: "Fix: o desconto de matéria-prima fica isolado por loja",
    },
    status: "done",
    details: {
      es: [
        "Un pedido de Matriz no descuenta stock de Siñeriz (y al revés), aunque el ingrediente se llame igual",
        "Frankfurter ya no toma la salchicha de la otra tienda si falta en la local",
        "Test: pedido Matriz → pedido Siñeriz, cada uno mueve solo su materia prima"
      ],
      pt: [
        "Um pedido da Matriz não desconta estoque do Siñeriz (e vice-versa), mesmo com o mesmo nome de ingrediente",
        "Frankfurter já não pega a salsicha da outra loja se faltar na local",
        "Teste: pedido Matriz → pedido Siñeriz, cada um move só a sua matéria-prima"
      ],
    },
  },
  {
    at: "2026-08-13T17:56:00-03:00",
    module: { es: "KDS - Kitchen", pt: "KDS - Kitchen" },
    moduleHref: "propuestas/kitchen.html",
    title: {
      es: "Fix: pedidos delivery de Matriz ya no aparecen en la cocina de Siñeriz",
      pt: "Fix: pedidos delivery da Matriz não aparecem mais na cozinha do Siñeriz",
    },
    status: "done",
    details: {
      es: [
        "El KDS de Siñeriz metía pedidos de Matriz cuando PagBank u otro update llegaba por WebSocket",
        "Kitchen ahora ignora (y saca) cualquier pedido que no sea de su tienda",
        "El backend emite new-order a la sala kitchen:matriz / kitchen:sineriz"
      ],
      pt: [
        "O KDS do Siñeriz inseria pedidos da Matriz quando PagBank ou outro update chegava por WebSocket",
        "Kitchen agora ignora (e remove) qualquer pedido que não seja da sua loja",
        "O backend emite new-order para a sala kitchen:matriz / kitchen:sineriz"
      ],
    },
  },
  {
    at: "2026-08-12T19:05:00-03:00",
    module: { es: "Login", pt: "Login" },
    moduleHref: "index.html",
    title: {
      es: "Fix: tildes y ç rotos en portugués en producción",
      pt: "Fix: acentos e ç quebrados no português em produção",
    },
    status: "done",
    details: {
      es: [
        "pt.json tenía el texto UTF-8 guardado mal varias veces (Administração se veía como ADMINISTRAÃ§Ã£O)",
        "El español no se tocaba: por eso en local (idioma ES) se veía bien y en producción (PT por defecto) no",
        "Se restauró el portugués y un test evita que vuelva a commitearse mojibake"
      ],
      pt: [
        "pt.json tinha o texto UTF-8 gravado errado várias vezes (Administração aparecia como ADMINISTRAÃ§Ã£O)",
        "O espanhol não foi afetado: por isso no local (idioma ES) via-se bem e em produção (PT padrão) não",
        "Português restaurado e um teste evita que o mojibake volte a ser commitado"
      ],
    },
  },
  {
    at: "2026-08-12T11:43:00-03:00",
    module: { es: "Delivery", pt: "Delivery" },
    moduleHref: "propuestas/delivery.html",
    title: {
      es: "Fix: no re-liquidar pedidos ya despachados en el tablero",
      pt: "Fix: não re-liquidar pedidos já despachados no painel",
    },
    status: "done",
    details: {
      es: [
        "Pedidos ya liquidados/despachados muestran En ruta / Ya liquidado en lugar de Finalizar",
        "Backend idempotente al reintentar settle (sin error El pedido ya fue liquidado)",
        "Guardas en PDV para no abrir de nuevo el cobro de un pedido cerrado"
      ],
      pt: [
        "Pedidos já liquidados/despachados mostram Em rota / Já liquidado no lugar de Finalizar",
        "Backend idempotente ao retentar settle (sem erro El pedido ya fue liquidado)",
        "Guards no PDV para não reabrir cobrança de pedido já fechado"
      ],
    },
  },
  {
    at: "2026-08-12T11:20:00-03:00",
    module: { es: "Delivery", pt: "Delivery" },
    moduleHref: "propuestas/delivery.html",
    title: {
      es: "Tablero de pedidos estilo Anota AI en PDV y SuperAdmin",
      pt: "Painel de pedidos estilo Anota AI no PDV e SuperAdmin",
    },
    status: "done",
    details: {
      es: [
        "Kanban Em análise / Em produção / Prontos para entrega con tarjetas detalladas",
        "Modal de detalle completo al clic (cliente, entrega, pago, origen, NF, ítems, taxa)",
        "Misma UI en botón Delivery del PDV (pestaña Pedidos) y en /superadmin/delivery",
        "Tiempos balcão/delivery editables y auto-aceptar pedidos entrantes"
      ],
      pt: [
        "Kanban Em análise / Em produção / Prontos para entrega com cartões detalhados",
        "Modal de detalhe completo ao clicar (cliente, entrega, pagamento, origem, NF, itens, taxa)",
        "Mesma UI no botão Delivery do PDV (aba Pedidos) e em /superadmin/delivery",
        "Tempos balcão/delivery editáveis e aceite automático de pedidos entrantes"
      ],
    },
  },
  {
    at: "2026-08-08T15:55:00-03:00",
    module: { es: "Capacitación", pt: "Capacitação" },
    moduleHref: "propuestas/capacitacion.html",
    title: {
      es: "Propuesta: capacitación gamificada para colaboradores",
      pt: "Proposta: capacitação gamificada para colaboradores",
    },
    status: "proposal",
    details: {
      es: [
        "Plataforma con login, pruebas de procesos y resultados inmediatos",
        "Evolución por funcionario y plan de carrera en la empresa",
        "Integración de pruebas Zona de Desarrollo de Genialidad (ZDG)"
      ],
      pt: [
        "Plataforma com login, provas de processos e resultados imediatos",
        "Evolução por funcionário e plano de carreira na empresa",
        "Integração de provas Zona de Desenvolvimento de Genialidade (ZDG)"
      ],
    },
  },
  {
    at: "2026-08-08T15:46:00-03:00",
    module: { es: "Bitácora", pt: "Bitácora" },
    moduleHref: "index.html",
    title: {
      es: "Mismo formato de Resumen en todos los módulos",
      pt: "Mesmo formato de Resumo em todos os módulos",
    },
    status: "done",
    details: {
      es: [
        "PDV, SuperAdmin, KDS - Kitchen, Delivery y Caja usan el feed cronológico",
        "Cada frente filtra solo sus implementaciones, de más reciente a más antigua"
      ],
      pt: [
        "PDV, SuperAdmin, KDS - Kitchen, Delivery e Caixa usam o feed cronológico",
        "Cada frente filtra só as suas implementações, da mais recente à mais antiga"
      ],
    },
  },
  {
    at: "2026-08-08T15:26:00-03:00",
    module: { es: "Bitácora", pt: "Bitácora" },
    moduleHref: "index.html",
    title: {
      es: "Renombrar Kitchen a KDS - Kitchen",
      pt: "Renomear Kitchen para KDS - Kitchen",
    },
    status: "done",
    details: {
      es: [
        "Menú lateral y enlaces de módulo usan KDS - Kitchen",
        "Título y barra de la página de detalle actualizados"
      ],
      pt: [
        "Menu lateral e links de módulo usam KDS - Kitchen",
        "Título e barra da página de detalhe atualizados"
      ],
    },
  },
  {
    at: "2026-08-08T13:54:00-03:00",
    module: { es: "Bitácora", pt: "Bitácora" },
    moduleHref: "index.html",
    title: {
      es: "Selector de idioma ES / PT en toda la bitácora",
      pt: "Seletor de idioma ES / PT em toda a bitácora",
    },
    status: "done",
    details: {
      es: [
        "Botón ES/PT en el menú lateral (también con menú colapsado)",
        "Traducción de navegación, badges, footers y páginas de detalle",
        "Preferencia guardada en el navegador y aplicada al feed cronológico"
      ],
      pt: [
        "Botão ES/PT no menu lateral (também com menu recolhido)",
        "Tradução da navegação, badges, footers e páginas de detalhe",
        "Preferência salva no navegador e aplicada ao feed cronológico"
      ],
    },
  },
  {
    at: "2026-08-08T13:45:00-03:00",
    module: { es: "Caja", pt: "Caixa" },
    moduleHref: "propuestas/caja.html",
    title: {
      es: "Imprimir sangría y reforço al registrarlos",
      pt: "Imprimir sangria e reforço ao registrá-los",
    },
    status: "done",
    details: {
      es: [
        "Al registrar sangría o reforço se imprime ticket ESC/POS en el puente de la tienda",
        "Ticket con turno, atendente, fecha/hora, valor, obs, saldo y firma",
        "Test de formato en receipt-printer-bridge"
      ],
      pt: [
        "Ao registrar sangria ou reforço imprime ticket ESC/POS na ponte da loja",
        "Ticket com turno, atendente, data/hora, valor, obs, saldo e assinatura",
        "Teste de formato no receipt-printer-bridge"
      ],
    },
  },
  {
    at: "2026-08-08T12:20:00-03:00",
    module: "PDV",
    moduleHref: "propuestas/pdv.html",
    title: {
      es: "UI del sistema en mayúsculas",
      pt: "UI do sistema em maiúsculas",
    },
    status: "done",
    details: {
      es: [
        "Labels, botones y copy de UI en mayúsculas",
        "Inputs, contraseñas y PIN conservan el casing real del usuario",
        "Clase preserve-case en login, usuarios y entregadores"
      ],
      pt: [
        "Labels, botões e copy da UI em maiúsculas",
        "Inputs, senhas e PIN conservam o casing real do usuário",
        "Classe preserve-case no login, usuários e entregadores"
      ],
    },
  },
  {
    at: "2026-08-06T18:10:00-03:00",
    module: "Delivery",
    moduleHref: "propuestas/delivery.html",
    title: {
      es: "Fix banner de pedido en curso en la landing",
      pt: "Fix do banner de pedido em andamento na landing",
    },
    status: "done",
    details: {
      es: [
        "El banner ya no empuja la topbar ni deja franja cream sin rojo",
        "Banner fijo dentro del hero, debajo de la topbar"
      ],
      pt: [
        "O banner não empurra mais a topbar nem deixa faixa cream sem vermelho",
        "Banner fixo dentro do hero, abaixo da topbar"
      ],
    },
  },
  {
    at: "2026-08-06T17:30:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Tasa de cambio BRL→UYU por tienda",
      pt: "Taxa de câmbio BRL→UYU por loja",
    },
    status: "done",
    details: {
      es: [
        "Setting independiente por tienda con fallback global",
        "Usada en PDV, delivery, caja, PagBank y desktop"
      ],
      pt: [
        "Setting independente por loja com fallback global",
        "Usada no PDV, delivery, caixa, PagBank e desktop"
      ],
    },
  },
  {
    at: "2026-08-06T16:40:00-03:00",
    module: "Delivery",
    moduleHref: "propuestas/delivery.html",
    title: {
      es: "Retirada en mostrador + plataforma entregadores",
      pt: "Retirada no balcão + plataforma entregadores",
    },
    status: "done",
    details: {
      es: [
        "Pedidos listos van al botón Delivery del PDV (badge + parpadeo)",
        "Login entregadores con celular + PIN; layout motoboys en 2 columnas",
        "PIN visible al editar; backfill de PINs legibles"
      ],
      pt: [
        "Pedidos prontos vão ao botão Delivery do PDV (badge + pisca)",
        "Login entregadores com celular + PIN; layout motoboys em 2 colunas",
        "PIN visível ao editar; backfill de PINs legíveis"
      ],
    },
  },
  {
    at: "2026-08-06T15:00:00-03:00",
    module: { es: "Sistema", pt: "Sistema" },
    moduleHref: "index.html",
    title: {
      es: "Pase Matriz: SuperAdmin, POS y KDS - Kitchen alineados",
      pt: "Passe Matriz: SuperAdmin, POS e KDS - Kitchen alinhados",
    },
    status: "done",
    details: {
      es: [
        "Catálogo y costos Matriz en R$; carrito dual R$ + $U",
        "KDS - Kitchen: pager solo en Matriz; cancel remueve del KDS",
        "Aislamiento de materia prima Matriz vs Siñeriz"
      ],
      pt: [
        "Catálogo e custos Matriz em R$; carrinho dual R$ + $U",
        "KDS - Kitchen: pager só na Matriz; cancel remove do KDS",
        "Isolamento de matéria-prima Matriz vs Siñeriz"
      ],
    },
  },
  {
    at: "2026-08-06T11:20:00-03:00",
    module: "Delivery",
    moduleHref: "propuestas/delivery.html",
    title: {
      es: "Rastreo de pedido no entregado desde el portal",
      pt: "Rastreio de pedido não entregue pelo portal",
    },
    status: "done",
    details: {
      es: [
        "Sección Pedidos en curso en /portal con botón Rastrear",
        "Reabrir monitoreo con ?track= y persistencia local",
        "Normalización de celular en backend para el lookup"
      ],
      pt: [
        "Seção Pedidos em andamento em /portal com botão Rastrear",
        "Reabrir monitoramento com ?track= e persistência local",
        "Normalização de celular no backend para o lookup"
      ],
    },
  },
  {
    at: "2026-08-06T10:00:00-03:00",
    module: "Delivery",
    moduleHref: "propuestas/delivery.html",
    title: {
      es: "Ticket conferencia Siñeriz en pesos ($U)",
      pt: "Ticket conferência Siñeriz em pesos ($U)",
    },
    status: "done",
    details: {
      es: [
        "Print al ingresar pedido delivery; sin ingreso a caja hasta liquidar en PDV",
        "Moneda nativa por tienda en el relay de impresión"
      ],
      pt: [
        "Print ao entrar pedido delivery; sem entrada em caixa até liquidar no PDV",
        "Moeda nativa por loja no relay de impressão"
      ],
    },
  },
  {
    at: "2026-08-05T16:30:00-03:00",
    module: "PDV",
    moduleHref: "propuestas/pdv.html",
    title: {
      es: "Ajustes delivery en POS y ficha técnica",
      pt: "Ajustes de delivery no POS e ficha técnica",
    },
    status: "done",
    details: {
      es: [
        "Reducir panel delivery en Dashboard; fix botón agregar al carrito",
        "Salida de materia prima en tab distinto",
        "Ingredientes nuevos visibles en flujo POS; carga ficha técnica",
        "Cancelar pedido enviado al KDS; encuadrar imágenes delivery"
      ],
      pt: [
        "Reduzir painel delivery no Dashboard; fix botão adicionar ao carrinho",
        "Saída de matéria-prima em aba distinta",
        "Ingredientes novos visíveis no fluxo POS; carga da ficha técnica",
        "Cancelar pedido enviado ao KDS; enquadrar imagens delivery"
      ],
    },
  },
  {
    at: "2026-08-04T15:00:00-03:00",
    module: { es: "Caja", pt: "Caixa" },
    moduleHref: "propuestas/caja.html",
    title: {
      es: "PDF de cierre de caja + código de proveedor",
      pt: "PDF de fechamento de caixa + código de fornecedor",
    },
    status: "done",
    details: {
      es: [
        "Botón para salvar y descargar PDF del cierre",
        "Proveedores con código automático vinculable a NF y materia prima"
      ],
      pt: [
        "Botão para salvar e baixar PDF do fechamento",
        "Fornecedores com código automático vinculável a NF e matéria-prima"
      ],
    },
  },
  {
    at: "2026-08-01T14:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Nota fiscal vinculada a stock",
      pt: "Nota fiscal vinculada ao estoque",
    },
    status: "done",
    details: {
      es: [
        "Relación NF ↔ stock al registrar movimientos de compra"
      ],
      pt: [
        "Relação NF ↔ estoque ao registrar movimentos de compra"
      ],
    },
  },
  {
    at: "2026-07-30T12:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Corrección de descartes e historial de stock",
      pt: "Correção de descartes e histórico de estoque",
    },
    status: "done",
    details: {
      es: [
        "Al agregar stock, valores negativos pasan a la cantidad ingresada",
        "Historial de alteraciones alineado con el movimiento real"
      ],
      pt: [
        "Ao adicionar estoque, valores negativos passam à quantidade informada",
        "Histórico de alterações alinhado ao movimento real"
      ],
    },
  },
  {
    at: "2026-07-08T11:00:00-03:00",
    module: "Desktop",
    moduleHref: "index.html",
    title: {
      es: "Migración a Electron + TypeScript",
      pt: "Migração para Electron + TypeScript",
    },
    status: "done",
    details: {
      es: [
        "App desktop local para operación de tienda"
      ],
      pt: [
        "App desktop local para operação da loja"
      ],
    },
  },
  {
    at: "2026-07-02T16:00:00-03:00",
    module: "Delivery",
    moduleHref: "propuestas/delivery.html",
    title: {
      es: "Portal de cliente, cashback y entrega en mostrador",
      pt: "Portal do cliente, cashback e entrega no balcão",
    },
    status: "done",
    details: {
      es: [
        "Login sin pedido obligatorio; historial y edición de datos",
        "Notas antes de confirmar; entrega no balcão desde delivery",
        "Asistente IA en SuperAdmin (intérprete y proyección)"
      ],
      pt: [
        "Login sem pedido obrigatório; histórico e edição de dados",
        "Notas antes de confirmar; entrega no balcão pelo delivery",
        "Assistente IA no SuperAdmin (intérprete e projeção)"
      ],
    },
  },
  {
    at: "2026-06-27T14:00:00-03:00",
    module: "Delivery",
    moduleHref: "propuestas/delivery.html",
    title: {
      es: "Landing y flujo de pedido online",
      pt: "Landing e fluxo de pedido online",
    },
    status: "done",
    details: {
      es: [
        "Landing idéntica a danishotdog; flujo de dogs, extras y upsell «Pide también»",
        "Layout de productos; conteo de extras; Instagram post manual"
      ],
      pt: [
        "Landing idêntica ao danishotdog; fluxo de dogs, extras e upsell «Pide también»",
        "Layout de produtos; contagem de extras; Instagram post manual"
      ],
    },
  },
  {
    at: "2026-06-27T12:00:00-03:00",
    module: { es: "Caja", pt: "Caixa" },
    moduleHref: "propuestas/caja.html",
    title: {
      es: "Reforço y nomenclatura dual de fechamento",
      pt: "Reforço e nomenclatura dual de fechamento",
    },
    status: "done",
    details: {
      es: [
        "Botón Reforço en PDV",
        "Cierre: totales R$ / $ / cartões+PIX, sangrías, reforços, troco inicial, crédito correntista",
        "Test completo del sistema; refactor SuperAdminDashboard compilando"
      ],
      pt: [
        "Botão Reforço no PDV",
        "Fechamento: totais R$ / $ / cartões+PIX, sangrias, reforços, troco inicial, crédito correntista",
        "Teste completo do sistema; refactor SuperAdminDashboard compilando"
      ],
    },
  },
  {
    at: "2026-06-16T18:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Pendiente: editar valores de Relatorio de contas por mes",
      pt: "Pendente: editar valores do Relatório de contas por mês",
    },
    status: "progress",
    details: {
      es: [
        "Pantalla debe mostrar el mes actual",
        "Al marcar un mes como pago no debe marcar los demás",
        "Nomenclatura: venta total en reales/pesos/tarjetas; troco inicial en vez de reforços mezclados"
      ],
      pt: [
        "Tela deve mostrar o mês atual",
        "Ao marcar um mês como pago não deve marcar os demais",
        "Nomenclatura: venda total em reais/pesos/cartões; troco inicial em vez de reforços misturados"
      ],
    },
  },
  {
    at: "2026-06-16T16:00:00-03:00",
    module: "PDV",
    moduleHref: "propuestas/pdv.html",
    title: {
      es: "Split pay, movimientos de caja e historial de pedidos",
      pt: "Split pay, movimentos de caixa e histórico de pedidos",
    },
    status: "done",
    details: {
      es: [
        "PIX siempre en reales (conversión); Siñeriz permite split pesos + reales",
        "Comandas: número de pedido alineado con KDS",
        "Movimientos: cash, card y PIX; opción de cambiar forma de pago",
        "Carrito muestra ítems que el cliente no quiere; historial completo (pager, delivery, dirección)",
        "Cancelación con justificación remueve del KDS; descuentos correctos en impresión",
        "Reinicio de numeración de pedidos a las 00:00 (no a las 21:00)",
        "Layout delivery tipo danishotdog.vercel; clases en sidebar; animación al agregar al carrito",
        "Bonificaciones: botón para abonar deuda + historial imprimible con filtro de fechas"
      ],
      pt: [
        "PIX sempre em reais (conversão); Siñeriz permite split pesos + reais",
        "Comandas: número do pedido alinhado com KDS",
        "Movimentos: cash, card e PIX; opção de mudar forma de pagamento",
        "Carrinho mostra itens que o cliente não quer; histórico completo (pager, delivery, endereço)",
        "Cancelamento com justificativa remove do KDS; descontos corretos na impressão",
        "Reinício da numeração de pedidos às 00:00 (não às 21:00)",
        "Layout delivery tipo danishotdog.vercel; classes na sidebar; animação ao adicionar ao carrinho",
        "Bonificações: botão para abater dívida + histórico imprimível com filtro de datas"
      ],
    },
  },
  {
    at: "2026-06-10T12:00:00-03:00",
    module: "Delivery",
    moduleHref: "propuestas/delivery.html",
    title: {
      es: "Pendiente: campos obligatorios y flujo editable del menú delivery",
      pt: "Pendente: campos obrigatórios e fluxo editável do menu delivery",
    },
    status: "progress",
    details: {
      es: [
        "Número de casa como campo aparte y obligatorio (además de nome, celular, rua)",
        "Flujo: elegir tienda → más pedidos / clases / combos editables desde SuperAdmin → Delivery",
        "Corregir costo mostrado en ítems (ej. capuccino)"
      ],
      pt: [
        "Número da casa como campo separado e obrigatório (além de nome, celular, rua)",
        "Fluxo: escolher loja → mais pedidos / classes / combos editáveis no SuperAdmin → Delivery",
        "Corrigir custo exibido em itens (ex. capuccino)"
      ],
    },
  },
  {
    at: "2026-06-09T14:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Auditoría de ventas: tortas pedidas vs marcadas",
      pt: "Auditoria de vendas: tortas pedidas vs marcadas",
    },
    status: "done",
    details: {
      es: [
        "Revisión mié–dom: 171 pedidas vs 142 marcadas — ajuste de conteo en sistema"
      ],
      pt: [
        "Revisão qua–dom: 171 pedidas vs 142 marcadas — ajuste de contagem no sistema"
      ],
    },
  },
  {
    at: "2026-06-02T15:00:00-03:00",
    module: "PDV",
    moduleHref: "propuestas/pdv.html",
    title: {
      es: "Combos, persistencia y sangrías en cierre",
      pt: "Combos, persistência e sangrias no fechamento",
    },
    status: "done",
    details: {
      es: [
        "Precio de dog suelto ya no hereda precio de combo previo",
        "Combos creados persisten tras refrescar",
        "Sangrías incluidas en operaciones y cierre de caja"
      ],
      pt: [
        "Preço do dog avulso não herda mais preço de combo anterior",
        "Combos criados persistem após atualizar",
        "Sangrias incluídas nas operações e no fechamento de caixa"
      ],
    },
  },
  {
    at: "2026-05-29T14:00:00-03:00",
    module: "Delivery",
    moduleHref: "propuestas/delivery.html",
    title: {
      es: "Delivery operativo + editar/eliminar motoboys",
      pt: "Delivery operacional + editar/excluir motoboys",
    },
    status: "done",
    details: {
      es: [
        "Delivery en funcionamiento",
        "Alta, edición y baja de motoboys"
      ],
      pt: [
        "Delivery em funcionamento",
        "Alta, edição e exclusão de motoboys"
      ],
    },
  },
  {
    at: "2026-05-27T14:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Auditoría exhaustiva de Materia prima",
      pt: "Auditoria exaustiva de Matéria-prima",
    },
    status: "done",
    details: {
      es: [
        "Revisión, corrección e implementación de acciones exhaustivas en MP"
      ],
      pt: [
        "Revisão, correção e implementação de ações exaustivas em MP"
      ],
    },
  },
  {
    at: "2026-05-26T12:00:00-03:00",
    module: { es: "KDS - Kitchen", pt: "KDS - Kitchen" },
    moduleHref: "propuestas/kitchen.html",
    title: {
      es: "Imprimir al cancelar pedido",
      pt: "Imprimir ao cancelar pedido",
    },
    status: "done",
    details: {
      es: [
        "Impresión de comprobante cuando se cancela un pedido"
      ],
      pt: [
        "Impressão de comprovante quando um pedido é cancelado"
      ],
    },
  },
  {
    at: "2026-05-24T16:00:00-03:00",
    module: "PDV",
    moduleHref: "propuestas/pdv.html",
    title: {
      es: "Impresora por tienda, combos en flujo y password colaboradores",
      pt: "Impressora por loja, combos no fluxo e senha de colaboradores",
    },
    status: "done",
    details: {
      es: [
        "Cierre en Matriz ya no imprime en Siñeriz; impresora de producción operativa",
        "SuperAdmin puede ver contraseña de colaboradores",
        "Combo con dog abre flujo de ingredientes del hotdog"
      ],
      pt: [
        "Fechamento na Matriz não imprime mais em Siñeriz; impressora de produção operacional",
        "SuperAdmin pode ver senha de colaboradores",
        "Combo com dog abre fluxo de ingredientes do hotdog"
      ],
    },
  },
  {
    at: "2026-05-24T12:00:00-03:00",
    module: "PDV",
    moduleHref: "propuestas/pdv.html",
    title: {
      es: "Pendiente: elegir gaseosa normal/zero en Dashboard",
      pt: "Pendente: escolher refrigerante normal/zero no Dashboard",
    },
    status: "proposal",
    details: {
      es: [
        "Opción normal o zero y activación para mostrar en el PDV"
      ],
      pt: [
        "Opção normal ou zero e ativação para mostrar no PDV"
      ],
    },
  },
  {
    at: "2026-05-23T14:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Descarte también en Productos con stock por unidad",
      pt: "Descarte também em Produtos com estoque por unidade",
    },
    status: "done",
    details: {
      es: [
        "Misma mecánica que Materia prima, solo en productos con stock en unidades"
      ],
      pt: [
        "Mesma mecânica da Matéria-prima, só em produtos com estoque em unidades"
      ],
    },
  },
  {
    at: "2026-05-22T14:00:00-03:00",
    module: "PDV",
    moduleHref: "propuestas/pdv.html",
    title: {
      es: "Nº de pedido en ticket y redondeo de precios",
      pt: "Nº do pedido no ticket e arredondamento de preços",
    },
    status: "done",
    details: {
      es: [
        "Número de pedido aparece en el ticket impreso",
        "Redondeo corregido (ej. 108 → 110 cuando corresponde)"
      ],
      pt: [
        "Número do pedido aparece no ticket impresso",
        "Arredondamento corrigido (ex. 108 → 110 quando corresponde)"
      ],
    },
  },
  {
    at: "2026-05-19T16:00:00-03:00",
    module: "PDV",
    moduleHref: "propuestas/pdv.html",
    title: {
      es: "Flujo POS editable por producto + aislamiento Matriz/Siñeriz",
      pt: "Fluxo POS editável por produto + isolamento Matriz/Siñeriz",
    },
    status: "done",
    details: {
      es: [
        "Cada paso del flujo se abre y edita por producto",
        "Productos de Matriz ya no aparecen en Siñeriz",
        "Descarte en Materia prima: día/hora, motivo y gramos"
      ],
      pt: [
        "Cada passo do fluxo abre e edita por produto",
        "Produtos da Matriz não aparecem mais em Siñeriz",
        "Descarte em Matéria-prima: dia/hora, motivo e gramas"
      ],
    },
  },
  {
    at: "2026-05-19T12:00:00-03:00",
    module: "Delivery",
    moduleHref: "propuestas/delivery.html",
    title: {
      es: "Pendiente: editar precios del menú digital (plataformas)",
      pt: "Pendente: editar preços do cardápio digital (plataformas)",
    },
    status: "progress",
    details: {
      es: [
        "Valores de plataformas de delivery distintos al catálogo interno"
      ],
      pt: [
        "Valores das plataformas de delivery diferentes do catálogo interno"
      ],
    },
  },
  {
    at: "2026-05-16T14:00:00-03:00",
    module: "Delivery",
    moduleHref: "propuestas/delivery.html",
    title: {
      es: "Listos para entregar: solo delivery (PDV + página Delivery)",
      pt: "Prontos para entregar: só delivery (PDV + página Delivery)",
    },
    status: "done",
    details: {
      es: [
        "Solo pedidos marcados delivery en Dashboard o creados desde Delivery",
        "No se listan todos los productos de cocina"
      ],
      pt: [
        "Só pedidos marcados delivery no Dashboard ou criados pelo Delivery",
        "Não se listam todos os produtos da cozinha"
      ],
    },
  },
  {
    at: "2026-05-15T14:00:00-03:00",
    module: "Delivery",
    moduleHref: "propuestas/delivery.html",
    title: {
      es: "Board Delivery tipo Anota.ai con volver al SuperAdmin",
      pt: "Board Delivery tipo Anota.ai com voltar ao SuperAdmin",
    },
    status: "done",
    details: {
      es: [
        "Control detallado de pedidos en salida a delivery",
        "Página propia con botón volver al header SuperAdmin"
      ],
      pt: [
        "Controle detalhado de pedidos em saída para delivery",
        "Página própria com botão voltar ao header SuperAdmin"
      ],
    },
  },
  {
    at: "2026-05-14T16:00:00-03:00",
    module: { es: "Caja", pt: "Caixa" },
    moduleHref: "propuestas/caja.html",
    title: {
      es: "Turno de caja: comandas, sangrías, movimientos y auditoría",
      pt: "Turno de caixa: comandas, sangrias, movimentos e auditoria",
    },
    status: "done",
    details: {
      es: [
        "Comandas: ítems vendidos y a qué corresponden los valores",
        "Venta: troco inicial del día + sangrías",
        "Movimientos: forma de pago, pedido y observaciones de impresión",
        "Auditoría: espacio de observaciones antes de marcar auditado"
      ],
      pt: [
        "Comandas: itens vendidos e a que correspondem os valores",
        "Venda: troco inicial do dia + sangrias",
        "Movimentos: forma de pagamento, pedido e observações da impressão",
        "Auditoria: espaço de observações antes de marcar auditado"
      ],
    },
  },
  {
    at: "2026-05-14T14:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Ítems intermediarios, Usos y consumos y gráfica de MP",
      pt: "Itens intermediários, Usos e consumos e gráfica de MP",
    },
    status: "done",
    details: {
      es: [
        "Pestaña Ítems intermediarios con ficha técnica propia; al vender se debitan componentes",
        "Pestaña Usos y consumos (limpieza, vasos, etc.) con costo de última compra",
        "Gráfica de materias primas consumidas"
      ],
      pt: [
        "Aba Itens intermediários com ficha técnica própria; ao vender debitam-se componentes",
        "Aba Usos e consumos (limpeza, copos, etc.) com custo da última compra",
        "Gráfica de matérias-primas consumidas"
      ],
    },
  },
  {
    at: "2026-05-12T15:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Ficha técnica: valores al crear compuesto + drag-and-drop",
      pt: "Ficha técnica: valores ao criar composto + drag-and-drop",
    },
    status: "done",
    details: {
      es: [
        "Producto compuesto entra con valores estipulados al crearse",
        "Ordenar ficha técnica con drag-and-drop",
        "Relatorio de ventas: nomenclatura y totales según moneda vendida (R$ / $U)"
      ],
      pt: [
        "Produto composto entra com valores estipulados ao criar",
        "Ordenar ficha técnica com drag-and-drop",
        "Relatório de vendas: nomenclatura e totais conforme moeda vendida (R$ / $U)"
      ],
    },
  },
  {
    at: "2026-05-12T12:00:00-03:00",
    module: "PDV",
    moduleHref: "propuestas/pdv.html",
    title: {
      es: "Pendiente: flujo de venta 100% editable desde caja",
      pt: "Pendente: fluxo de venda 100% editável pela caixa",
    },
    status: "progress",
    details: {
      es: [
        "Alterar el flujo de venta en caja y dejarlo totalmente editable"
      ],
      pt: [
        "Alterar o fluxo de venda no caixa e deixá-lo totalmente editável"
      ],
    },
  },
  {
    at: "2026-05-10T14:00:00-03:00",
    module: "PDV",
    moduleHref: "propuestas/pdv.html",
    title: {
      es: "Queijo+batata como extra y maximizar selector de tiendas",
      pt: "Queijo+batata como extra e maximizar seletor de lojas",
    },
    status: "done",
    details: {
      es: [
        "Variación ficha técnica queijo-ralado-batata-palha; opcionales solos, extra combinados",
        "Producto en flujo de caja; selector de tiendas permite maximizar pantalla"
      ],
      pt: [
        "Variação ficha técnica queijo-ralado-batata-palha; opcionais sozinhos, extra combinados",
        "Produto no fluxo de caixa; seletor de lojas permite maximizar tela"
      ],
    },
  },
  {
    at: "2026-05-06T14:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Relatorio de ventas detallado (variantes, monedas, descuentos)",
      pt: "Relatório de vendas detalhado (variantes, moedas, descontos)",
    },
    status: "done",
    details: {
      es: [
        "Detalle completo de cómo se vendió el producto (sin mayo, con extra, etc.)",
        "Valores vendidos en pesos y en reales",
        "Edición de descuentos de venta ajustada"
      ],
      pt: [
        "Detalhe completo de como o produto foi vendido (sem maionese, com extra, etc.)",
        "Valores vendidos em pesos e em reais",
        "Edição de descontos de venda ajustada"
      ],
    },
  },
  {
    at: "2026-05-04T14:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Eliminar materia prima y descuento de stock al marcar listo",
      pt: "Excluir matéria-prima e baixa de estoque ao marcar pronto",
    },
    status: "done",
    details: {
      es: [
        "Posibilidad de eliminar materia prima",
        "Valores de MP del producto se descuentan tras venta cuando Kitchen marca listo"
      ],
      pt: [
        "Possibilidade de excluir matéria-prima",
        "Valores de MP do produto são baixados após venda quando Kitchen marca pronto"
      ],
    },
  },
  {
    at: "2026-05-01T14:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Flujo de pedidos del Dashboard personalizable",
      pt: "Fluxo de pedidos do Dashboard personalizável",
    },
    status: "done",
    details: {
      es: [
        "Desde SuperAdmin se define orden: coberturas, ingredientes, etc.",
        "Flujo totalmente configurable por producto/tienda"
      ],
      pt: [
        "Pelo SuperAdmin define-se a ordem: coberturas, ingredientes, etc.",
        "Fluxo totalmente configurável por produto/loja"
      ],
    },
  },
  {
    at: "2026-04-30T16:00:00-03:00",
    module: { es: "Caja", pt: "Caixa" },
    moduleHref: "propuestas/caja.html",
    title: {
      es: "Apertura de caja en cierre (reales) y pendientes de nomenclatura",
      pt: "Abertura de caixa no fechamento (reais) e pendências de nomenclatura",
    },
    status: "done",
    details: {
      es: [
        "Cierre en reales contempla el dinero de apertura de caja",
        "Valor en reales ya no se confunde con pesos"
      ],
      pt: [
        "Fechamento em reais contempla o dinheiro de abertura de caixa",
        "Valor em reais não se confunde mais com pesos"
      ],
    },
  },
  {
    at: "2026-04-30T12:00:00-03:00",
    module: { es: "Caja", pt: "Caixa" },
    moduleHref: "propuestas/caja.html",
    title: {
      es: "Pendiente: nomenclatura cierre R$ / tarjetas UY-BR / ítems intermediarios avanzados",
      pt: "Pendente: nomenclatura fechamento R$ / cartões UY-BR / itens intermediários avançados",
    },
    status: "progress",
    details: {
      es: [
        "Cierre: nomenclaturas en R$; PIX permanece en reales",
        "Al pagar: elegir tarjetas UY (Mercado Pago) o BR",
        "Materia prima → ítems intermediarios (ej. Molho Branco) con costo según NF de componentes"
      ],
      pt: [
        "Fechamento: nomenclaturas em R$; PIX permanece em reais",
        "Ao pagar: escolher cartões UY (Mercado Pago) ou BR",
        "Matéria-prima → itens intermediários (ex. Molho Branco) com custo conforme NF dos componentes"
      ],
    },
  },
  {
    at: "2026-04-29T14:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Gastos fijos/variables: buscador, status y colores automáticos",
      pt: "Gastos fixos/variáveis: busca, status e cores automáticas",
    },
    status: "done",
    details: {
      es: [
        "Buscador por mes/día en tabla de gastos",
        "Status: PAGO / EM ABERTO / A VENCER (mayúsculas)",
        "Colores automáticos; si vence sin pagar → Vencido en rojo",
        "Filtro en Reporte de ventas por producto específico y cantidad"
      ],
      pt: [
        "Busca por mês/dia na tabela de gastos",
        "Status: PAGO / EM ABERTO / A VENCER (maiúsculas)",
        "Cores automáticas; se vencer sem pagar → Vencido em vermelho",
        "Filtro no Relatório de vendas por produto específico e quantidade"
      ],
    },
  },
  {
    at: "2026-04-27T14:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Costo promedio ponderado de MP, UI y redondeo Dashboard",
      pt: "Custo médio ponderado de MP, UI e arredondamento Dashboard",
    },
    status: "done",
    details: {
      es: [
        "Suma entradas con cantidad y costo; resta hasta agotar lote; popup al cambiar costo",
        "Editar MP sin scrollbar horizontal; decimal en ficha técnica",
        "Botón refrescar con animación; redondeo de valores en Dashboard"
      ],
      pt: [
        "Soma entradas com quantidade e custo; baixa até esgotar lote; popup ao mudar custo",
        "Editar MP sem scrollbar horizontal; decimal na ficha técnica",
        "Botão atualizar com animação; arredondamento de valores no Dashboard"
      ],
    },
  },
  {
    at: "2026-04-25T12:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Fix: materia prima no grababa en edición (producción)",
      pt: "Fix: matéria-prima não gravava na edição (produção)",
    },
    status: "done",
    details: {
      es: [
        "Datos de MP se persisten correctamente al editar en producción"
      ],
      pt: [
        "Dados de MP persistem corretamente ao editar em produção"
      ],
    },
  },
  {
    at: "2026-04-24T15:00:00-03:00",
    module: "PDV",
    moduleHref: "propuestas/pdv.html",
    title: {
      es: "Extra queijo e batata, sangría en nota, historial y DANFE",
      pt: "Extra queijo e batata, sangria na nota, histórico e DANFE",
    },
    status: "done",
    details: {
      es: [
        "Producto «queijo e batata» con ingredientes de ficha; entra como extra",
        "Sangría sale en la nota; clase puede mostrarse/ocultarse en PDV",
        "Aba Vendas: historial del día; generar NF/DANFE tras pedido (CPF)"
      ],
      pt: [
        "Produto «queijo e batata» com ingredientes da ficha; entra como extra",
        "Sangria sai na nota; classe pode mostrar/ocultar no PDV",
        "Aba Vendas: histórico do dia; gerar NF/DANFE após pedido (CPF)"
      ],
    },
  },
  {
    at: "2026-04-18T12:00:00-03:00",
    module: { es: "Caja", pt: "Caixa" },
    moduleHref: "propuestas/caja.html",
    title: {
      es: "Propuesta: CNPJ por turno y filtro de movimientos con NF",
      pt: "Proposta: CNPJ por turno e filtro de movimentos com NF",
    },
    status: "proposal",
    details: {
      es: [
        "Switch para ver solo transacciones con nota fiscal",
        "Al login PDV elegir CNPJ (teoría: delivery vs loja; práctica: por turno, tope 50 mil)",
        "Pesos y reales deben cerrar con auditoría (teórico / informado / auditado)"
      ],
      pt: [
        "Switch para ver só transações com nota fiscal",
        "No login PDV escolher CNPJ (teoria: delivery vs loja; prática: por turno, teto 50 mil)",
        "Pesos e reais devem fechar com auditoria (teórico / informado / auditado)"
      ],
    },
  },
  {
    at: "2026-04-17T15:00:00-03:00",
    module: { es: "Caja", pt: "Caixa" },
    moduleHref: "propuestas/caja.html",
    title: {
      es: "Sangría, edición MP y auditoría",
      pt: "Sangria, edição MP e auditoria",
    },
    status: "done",
    details: {
      es: [
        "Sangría implementada",
        "Editar MP: unidad entera; misma nomenclatura unidad de compra; cards fijos",
        "Costo variable; ajuste de auditoría"
      ],
      pt: [
        "Sangria implementada",
        "Editar MP: unidade inteira; mesma nomenclatura unidade de compra; cards fixos",
        "Custo variável; ajuste de auditoria"
      ],
    },
  },
  {
    at: "2026-04-17T12:00:00-03:00",
    module: { es: "KDS - Kitchen", pt: "KDS - Kitchen" },
    moduleHref: "propuestas/kitchen.html",
    title: {
      es: "Temporizador de preparación por pedido",
      pt: "Temporizador de preparo por pedido",
    },
    status: "done",
    details: {
      es: [
        "Timer en cada pedido enviado a cocina",
        "Tiempo de preparación visible en SuperAdmin"
      ],
      pt: [
        "Timer em cada pedido enviado à cozinha",
        "Tempo de preparo visível no SuperAdmin"
      ],
    },
  },
  {
    at: "2026-04-15T15:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Pesos en productos/MP, promos, sobregiro y descuentos",
      pt: "Pesos em produtos/MP, promos, sobregiro e descontos",
    },
    status: "done",
    details: {
      es: [
        "Edición de productos y materia prima en pesos uruguayos",
        "Tab PROMOS con activar/desactivar",
        "Sobregiro = tope que el funcionario puede gastar",
        "Filtro de descuentos de venta en Ventas por vendedor"
      ],
      pt: [
        "Edição de produtos e matéria-prima em pesos uruguaios",
        "Aba PROMOS com ativar/desativar",
        "Sobregiro = teto que o funcionário pode gastar",
        "Filtro de descontos de venda em Vendas por vendedor"
      ],
    },
  },
  {
    at: "2026-04-14T16:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Contabilidad, reportes y nomenclatura en pesos",
      pt: "Contabilidade, relatórios e nomenclatura em pesos",
    },
    status: "done",
    details: {
      es: [
        "Ventas por clase/producto con fecha-hora y gráfica; productos por vendedor con detalle",
        "Vincular contabilidad y Relatorio de vendas no balcão",
        "Siñeriz en pesos uruguayos; formato con punto cada 3 cifras",
        "Control de cuentas con datos del sistema + ingreso manual; nombres de tabs en ventana",
        "Hover datos con letra blanca; bonificaciones editables por usuario",
        "Abrir caja con valor 0 permitido; imágenes redimensionadas en cards"
      ],
      pt: [
        "Vendas por classe/produto com data-hora e gráfica; produtos por vendedor com detalhe",
        "Vincular contabilidade e Relatório de vendas no balcão",
        "Siñeriz em pesos uruguaios; formato com ponto a cada 3 cifras",
        "Controle de contas com dados do sistema + entrada manual; nomes das abas na janela",
        "Hover dados com letra branca; bonificações editáveis por usuário",
        "Abrir caixa com valor 0 permitido; imagens redimensionadas nos cards"
      ],
    },
  },
  {
    at: "2026-04-13T15:00:00-03:00",
    module: { es: "KDS - Kitchen", pt: "KDS - Kitchen" },
    moduleHref: "propuestas/kitchen.html",
    title: {
      es: "Pager/mesa en cocina y revertir «listo»",
      pt: "Pager/mesa na cozinha e reverter «pronto»",
    },
    status: "done",
    details: {
      es: [
        "Número de pager/mesa visible en KDS para avisar al cliente",
        "Botón para volver un pedido marcado como listo (con confirmación)",
        "Colores de clases alineados con PDV"
      ],
      pt: [
        "Número de pager/mesa visível no KDS para avisar o cliente",
        "Botão para voltar um pedido marcado como pronto (com confirmação)",
        "Cores de classes alinhadas com o PDV"
      ],
    },
  },
  {
    at: "2026-04-12T16:00:00-03:00",
    module: "PDV",
    moduleHref: "propuestas/pdv.html",
    title: {
      es: "PDV 15″, aba entrega, cancelación y descuentos",
      pt: "PDV 15″, aba entrega, cancelamento e descontos",
    },
    status: "done",
    details: {
      es: [
        "Sin scroll; carrito y cards más compactos; adaptado a pantalla de uso",
        "«Ítems» (no ingredientes); aba de entrega; operador elige motoboy y da salida",
        "Notificación al cliente: pedido a camino",
        "Cancelar con justificación (error/sin pago/troca); imprimir solo comanda completa",
        "Observación de preparo editable; descuento cliente o manual (% / absoluto)",
        "Ficha técnica + costo/precio de venta; crear otro pancho; idiomas en ingredientes",
        "Pago en Pesos y Reales (no «Dinero U$»); pager obligatorio para avanzar"
      ],
      pt: [
        "Sem scroll; carrinho e cards mais compactos; adaptado à tela de uso",
        "«Itens» (não ingredientes); aba de entrega; operador escolhe motoboy e dá saída",
        "Notificação ao cliente: pedido a caminho",
        "Cancelar com justificativa (erro/sem pagamento/troca); imprimir só comanda completa",
        "Observação de preparo editável; desconto cliente ou manual (% / absoluto)",
        "Ficha técnica + custo/preço de venda; criar outro pancho; idiomas nos ingredientes",
        "Pagamento em Pesos e Reais (não «Dinheiro U$»); pager obrigatório para avançar"
      ],
    },
  },
  {
    at: "2026-04-11T15:00:00-03:00",
    module: "PDV",
    moduleHref: "propuestas/pdv.html",
    title: {
      es: "Línea de tiempo del dog, coberturas y pasarela",
      pt: "Linha do tempo do dog, coberturas e passarela",
    },
    status: "done",
    details: {
      es: [
        "Modal: salsicha → ingredientes → coberturas → extras (con valor)",
        "Opción «Sin cobertura» obligatoria elegir un ítem",
        "Pasarela: seña/mesa con número de comanda; sin botón PIX en débito",
        "Flujo de confección usa productos de ficha técnica",
        "Botones del PDV autorizados por SuperAdmin o contraseña de gerente",
        "Lápiz para editar pedido; 10% funcionarios/clientes cadastrados"
      ],
      pt: [
        "Modal: salsicha → ingredientes → coberturas → extras (com valor)",
        "Opção «Sem cobertura» obrigatória escolher um item",
        "Passarela: senha/mesa com número da comanda; sem botão PIX no débito",
        "Fluxo de confecção usa produtos da ficha técnica",
        "Botões do PDV autorizados pelo SuperAdmin ou senha do gerente",
        "Lápis para editar pedido; 10% funcionários/clientes cadastrados"
      ],
    },
  },
  {
    at: "2026-04-10T15:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Multi-tienda, bonificaciones, clientes y catálogo base",
      pt: "Multi-loja, bonificações, clientes e catálogo base",
    },
    status: "done",
    details: {
      es: [
        "Traducción SuperAdmin; elegir/crear tienda al entrar (admin por loja)",
        "Matriz / Siñeriz: producto disponible por tienda al cadastrar",
        "Sidebar a la derecha sin scroll; pantalla completa",
        "Clientes en sidebar; CPF opcional + RUT; bonificación editable",
        "Bonificación colaborador con sobregiro hasta $5000; vendedor elige beneficiario",
        "Motoboys (nombre + celular); varios pedidos al mismo motoboy",
        "Códigos crecientes irrepetibles; cadastro: todos / estoque / mercadorías",
        "Cajero puede entrar en varias tiendas; scroll horizontal móvil en funciones",
        "Extras bajo ficha técnica; sacar todos los ingredientes; valores ficha corregidos"
      ],
      pt: [
        "Tradução SuperAdmin; escolher/criar loja ao entrar (admin por loja)",
        "Matriz / Siñeriz: produto disponível por loja ao cadastrar",
        "Sidebar à direita sem scroll; tela cheia",
        "Clientes na sidebar; CPF opcional + RUT; bonificação editável",
        "Bonificação colaborador com sobregiro até $5000; vendedor escolhe beneficiário",
        "Motoboys (nome + celular); vários pedidos ao mesmo motoboy",
        "Códigos crescentes irrepetíveis; cadastro: todos / estoque / mercadorias",
        "Caixa pode entrar em várias lojas; scroll horizontal móvel nas funções",
        "Extras sob ficha técnica; tirar todos os ingredientes; valores ficha corrigidos"
      ],
    },
  },
  {
    at: "2026-04-06T14:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Propuesta: filtros contables y delivery como el PDV",
      pt: "Proposta: filtros contábeis e delivery como o PDV",
    },
    status: "proposal",
    details: {
      es: [
        "Contabilidad → ventas por vendedor: filtrar productos vendidos con hora de venta",
        "Delivery: mismos filtros que el PDV"
      ],
      pt: [
        "Contabilidade → vendas por vendedor: filtrar produtos vendidos com hora da venda",
        "Delivery: mesmos filtros do PDV"
      ],
    },
  },
  {
    at: "2026-04-05T16:00:00-03:00",
    module: { es: "Franquicias", pt: "Franquias" },
    moduleHref: "propuestas/franquicias.html",
    title: {
      es: "Propuesta: sistema de franquicias",
      pt: "Proposta: sistema de franquias",
    },
    status: "proposal",
    details: {
      es: [
        "SuperAdmin global ve todas las franquicias",
        "Franqueado con permisos de SuperAdmin solo de su tienda"
      ],
      pt: [
        "SuperAdmin global vê todas as franquias",
        "Franqueado com permissões de SuperAdmin só da sua loja"
      ],
    },
  },
  {
    at: "2026-04-05T14:00:00-03:00",
    module: "SuperAdmin",
    moduleHref: "propuestas/superadmin.html",
    title: {
      es: "Propuesta: acceso contador, totem y cardápio digital",
      pt: "Proposta: acesso contador, totem e cardápio digital",
    },
    status: "proposal",
    details: {
      es: [
        "Acceso del contador al sistema (datos y números; costos fijos agua/luz)",
        "Acceso al Totem en login; tabs Cardápio digital / Totem / PDV al crear producto",
        "Tab SuperAdmin Cardápio digital + adicionais de comanda (ej. taxa de serviço)",
        "API Google Maps en servicio de pedidos; cadastro de clientes en pantalla de pedidos"
      ],
      pt: [
        "Acesso do contador ao sistema (dados e números; custos fixos água/luz)",
        "Acesso ao Totem no login; abas Cardápio digital / Totem / PDV ao criar produto",
        "Aba SuperAdmin Cardápio digital + adicionais de comanda (ex. taxa de serviço)",
        "API Google Maps no serviço de pedidos; cadastro de clientes na tela de pedidos"
      ],
    },
  },
  {
    at: "2026-04-05T12:00:00-03:00",
    module: "PDV",
    moduleHref: "propuestas/pdv.html",
    title: {
      es: "Propuesta: emballage, stock al quitar ingredientes y UX de carrito",
      pt: "Proposta: embalagem, estoque ao tirar ingredientes e UX do carrinho",
    },
    status: "proposal",
    details: {
      es: [
        "Botón costo de embalagem junto a agregar ingrediente",
        "Al sacar ingredientes, restar esa cantidad del stock",
        "Pago solo vía cardápio digital y totem; efecto carrito desde la izquierda",
        "Factor de conversión MP (gramatura por unidad); CMOD y markup en producto",
        "Redondeo de valores; lacres por vendedor; limitar operadores de caja"
      ],
      pt: [
        "Botão custo de embalagem junto a adicionar ingrediente",
        "Ao tirar ingredientes, baixar essa quantidade do estoque",
        "Pagamento só via cardápio digital e totem; efeito carrinho da esquerda",
        "Fator de conversão MP (gramatura por unidade); CMOD e markup no produto",
        "Arredondamento de valores; lacres por vendedor; limitar operadores de caixa"
      ],
    },
  }
];
