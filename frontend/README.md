## Actualizaciones de nuevos ejecuciones

Se divide en dos paquetes:

* `create-react-app` es una utilidad de línea de comandos global que utiliza para crear nuevos proyectos.
* `react-scripts` es una dependencia de desarrollo en los proyectos generados (incluido este).

No necesitas actualizar `create-react-app` así mismo delega toda la configuración `react-scripts`.

Cuando se ejecuta el comando `create-react-app`, siempre crea el proyecto con la última version de `react-scripts` por lo que se obtendra todas las nuevas funciones y mejoras en las aplicacines recién creadas automaticamente.

## Estructura del proyecto

Después de la creación, su proyecto debería verse así:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

Para que se contruya el proyecto, **estos archivos deben tener los mismos nombres**:

* `public/index.html` plantilla de la página principal;
* `src/index.js` es el punto de inicio del js.

