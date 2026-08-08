(() => {
  const STORAGE_KEY = "bitacora-dani-lang";
  const SUPPORTED = ["es", "pt"];

  const STRINGS = {
    es: {
      "lang.label": "Idioma",
      "nav.aria": "Navegación",
      "nav.sections": "Secciones",
      "nav.updates": "Actualizaciones",
      "nav.proposals": "Propuestas",
      "nav.summary": "Resumen",
      "nav.kds": "KDS - Kitchen",
      "nav.caja": "Caja",
      "nav.franquicias": "Franquicias",
      "nav.capacitacion": "Capacitación",
      "brand.name": "Bitácora Dani",
      "brand.footer": "Hub de seguimiento de implementaciones del sistema Dani's Hot Dog.",
      "aria.closeMenu": "Cerrar menú",
      "aria.collapseMenu": "Colapsar menú",
      "aria.expandMenu": "Expandir menú",
      "aria.openMenu": "Abrir menú",
      "badge.done": "Hecho",
      "badge.progress": "En curso",
      "badge.proposal": "Propuesta",
      "badge.out": "Fuera de alcance",
      "common.verDetalle": "Ver detalle",
      "common.verSitio": "Ver sitio",
      "common.verSitioPublico": "Ver sitio público",
      "common.modulo": "Módulo",
      "common.propuesta": "Propuesta",
      "common.alcanceEntregado": "Alcance entregado",
      "common.alcancePropuesto": "Alcance propuesto",
      "common.estado": "Estado",
      "footer.brand": "Bitácora · Dani's Hot Dog",
      "footer.copy": "Hub de seguimiento de implementaciones y propuestas.",
      "footer.credit": "Desarrollado por Marcos Mello",

      "index.title": "Actualizaciones — Dani's Hot Dog",
      "index.desc": "Hub de actualizaciones e implementaciones — Dani's Hot Dog",
      "index.bar": "Actualizaciones",
      "index.kicker": "Seguimiento operativo",
      "index.h1": "Actualizaciones",
      "index.meta":
        "Los últimos cambios aparecen arriba, apilados por fecha y hora de implementación. El detalle por módulo sigue en el menú lateral y en los enlaces de abajo.",
      "index.changelogAria": "Historial de implementaciones",
      "index.changelogLoading": "Cargando actualizaciones…",
      "index.changelogEmpty": "Aún no hay implementaciones registradas. Las nuevas se apilan aquí arriba.",
      "index.modulesHeading": "Por módulo",
      "index.modulesLead": "Resumen y alcance de cada frente del sistema.",
      "module.feedMeta":
        "Los últimos cambios de este módulo aparecen arriba, apilados por fecha y hora de implementación.",
      "index.pdv.title": "PDV / Dashboard",
      "index.pdv.lead":
        "Punto de venta táctil para mostrador, con flujo de dogs, combos, pagos duales y delivery interno.",
      "index.pdv.i1": "Flujo de venta personalizable (salsicha, ingredientes, coberturas, extras)",
      "index.pdv.i2": "Pago en Pesos ($U) y Reales (R$), split pay y redondeo",
      "index.pdv.i3": "Número de pager obligatorio en pago; aparece en Kitchen",
      "index.pdv.i4": "Bonificaciones colaboradores/clientes y descuentos de venta",
      "index.pdv.i5": "Cancelación con justificación + impresión / retiro de KDS",
      "index.pdv.i6": "Gestión de delivery en PDV + retirada en mostrador",
      "index.pdv.i7": "UI en mayúsculas (inputs conservan casing real)",
      "index.sa.title": "SuperAdmin",
      "index.sa.lead":
        "Retaguardia multi-tienda: catálogo, materia prima, reportes, usuarios y configuración.",
      "index.sa.i1": "Selector de tienda / creación de tienda al ingresar",
      "index.sa.i2": "Catálogo, combos, promos, clases y ficha técnica",
      "index.sa.i3": "Materia prima, ítems intermediarios, usos y consumos, descartes",
      "index.sa.i4": "Relatorio de ventas, contabilidad y gastos fijos/variables",
      "index.sa.i5": "Clientes, motoboys, bonificaciones y permisos de operadores",
      "index.sa.i6": "Monedas por tienda (Matriz R$ / Siñeriz $U) y tasa BRL→UYU",
      "index.sa.i7": "Asistente IA de interpretación / proyección",
      "index.kds.title": "KDS - Kitchen",
      "index.kds.lead": "Pantalla de cocina con pedidos en tiempo real, pager y control de estados.",
      "index.kds.i1": "Pedidos con número de pager / mesa visibles",
      "index.kds.i2": "Volver pedido marcado como listo (confirmación)",
      "index.kds.i3": "Temporizador de preparación por pedido",
      "index.kds.i4": "Cancelación desde historial remueve pedido del KDS",
      "index.kds.i5": "Aislamiento Matriz / Siñeriz en producción",
      "index.del.title": "Delivery",
      "index.del.lead":
        "Landing pública, pedido online, portal del cliente, motoboys y liquidación en PDV.",
      "index.del.i1": "Landing idéntica a danishotdog (hero, menú, cashback)",
      "index.del.i2": "Flujo de pedido con personalización de dogs + upsell",
      "index.del.i3": "Portal de cliente: pedidos, cashback, edición de datos",
      "index.del.i4": "Rastreo de pedido en curso desde portal y landing",
      "index.del.i5": "Ticket conferencia Siñeriz en $U; liquidación en PDV",
      "index.del.i6": "Plataforma entregadores (login celular + PIN)",
      "index.del.i7": "Entrega en mostrador integrada al botón Delivery del PDV",
      "index.caja.title": "Caja y contabilidad",
      "index.caja.lead": "Apertura, sangría, reforço, cierre dual, auditoría y reportes por tienda.",
      "index.caja.i1": "Apertura con valor 0; troco inicial R$ / $U",
      "index.caja.i2": "Sangría y reforço con impresión inmediata del ticket",
      "index.caja.i3": "Cierre con nomenclatura dual y PDF descargable",
      "index.caja.i4": "Turno: comandas, movimientos, auditoría con observaciones",
      "index.caja.i5": "Notas fiscales vinculadas a stock y proveedores",
      "index.caja.i6": "Gastos fijos/variables con status automático por color",
      "index.desk.title": "Desktop y puentes",
      "index.desk.lead": "App Electron local, impresora ESC/POS y bootstrap de tienda.",
      "index.desk.i1": "Migración a Electron + TypeScript (desktop local)",
      "index.desk.i2": "Puente de impresión: conferencia, cancelación, caja",
      "index.desk.i3": "Aislamiento de impresora por tienda en producción",
      "index.desk.i4": "Tests de formato de tickets (delivery / cash movement)",
      "index.desk.i5": "Selector de idioma ES / PT en toda la bitácora",

      "pdv.title": "PDV — Dani's Hot Dog",
      "pdv.desc": "Detalle PDV — Dani's Hot Dog",
      "pdv.bar": "PDV",
      "pdv.h1": "PDV / Dashboard",
      "pdv.meta":
        "Punto de venta para mostrador: productos, personalización de dogs, pagos duales, delivery interno y autorización de operaciones sensibles.",
      "pdv.i1": "Flujo editable de confección (salsicha → ingredientes → coberturas → extras)",
      "pdv.i2": "Opción «sin cobertura» obligatoria; ítems (no solo ingredientes)",
      "pdv.i3": "Combos con flujo de ingredientes del dog incluido",
      "pdv.i4": "Pago Pesos / Reales, split pay, PIX en reales con conversión",
      "pdv.i5": "Pager obligatorio; mesa/comanda; histórico del día",
      "pdv.i6": "Bonificaciones, descuentos (absoluto / %), autorización gerente",
      "pdv.i7": "Cancelar pedido/ítem con justificación e impacto en KDS",
      "pdv.i8": "Aba Delivery + retirada en mostrador; badge/parpadeo de listos",
      "pdv.i9": 'Layout PDV 15" sin scroll; carrito compacto',
      "pdv.i10": "UI en mayúsculas; inputs con casing real",
      "pdv.note":
        "<strong>Tiendas:</strong> Matriz opera catálogo en R$; Siñeriz en $U. El carrito puede mostrar dual cuando aplica tasa de cambio.",

      "sa.title": "SuperAdmin — Dani's Hot Dog",
      "sa.desc": "Detalle SuperAdmin — Dani's Hot Dog",
      "sa.bar": "SuperAdmin",
      "sa.h1": "SuperAdmin",
      "sa.meta":
        "Panel de retaguardia multi-tienda: catálogo, costos, stock, reportes, usuarios y configuración operativa.",
      "sa.i1": "Login con elección / creación de tienda",
      "sa.i2": "Productos, clases, combos, promos y códigos autoincrementales",
      "sa.i3": "Ficha técnica con drag-and-drop, CMOD, markup y extras",
      "sa.i4": "Materia prima (compra kg / venta grama), intermediarios, usos y consumos",
      "sa.i5": "Descartes con fecha, motivo y cantidad; historial de alteraciones",
      "sa.i6": "Clientes (CPF opcional + RUT), motoboys, bonificaciones editables",
      "sa.i7": "Relatorio de ventas, ventas por vendedor, filtros y gráficas",
      "sa.i8": "Gastos fijos/variables con status PAGO / A VENCER / VENCIDO",
      "sa.i9": "Notas fiscales, proveedores con código y vínculo a stock",
      "sa.i10": "Tasa BRL→UYU por tienda; landing/delivery configurables",
      "sa.i11": "Asistente IA; sidebar con despliegue a la derecha; i18n PT/ES",

      "kds.title": "KDS - Kitchen — Dani's Hot Dog",
      "kds.desc": "Detalle KDS - Kitchen — Dani's Hot Dog",
      "kds.bar": "KDS - Kitchen",
      "kds.h1": "KDS - Kitchen",
      "kds.meta":
        "Pantalla de cocina en tiempo real para preparación, aviso por pager y control de estados.",
      "kds.i1": "Cola de pedidos con pager / mesa visibles",
      "kds.i2": "Marcar listo y revertir con confirmación",
      "kds.i3": "Temporizador de preparación; tiempo visible en SuperAdmin",
      "kds.i4": "Cancelación remueve pedido del KDS al instante",
      "kds.i5": "Colores de clases alineados con PDV",
      "kds.i6": "Aislamiento Matriz / Siñeriz (sin cruce de pedidos)",
      "kds.i7": "Observación de preparo editable según ingredientes elegidos",

      "del.title": "Delivery — Dani's Hot Dog",
      "del.desc": "Detalle Delivery — Dani's Hot Dog",
      "del.bar": "Delivery",
      "del.h1": "Delivery",
      "del.meta":
        "Canal online: landing, pedido, portal del cliente, motoboys y liquidación en PDV sin ingreso a caja hasta el settlement.",
      "del.flow": "Flujo del cliente",
      "del.f1.h": "Elegir tienda",
      "del.f1.p": "Gate de tienda antes del menú.",
      "del.f2.h": "Armar pedido",
      "del.f2.p": "Clases, dogs, extras y upsell.",
      "del.f3.h": "Pagar / confirmar",
      "del.f3.p": "Datos, notas y entrega o mostrador.",
      "del.f4.h": "Rastrear",
      "del.f4.p": "Portal y banner de pedido en curso.",
      "del.i1": "Landing alineada a danishotdog.vercel.app / danishotdog.com",
      "del.i2": "Pedido con personalización tipo PDV + animación de carrito",
      "del.i3": "Login sin pedido obligatorio; portal con historial y cashback",
      "del.i4": "Rastreo de pedidos no entregados; banner sin romper topbar roja",
      "del.i5": "Print conferencia al ingresar; Siñeriz en $U; sin caja hasta liquidar PDV",
      "del.i6": "Board SuperAdmin tipo Anota.ai; solo delivery + pedidos marcados",
      "del.i7": "App entregadores: celular + PIN; edición de motoboys con PIN visible",
      "del.i8": "Entrega no balcão integrada al botón Delivery del PDV",

      "caja.title": "Caja — Dani's Hot Dog",
      "caja.desc": "Detalle Caja — Dani's Hot Dog",
      "caja.bar": "Caja",
      "caja.h1": "Caja y contabilidad",
      "caja.meta":
        "Control de turno: apertura, movimientos, sangría/reforço, cierre dual, auditoría y reportes.",
      "caja.i1": "Apertura con troco 0 o informado (R$ / $U)",
      "caja.i2": "Sangría y reforço con ticket ESC/POS al registrar",
      "caja.i3": "Cierre: totales duales, cartões/PIX, sangrías, reforços, créd. correntista",
      "caja.i4": "PDF de cierre de caja descargable desde SuperAdmin",
      "caja.i5":
        "Turno: comandas con ítems, movimientos (efectivo/tarjeta/PIX), auditoría con notas",
      "caja.i6": "Reinicio de numeración de pedidos a las 00:00",
      "caja.i7": "NF + stock + código de proveedor",
      "caja.note":
        "<strong>Pendiente operativo:</strong> nomenclatura final de algunos totales del cierre y tarjetas UY vs BR en pasarela — ver TODOs abiertos del sistema.",

      "fran.title": "Franquicias — Dani's Hot Dog",
      "fran.desc": "Propuesta Franquicias — Dani's Hot Dog",
      "fran.bar": "Franquicias",
      "fran.h1": "Sistema de franquicias",
      "fran.meta":
        "Diseñar el acceso para que SuperAdmin vea todas las franquicias, y cada franqueado administre solo su tienda con permisos equivalentes a nivel local.",
      "fran.estadoLead":
        "Hoy ya existe multi-tienda (Matriz / Siñeriz) con aislamiento de catálogo, pedidos, impresoras y tasa de cambio. La propuesta amplía el modelo a franquicias formales.",
      "fran.i1": "SuperAdmin global con visión consolidada de franquicias",
      "fran.i2": "Rol franqueado = SuperAdmin scoped a su tienda",
      "fran.i3": "Permisos granulares (catálogo, caja, usuarios, reportes)",
      "fran.i4": "Reportes consolidados vs. por unidad",
      "fran.base": "Base ya implementada",
      "fran.panel1.h": "Multi-tienda actual",
      "fran.panel1.i1": "Selector / creación de tienda",
      "fran.panel1.i2": "Catálogo por tienda",
      "fran.panel1.i3": "Moneda nativa Matriz / Siñeriz",
      "fran.panel2.h": "Aislamiento operativo",
      "fran.panel2.i1": "Pedidos y KDS por tienda",
      "fran.panel2.i2": "Impresora por tienda",
      "fran.panel2.i3": "Tasa BRL→UYU por tienda",
      "fran.note":
        "<strong>Siguiente paso:</strong> definir matriz de roles y qué datos consolidados ve el dueño de la red.",

      "cap.title": "Capacitación — Dani's Hot Dog",
      "cap.desc": "Propuesta Capacitación gamificada — Dani's Hot Dog",
      "cap.bar": "Capacitación",
      "cap.h1": "Capacitación gamificada",
      "cap.meta":
        "Plataforma con login para colaboradores: pruebas sobre procesos de la empresa, resultados inmediatos, evolución por funcionario y plan de carrera — con integración de la Zona de Desarrollo de Genialidad (ZDG).",
      "cap.estadoLead":
        "Documentado como propuesta. Existe base en el proyecto ZDG (cuestionario de genialidad con informe PDF) para integrar al módulo de desarrollo personal.",
      "cap.i1": "Login de colaboradores y acceso seguro a la plataforma",
      "cap.i2": "Pruebas gamificadas sobre procesos instaurados en la empresa",
      "cap.i3": "Resultados inmediatos al completar cada prueba",
      "cap.i4": "Historial y evolución por funcionario (scores, hitos, niveles)",
      "cap.i5": "Plan de carrera: trazado de cómo puede evolucionar en la empresa",
      "cap.i6": "Integración de pruebas Zona de Desarrollo de Genialidad (ZDG)",
      "cap.i7": "Panel para líderes: avance del equipo y brechas de conocimiento",
      "cap.pilares": "Pilares de la plataforma",
      "cap.panel1.h": "Procesos operativos",
      "cap.panel1.i1": "Quizzes sobre flujos PDV, cocina, delivery y caja",
      "cap.panel1.i2": "Feedback inmediato correcto / incorrecto",
      "cap.panel1.i3": "Progreso por rol (mostrador, cocina, líder)",
      "cap.panel2.h": "Zona de Genialidad (ZDG)",
      "cap.panel2.i1": "Cuestionario de mapa de las 4 zonas de desempeño",
      "cap.panel2.i2": "Informe personal y seguimiento en el tiempo",
      "cap.panel2.i3": "Alineación con plan de carrera y roles",
      "cap.note":
        "<strong>Siguiente paso:</strong> definir roles de acceso, banco de preguntas por proceso y cómo se vincula el resultado ZDG al plan de carrera de cada colaborador.",

      "tpl.title": "Propuesta — Dani's Hot Dog",
      "tpl.desc": "Propuesta — Dani's Hot Dog",
      "tpl.bar": "Nueva propuesta",
      "tpl.h1": "Título de la propuesta",
      "tpl.meta":
        "Resumen breve: qué problema resuelve, para quién es y qué se entregará.",
      "tpl.estadoP": "— documentado, aún no iniciado.",
      "tpl.alcance": "Alcance",
      "tpl.fuera": "Fuera de alcance",
      "tpl.inversion": "Inversión",
      "tpl.price": "A definir",
      "tpl.lead": "Condiciones, plazos o notas comerciales.",
      "tpl.note": "<strong>Nota:</strong> Completar antes de compartir con el cliente.",
    },
    pt: {
      "lang.label": "Idioma",
      "nav.aria": "Navegação",
      "nav.sections": "Seções",
      "nav.updates": "Atualizações",
      "nav.proposals": "Propostas",
      "nav.summary": "Resumo",
      "nav.kds": "KDS - Kitchen",
      "nav.caja": "Caixa",
      "nav.franquicias": "Franquias",
      "nav.capacitacion": "Capacitação",
      "brand.name": "Bitácora Dani",
      "brand.footer": "Hub de acompanhamento das implementações do sistema Dani's Hot Dog.",
      "aria.closeMenu": "Fechar menu",
      "aria.collapseMenu": "Recolher menu",
      "aria.expandMenu": "Expandir menu",
      "aria.openMenu": "Abrir menu",
      "badge.done": "Feito",
      "badge.progress": "Em andamento",
      "badge.proposal": "Proposta",
      "badge.out": "Fora do escopo",
      "common.verDetalle": "Ver detalhe",
      "common.verSitio": "Ver site",
      "common.verSitioPublico": "Ver site público",
      "common.modulo": "Módulo",
      "common.propuesta": "Proposta",
      "common.alcanceEntregado": "Escopo entregue",
      "common.alcancePropuesto": "Escopo proposto",
      "common.estado": "Status",
      "footer.brand": "Bitácora · Dani's Hot Dog",
      "footer.copy": "Hub de acompanhamento de implementações e propostas.",
      "footer.credit": "Desenvolvido por Marcos Mello",

      "index.title": "Atualizações — Dani's Hot Dog",
      "index.desc": "Hub de atualizações e implementações — Dani's Hot Dog",
      "index.bar": "Atualizações",
      "index.kicker": "Acompanhamento operacional",
      "index.h1": "Atualizações",
      "index.meta":
        "As últimas mudanças aparecem no topo, empilhadas por data e hora de implementação. O detalhe por módulo continua no menu lateral e nos links abaixo.",
      "index.changelogAria": "Histórico de implementações",
      "index.changelogLoading": "Carregando atualizações…",
      "index.changelogEmpty": "Ainda não há implementações registradas. As novas são empilhadas aqui no topo.",
      "index.modulesHeading": "Por módulo",
      "index.modulesLead": "Resumo e escopo de cada frente do sistema.",
      "module.feedMeta":
        "As últimas mudanças deste módulo aparecem no topo, empilhadas por data e hora de implementação.",
      "index.pdv.title": "PDV / Dashboard",
      "index.pdv.lead":
        "Ponto de venda tátil para balcão, com fluxo de dogs, combos, pagamentos duais e delivery interno.",
      "index.pdv.i1": "Fluxo de venda personalizável (salsicha, ingredientes, coberturas, extras)",
      "index.pdv.i2": "Pagamento em Pesos ($U) e Reais (R$), split pay e arredondamento",
      "index.pdv.i3": "Número de pager obrigatório no pagamento; aparece na Kitchen",
      "index.pdv.i4": "Bonificações colaboradores/clientes e descontos de venda",
      "index.pdv.i5": "Cancelamento com justificativa + impressão / retirada do KDS",
      "index.pdv.i6": "Gestão de delivery no PDV + retirada no balcão",
      "index.pdv.i7": "UI em maiúsculas (inputs conservam o casing real)",
      "index.sa.title": "SuperAdmin",
      "index.sa.lead":
        "Retaguarda multi-loja: catálogo, matéria-prima, relatórios, usuários e configuração.",
      "index.sa.i1": "Seletor de loja / criação de loja ao entrar",
      "index.sa.i2": "Catálogo, combos, promos, classes e ficha técnica",
      "index.sa.i3": "Matéria-prima, itens intermediários, usos e consumos, descartes",
      "index.sa.i4": "Relatório de vendas, contabilidade e gastos fixos/variáveis",
      "index.sa.i5": "Clientes, motoboys, bonificações e permissões de operadores",
      "index.sa.i6": "Moedas por loja (Matriz R$ / Siñeriz $U) e taxa BRL→UYU",
      "index.sa.i7": "Assistente IA de interpretação / projeção",
      "index.kds.title": "KDS - Kitchen",
      "index.kds.lead": "Tela de cozinha com pedidos em tempo real, pager e controle de status.",
      "index.kds.i1": "Pedidos com número de pager / mesa visíveis",
      "index.kds.i2": "Reverter pedido marcado como pronto (confirmação)",
      "index.kds.i3": "Temporizador de preparo por pedido",
      "index.kds.i4": "Cancelamento pelo histórico remove o pedido do KDS",
      "index.kds.i5": "Isolamento Matriz / Siñeriz em produção",
      "index.del.title": "Delivery",
      "index.del.lead":
        "Landing pública, pedido online, portal do cliente, motoboys e liquidação no PDV.",
      "index.del.i1": "Landing idêntica à danishotdog (hero, menu, cashback)",
      "index.del.i2": "Fluxo de pedido com personalização de dogs + upsell",
      "index.del.i3": "Portal do cliente: pedidos, cashback, edição de dados",
      "index.del.i4": "Rastreio de pedido em andamento pelo portal e landing",
      "index.del.i5": "Ticket conferência Siñeriz em $U; liquidação no PDV",
      "index.del.i6": "Plataforma entregadores (login celular + PIN)",
      "index.del.i7": "Entrega no balcão integrada ao botão Delivery do PDV",
      "index.caja.title": "Caixa e contabilidade",
      "index.caja.lead": "Abertura, sangria, reforço, fechamento dual, auditoria e relatórios por loja.",
      "index.caja.i1": "Abertura com valor 0; troco inicial R$ / $U",
      "index.caja.i2": "Sangria e reforço com impressão imediata do ticket",
      "index.caja.i3": "Fechamento com nomenclatura dual e PDF baixável",
      "index.caja.i4": "Turno: comandas, movimentos, auditoria com observações",
      "index.caja.i5": "Notas fiscais vinculadas a estoque e fornecedores",
      "index.caja.i6": "Gastos fixos/variáveis com status automático por cor",
      "index.desk.title": "Desktop e pontes",
      "index.desk.lead": "App Electron local, impressora ESC/POS e bootstrap de loja.",
      "index.desk.i1": "Migração para Electron + TypeScript (desktop local)",
      "index.desk.i2": "Ponte de impressão: conferência, cancelamento, caixa",
      "index.desk.i3": "Isolamento de impressora por loja em produção",
      "index.desk.i4": "Testes de formato de tickets (delivery / cash movement)",
      "index.desk.i5": "Seletor de idioma ES / PT em toda a bitácora",

      "pdv.title": "PDV — Dani's Hot Dog",
      "pdv.desc": "Detalhe PDV — Dani's Hot Dog",
      "pdv.bar": "PDV",
      "pdv.h1": "PDV / Dashboard",
      "pdv.meta":
        "Ponto de venda para balcão: produtos, personalização de dogs, pagamentos duais, delivery interno e autorização de operações sensíveis.",
      "pdv.i1": "Fluxo editável de confecção (salsicha → ingredientes → coberturas → extras)",
      "pdv.i2": "Opção «sem cobertura» obrigatória; itens (não só ingredientes)",
      "pdv.i3": "Combos com fluxo de ingredientes do dog incluso",
      "pdv.i4": "Pagamento Pesos / Reais, split pay, PIX em reais com conversão",
      "pdv.i5": "Pager obrigatório; mesa/comanda; histórico do dia",
      "pdv.i6": "Bonificações, descontos (absoluto / %), autorização gerente",
      "pdv.i7": "Cancelar pedido/item com justificativa e impacto no KDS",
      "pdv.i8": "Aba Delivery + retirada no balcão; badge/pisca de prontos",
      "pdv.i9": 'Layout PDV 15" sem scroll; carrinho compacto',
      "pdv.i10": "UI em maiúsculas; inputs com casing real",
      "pdv.note":
        "<strong>Lojas:</strong> Matriz opera catálogo em R$; Siñeriz em $U. O carrinho pode mostrar dual quando aplica taxa de câmbio.",

      "sa.title": "SuperAdmin — Dani's Hot Dog",
      "sa.desc": "Detalhe SuperAdmin — Dani's Hot Dog",
      "sa.bar": "SuperAdmin",
      "sa.h1": "SuperAdmin",
      "sa.meta":
        "Painel de retaguarda multi-loja: catálogo, custos, estoque, relatórios, usuários e configuração operacional.",
      "sa.i1": "Login com escolha / criação de loja",
      "sa.i2": "Produtos, classes, combos, promos e códigos autoincrementais",
      "sa.i3": "Ficha técnica com drag-and-drop, CMOD, markup e extras",
      "sa.i4": "Matéria-prima (compra kg / venda grama), intermediários, usos e consumos",
      "sa.i5": "Descartes com data, motivo e quantidade; histórico de alterações",
      "sa.i6": "Clientes (CPF opcional + RUT), motoboys, bonificações editáveis",
      "sa.i7": "Relatório de vendas, vendas por vendedor, filtros e gráficos",
      "sa.i8": "Gastos fixos/variáveis com status PAGO / A VENCER / VENCIDO",
      "sa.i9": "Notas fiscais, fornecedores com código e vínculo a estoque",
      "sa.i10": "Taxa BRL→UYU por loja; landing/delivery configuráveis",
      "sa.i11": "Assistente IA; sidebar com abertura à direita; i18n PT/ES",

      "kds.title": "KDS - Kitchen — Dani's Hot Dog",
      "kds.desc": "Detalhe KDS - Kitchen — Dani's Hot Dog",
      "kds.bar": "KDS - Kitchen",
      "kds.h1": "KDS - Kitchen",
      "kds.meta":
        "Tela de cozinha em tempo real para preparo, aviso por pager e controle de status.",
      "kds.i1": "Fila de pedidos com pager / mesa visíveis",
      "kds.i2": "Marcar pronto e reverter com confirmação",
      "kds.i3": "Temporizador de preparo; tempo visível no SuperAdmin",
      "kds.i4": "Cancelamento remove o pedido do KDS na hora",
      "kds.i5": "Cores de classes alinhadas com o PDV",
      "kds.i6": "Isolamento Matriz / Siñeriz (sem cruzamento de pedidos)",
      "kds.i7": "Observação de preparo editável conforme ingredientes escolhidos",

      "del.title": "Delivery — Dani's Hot Dog",
      "del.desc": "Detalhe Delivery — Dani's Hot Dog",
      "del.bar": "Delivery",
      "del.h1": "Delivery",
      "del.meta":
        "Canal online: landing, pedido, portal do cliente, motoboys e liquidação no PDV sem entrada em caixa até o settlement.",
      "del.flow": "Fluxo do cliente",
      "del.f1.h": "Escolher loja",
      "del.f1.p": "Gate de loja antes do menu.",
      "del.f2.h": "Montar pedido",
      "del.f2.p": "Classes, dogs, extras e upsell.",
      "del.f3.h": "Pagar / confirmar",
      "del.f3.p": "Dados, notas e entrega ou balcão.",
      "del.f4.h": "Rastrear",
      "del.f4.p": "Portal e banner de pedido em andamento.",
      "del.i1": "Landing alinhada a danishotdog.vercel.app / danishotdog.com",
      "del.i2": "Pedido com personalização tipo PDV + animação de carrinho",
      "del.i3": "Login sem pedido obrigatório; portal com histórico e cashback",
      "del.i4": "Rastreio de pedidos não entregues; banner sem quebrar topbar vermelha",
      "del.i5": "Print conferência ao entrar; Siñeriz em $U; sem caixa até liquidar no PDV",
      "del.i6": "Board SuperAdmin tipo Anota.ai; só delivery + pedidos marcados",
      "del.i7": "App entregadores: celular + PIN; edição de motoboys com PIN visível",
      "del.i8": "Entrega no balcão integrada ao botão Delivery do PDV",

      "caja.title": "Caixa — Dani's Hot Dog",
      "caja.desc": "Detalhe Caixa — Dani's Hot Dog",
      "caja.bar": "Caixa",
      "caja.h1": "Caixa e contabilidade",
      "caja.meta":
        "Controle de turno: abertura, movimentos, sangria/reforço, fechamento dual, auditoria e relatórios.",
      "caja.i1": "Abertura com troco 0 ou informado (R$ / $U)",
      "caja.i2": "Sangria e reforço com ticket ESC/POS ao registrar",
      "caja.i3": "Fechamento: totais duais, cartões/PIX, sangrias, reforços, créd. correntista",
      "caja.i4": "PDF de fechamento de caixa baixável pelo SuperAdmin",
      "caja.i5":
        "Turno: comandas com itens, movimentos (dinheiro/cartão/PIX), auditoria com notas",
      "caja.i6": "Reinício da numeração de pedidos às 00:00",
      "caja.i7": "NF + estoque + código de fornecedor",
      "caja.note":
        "<strong>Pendente operacional:</strong> nomenclatura final de alguns totais do fechamento e cartões UY vs BR no gateway — ver TODOs abertos do sistema.",

      "fran.title": "Franquias — Dani's Hot Dog",
      "fran.desc": "Proposta Franquias — Dani's Hot Dog",
      "fran.bar": "Franquias",
      "fran.h1": "Sistema de franquias",
      "fran.meta":
        "Desenhar o acesso para que o SuperAdmin veja todas as franquias, e cada franqueado administre só a sua loja com permissões equivalentes no nível local.",
      "fran.estadoLead":
        "Hoje já existe multi-loja (Matriz / Siñeriz) com isolamento de catálogo, pedidos, impressoras e taxa de câmbio. A proposta amplia o modelo para franquias formais.",
      "fran.i1": "SuperAdmin global com visão consolidada de franquias",
      "fran.i2": "Papel franqueado = SuperAdmin scoped à sua loja",
      "fran.i3": "Permissões granulares (catálogo, caixa, usuários, relatórios)",
      "fran.i4": "Relatórios consolidados vs. por unidade",
      "fran.base": "Base já implementada",
      "fran.panel1.h": "Multi-loja atual",
      "fran.panel1.i1": "Seletor / criação de loja",
      "fran.panel1.i2": "Catálogo por loja",
      "fran.panel1.i3": "Moeda nativa Matriz / Siñeriz",
      "fran.panel2.h": "Isolamento operacional",
      "fran.panel2.i1": "Pedidos e KDS por loja",
      "fran.panel2.i2": "Impressora por loja",
      "fran.panel2.i3": "Taxa BRL→UYU por loja",
      "fran.note":
        "<strong>Próximo passo:</strong> definir matriz de papéis e quais dados consolidados o dono da rede vê.",

      "cap.title": "Capacitação — Dani's Hot Dog",
      "cap.desc": "Proposta Capacitação gamificada — Dani's Hot Dog",
      "cap.bar": "Capacitação",
      "cap.h1": "Capacitação gamificada",
      "cap.meta":
        "Plataforma com login para colaboradores: provas sobre processos da empresa, resultados imediatos, evolução por funcionário e plano de carreira — com integração da Zona de Desenvolvimento de Genialidade (ZDG).",
      "cap.estadoLead":
        "Documentado como proposta. Existe base no projeto ZDG (questionário de genialidade com relatório PDF) para integrar ao módulo de desenvolvimento pessoal.",
      "cap.i1": "Login de colaboradores e acesso seguro à plataforma",
      "cap.i2": "Provas gamificadas sobre processos instaurados na empresa",
      "cap.i3": "Resultados imediatos ao concluir cada prova",
      "cap.i4": "Histórico e evolução por funcionário (scores, marcos, níveis)",
      "cap.i5": "Plano de carreira: traçado de como pode evoluir na empresa",
      "cap.i6": "Integração de provas Zona de Desenvolvimento de Genialidade (ZDG)",
      "cap.i7": "Painel para líderes: avanço da equipe e lacunas de conhecimento",
      "cap.pilares": "Pilares da plataforma",
      "cap.panel1.h": "Processos operacionais",
      "cap.panel1.i1": "Quizzes sobre fluxos PDV, cozinha, delivery e caixa",
      "cap.panel1.i2": "Feedback imediato correto / incorreto",
      "cap.panel1.i3": "Progresso por papel (balcão, cozinha, líder)",
      "cap.panel2.h": "Zona de Genialidade (ZDG)",
      "cap.panel2.i1": "Questionário do mapa das 4 zonas de desempenho",
      "cap.panel2.i2": "Relatório pessoal e acompanhamento no tempo",
      "cap.panel2.i3": "Alinhamento com plano de carreira e papéis",
      "cap.note":
        "<strong>Próximo passo:</strong> definir papéis de acesso, banco de perguntas por processo e como o resultado ZDG se vincula ao plano de carreira de cada colaborador.",

      "tpl.title": "Proposta — Dani's Hot Dog",
      "tpl.desc": "Proposta — Dani's Hot Dog",
      "tpl.bar": "Nova proposta",
      "tpl.h1": "Título da proposta",
      "tpl.meta":
        "Resumo breve: qual problema resolve, para quem é e o que será entregue.",
      "tpl.estadoP": "— documentado, ainda não iniciado.",
      "tpl.alcance": "Escopo",
      "tpl.fuera": "Fora do escopo",
      "tpl.inversion": "Investimento",
      "tpl.price": "A definir",
      "tpl.lead": "Condições, prazos ou notas comerciais.",
      "tpl.note": "<strong>Nota:</strong> Completar antes de compartilhar com o cliente.",
    },
  };

  let lang = "es";

  function readStored() {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.includes(value)) return value;
    } catch {
      /* ignore */
    }
    return "es";
  }

  function t(key) {
    return STRINGS[lang]?.[key] ?? STRINGS.es[key] ?? key;
  }

  function applyAttrs(el) {
    const spec = el.getAttribute("data-i18n-attr");
    if (!spec) return;
    spec.split(";").forEach((part) => {
      const [attr, key] = part.split(":").map((s) => s.trim());
      if (attr && key && STRINGS[lang][key] != null) {
        el.setAttribute(attr, t(key));
      }
    });
  }

  function applyBadges() {
    document.querySelectorAll(".badge--done").forEach((el) => {
      el.textContent = t("badge.done");
    });
    document.querySelectorAll(".badge--progress").forEach((el) => {
      el.textContent = t("badge.progress");
    });
    document.querySelectorAll(".badge--proposal").forEach((el) => {
      el.textContent = t("badge.proposal");
    });
    document.querySelectorAll(".badge--out").forEach((el) => {
      el.textContent = t("badge.out");
    });
  }

  function applyPageMeta() {
    const page = document.documentElement.getAttribute("data-page");
    if (!page) return;
    const titleKey = `${page}.title`;
    const descKey = `${page}.desc`;
    if (STRINGS[lang][titleKey]) document.title = t(titleKey);
    const meta = document.querySelector('meta[name="description"]');
    if (meta && STRINGS[lang][descKey]) meta.setAttribute("content", t(descKey));
  }

  function syncLangSwitch() {
    document.querySelectorAll("[data-lang-switch]").forEach((group) => {
      group.querySelectorAll("[data-set-lang]").forEach((btn) => {
        const value = btn.getAttribute("data-set-lang");
        const active = value === lang;
        btn.setAttribute("aria-pressed", String(active));
        btn.classList.toggle("is-active", active);
      });
    });
  }

  function apply() {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && STRINGS[lang][key] != null) el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (key && STRINGS[lang][key] != null) el.innerHTML = t(key);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(applyAttrs);
    applyBadges();
    applyPageMeta();
    syncLangSwitch();

    document.dispatchEvent(
      new CustomEvent("bitacora:langchange", { detail: { lang } })
    );
  }

  function setLang(next) {
    if (!SUPPORTED.includes(next) || next === lang) {
      syncLangSwitch();
      return;
    }
    lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    apply();
  }

  function bindSwitchers() {
    document.querySelectorAll("[data-set-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLang(btn.getAttribute("data-set-lang"));
      });
    });
  }

  lang = readStored();
  window.BitacoraI18n = { t, setLang, getLang: () => lang, apply };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      bindSwitchers();
      apply();
    });
  } else {
    bindSwitchers();
    apply();
  }
})();
