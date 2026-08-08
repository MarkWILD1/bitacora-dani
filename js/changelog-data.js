/**
 * Bitácora Dani — feed cronológico.
 * REGLA: las entradas nuevas van AL PRINCIPIO del array (más reciente arriba).
 * `at` = fecha/hora ISO con zona -03:00 (Uruguay).
 * Textos: string (es) o { es, pt }.
 */
window.BITACORA_CHANGELOG = [
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
        "Título y barra de la página de detalle actualizados",
      ],
      pt: [
        "Menu lateral e links de módulo usam KDS - Kitchen",
        "Título e barra da página de detalhe atualizados",
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
        "Preferencia guardada en el navegador y aplicada al feed cronológico",
      ],
      pt: [
        "Botão ES/PT no menu lateral (também com menu recolhido)",
        "Tradução da navegação, badges, footers e páginas de detalhe",
        "Preferência salva no navegador e aplicada ao feed cronológico",
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
        "Test de formato en receipt-printer-bridge",
      ],
      pt: [
        "Ao registrar sangria ou reforço imprime ticket ESC/POS na ponte da loja",
        "Ticket com turno, atendente, data/hora, valor, obs, saldo e assinatura",
        "Teste de formato no receipt-printer-bridge",
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
        "Clase preserve-case en login, usuarios y entregadores",
      ],
      pt: [
        "Labels, botões e copy da UI em maiúsculas",
        "Inputs, senhas e PIN conservam o casing real do usuário",
        "Classe preserve-case no login, usuários e entregadores",
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
        "Banner fijo dentro del hero, debajo de la topbar",
      ],
      pt: [
        "O banner não empurra mais a topbar nem deixa faixa cream sem vermelho",
        "Banner fixo dentro do hero, abaixo da topbar",
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
        "Usada en PDV, delivery, caja, PagBank y desktop",
      ],
      pt: [
        "Setting independente por loja com fallback global",
        "Usada no PDV, delivery, caixa, PagBank e desktop",
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
        "PIN visible al editar; backfill de PINs legibles",
      ],
      pt: [
        "Pedidos prontos vão ao botão Delivery do PDV (badge + pisca)",
        "Login entregadores com celular + PIN; layout motoboys em 2 colunas",
        "PIN visível ao editar; backfill de PINs legíveis",
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
        "Aislamiento de materia prima Matriz vs Siñeriz",
      ],
      pt: [
        "Catálogo e custos Matriz em R$; carrinho dual R$ + $U",
        "KDS - Kitchen: pager só na Matriz; cancel remove do KDS",
        "Isolamento de matéria-prima Matriz vs Siñeriz",
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
        "Normalización de celular en backend para el lookup",
      ],
      pt: [
        "Seção Pedidos em andamento em /portal com botão Rastrear",
        "Reabrir monitoramento com ?track= e persistência local",
        "Normalização de celular no backend para o lookup",
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
        "Moneda nativa por tienda en el relay de impresión",
      ],
      pt: [
        "Print ao entrar pedido delivery; sem entrada em caixa até liquidar no PDV",
        "Moeda nativa por loja no relay de impressão",
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
      ],
      pt: [
        "Reduzir painel delivery no Dashboard; fix botão adicionar ao carrinho",
        "Saída de matéria-prima em aba distinta",
        "Ingredientes novos visíveis no fluxo POS; carga da ficha técnica",
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
        "Proveedores con código automático vinculable a NF y materia prima",
      ],
      pt: [
        "Botão para salvar e baixar PDF do fechamento",
        "Fornecedores com código automático vinculável a NF e matéria-prima",
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
      es: ["Relación NF ↔ stock al registrar movimientos de compra"],
      pt: ["Relação NF ↔ estoque ao registrar movimentos de compra"],
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
        "Historial de alteraciones alineado con el movimiento real",
      ],
      pt: [
        "Ao adicionar estoque, valores negativos passam à quantidade informada",
        "Histórico de alterações alinhado ao movimento real",
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
      es: ["App desktop local para operación de tienda"],
      pt: ["App desktop local para operação da loja"],
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
        "Asistente IA en SuperAdmin",
      ],
      pt: [
        "Login sem pedido obrigatório; histórico e edição de dados",
        "Notas antes de confirmar; entrega no balcão pelo delivery",
        "Assistente IA no SuperAdmin",
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
        "Landing alineada a danishotdog; flujo de dogs, extras y upsell",
        "Reforço en PDV; nomenclatura dual de fechamento de caja",
      ],
      pt: [
        "Landing alinhada ao danishotdog; fluxo de dogs, extras e upsell",
        "Reforço no PDV; nomenclatura dual de fechamento de caixa",
      ],
    },
  },
];
