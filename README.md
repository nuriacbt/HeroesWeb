# HeroesApp

Proyecto realizado para la prueba técnica, enmarcado dentro del proceso de selección de AUBAY, para el cliente W2M.
Este consiste en la realización de una Aplicación en Angular 17 para poder gestionar una serie de heroes. Para 
poder manejar los datos se ha usado la librería json-server, para simular las llamadas a una API real de backend.


## Inicio de la aplicación:

Para poder iniciar la aplicación, hay que ejecutar los siguientes comandos:

1. npm install, para poder instalar todas las dependencias.
2. npm run json-server para arrancar el mock que actúa de backend.
3. npm run start para poder arrancar la aplicación en la siguiente url: `http://localhost:4200/`.

## Build de la aplicación

Se puede ejecutar el comando npm run build para poder compilar la aplicación y generar los artefactos de compilación que se guardarán en la carpeta `dist/` en la raíz del proyecto.

## Sobre docker:
Se ha conseguido dockerizar la aplicación en modo desarrollo. Una mejora sería, por ejemplo, crear otro dockerfile para producción, generando una imagen más ligera.

Los comandos para crear y ejecutar la imagen son los siguientes:
1. "docker build -f dockerfile-test -t heroes-app-test ."
2. "docker-compose -f docker-compose-test.yml up -d --build"
