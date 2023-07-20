# GlosarioNodeJs

Node.js es una entorno que permite ejecutar código JavaScript en el servidor, impulsando así el desarrollo de aplicaciones web y servicios de alto rendimiento y escalables en el lado del servidor.

Lo que significa que puede manejar muchas solicitudes simultáneamente sin bloquear el flujo de ejecución, ideal para aplicaciones de alto rendimiento y en tiempo 
real, como aplicaciones web, servicios de backend, API y microservicios

## __Se caracteristicas por:__
* Se ejecuta codigo JavaScript en el servidor,lo que facilita el uso de un mismo lenguaje para el fronted y el backend.
* Utiliza un modelo de E/S sin bloqueo y basado en eventos esto permite manejar múltiples solicitudes concurrentemente sin bloquear el flujo de ejecución siendo muy eficiente el rendimiento.

## __Para la configuracion:__
Se necesita **Nvm** el cual es una herramienta que permite administrar múltiples versiones de Node.js en un sistema.

  **Comandos de NVM**
  
* Para instalar la versión 14.17.0 de Node.js.
  
    ``` nvm install 14.17.0```
* Para usar la versión 14.17.0 de Node.js.

    ```nvm use 14.17.0 ```
  
*  Muestra la versión de Node.js que estás utilizando actualmente.
  
  ```nvm current```
*Lista todas las versiones de Node.js instaladas.

```nvm ls```

*  lista todas las versiones de Node.js disponibles para instalar.
  
  ```nvm ls-remote```

## __Nodemon:__

 Es una herramienta de desarrollo para aplicaciones Node.js  que facilita la ejecucion de codigo sin necesidad de reiniciar la aplicacion ya que lo hace de forma automatica detectando los cambios realizados.

**Caracteristicas de Nodemon:**
* Reinicio automático
* Soporte amplio
* Detalles de reinicio controlados
* Integración con scripts personalizados
* Modo silencioso
* Configuración flexible
* Amplia comunidad y soporte activo

**Instalación**
*  Ejecutar el siguiente comando(Se creará un archivo package.json con los valores predeterminados.):

    ```npm init -y                                                         ```

* Realiza una modificación en el archivo package.json para definir "app.js" 
como el archivo principal de la aplicación y organizarlo de forma modular.

* Comando para instalar **Nodemon**
```npm i -E -D nodemon                                                  ```

* Modo silencioso de Nodemon

```nodemon --quiet app.js ```




