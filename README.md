# Hub Dani's Hot Dog — Actualizaciones y propuestas

Sitio HTML estático para seguir el estado de las implementaciones del sistema Dani's Hot Dog (PDV, SuperAdmin, KDS - Kitchen, Delivery, caja) y las propuestas asociadas.

Idioma: selector **ES / PT** en el menú lateral (preferencia guardada en el navegador).

## Cómo abrir en local

Abrí `index.html` en el navegador (doble clic o arrastrar el archivo a Chrome/Edge/Firefox). No requiere instalación ni servidor.

Ruta: `d:\bitacora-dani\index.html`

## Publicar (GitHub Pages)

Cuando exista el remoto `MarkWILD1/bitacora-dani`:

```powershell
cd d:\bitacora-dani
git push -u origin main
```

Luego activá Pages desde la rama `main` (root). URL esperada: https://markwild1.github.io/bitacora-dani/

## Feed cronológico

Los cambios se muestran **más recientes arriba**, con fecha y hora.

Para registrar uno nuevo: agregá un objeto al **principio** de `js/changelog-data.js` (`at` en ISO `-03:00`).

## Contenido

| Archivo | Uso |
|---------|-----|
| `index.html` | Hub + feed cronológico |
| `js/changelog-data.js` | Entradas del feed (apilar arriba) |
| `js/changelog.js` | Render del feed |
| `propuestas/pdv.html` | Detalle PDV / Dashboard |
| `propuestas/superadmin.html` | Detalle SuperAdmin |
| `propuestas/kitchen.html` | Detalle KDS - Kitchen |
| `propuestas/delivery.html` | Detalle Delivery |
| `propuestas/caja.html` | Detalle Caja y contabilidad |
| `propuestas/franquicias.html` | Propuesta — sistema de franquicias |
| `propuestas/_plantilla.html` | Plantilla para nuevas propuestas |
| `css/styles.css` | Tipografía y paleta Dani compartida |
| `js/i18n.js` | Diccionario ES/PT y selector de idioma |
| `assets/` | Logos de la marca |

## Estados

- **Hecho** — ya implementado y disponible
- **En curso** — en desarrollo
- **Propuesta** — documentado, aún no iniciado
- **Fuera de alcance** — explícitamente excluido de la fase actual

## Diseño

Paleta y tipografía tomadas del sistema (landing / delivery):

- Bricolage Grotesque (títulos)
- Nunito (cuerpo)
- Rojo `#cc0202`, crema `#fff8ef`, ámbar `#ffb41d` sobre tinta `#2d2a27`

## Cómo agregar una propuesta nueva

1. Copiá `propuestas/_plantilla.html` con un nombre descriptivo.
2. Completá título, resumen, estado, alcance e inversión.
3. Sumá el ítem en la sección **Propuestas** del menú (todas las páginas).
4. Si corresponde, agregá una card en `index.html`.
