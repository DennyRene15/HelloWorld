# HelloWorld - Mi primera app con Expo

**Estudiante:** Denny Elias Rene Yules  
**Asignatura:** Programacion de Dispositivos Moviles  
**Actividad:** Mi primera app en Expo (React Native y TypeScript)

## Descripcion

Aplicacion sencilla creada con Expo, React Native y TypeScript. Usa un componente `MainCard` que recibe una prop booleana `loading` y muestra "Cargando..." o "Contenido Listo!". En `App.tsx`, `useState` controla el estado y un boton permite alternarlo. El nombre se construye a partir de variables.

## Requisitos

- Node.js
- pnpm
- Expo Go en un dispositivo iOS o Android
- Computadora y celular en la misma red Wi-Fi

## Ejecutar

```bash
pnpm install
pnpm start
```

Abre Expo Go en el celular y escanea el codigo QR mostrado por Expo. En iPhone, puedes escanearlo con la camara.

## Comportamiento

| Estado | Boton | MainCard |
| --- | --- | --- |
| `isLoading = true` (inicial) | Mostrar | Cargando... |
| `isLoading = false` | Cargar | Contenido Listo! |

## Archivos principales

- `App.tsx`: nombre, estado `useState`, boton y estilos centrados.
- `MainCard.tsx`: componente con interface TypeScript y prop `loading`.