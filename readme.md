1) npm init -y  
crea el package json / archivo de configuracion. 
2) En el archivo package.json se agrega debajo del main   "type": "module",
3) En www.npmjs.com estan las librerias de js. / momento en consola:  npm install moment
4) 
-Instalar express para levantar el servidor 
 npm install express
Para que el servicio se corra automaticamente Instalamos > libreria de forma global en la compu   
npm install -g nodemon
 Se recomienda nodemon para que el servicio se corra automaticamente, no tenerlo correr en terminal> npm install -g nodemon , de lo contrario correr el archivo app como node.
5) Instalamos 3 librerias juntas
Controlar instalacion de express para levantar el servidor, de lo contrario>  npm install express express-handlebars socket.io

6) npm install multer
Para controlar la importacion de archivos. 

7) Crear carpeta .gitignore 
Poner dentro
/node_modules
 Controlar instalacion de moment, de lo contrario correr en terminal>  npm install moment (En desarrollo cuando esta deployado es npm)

----------
Dentro del src hay archivos que se usan en el servidor> Dentro de src va Carpeta views y archivo app.js

Archivos> Hoja de estilos, js o imagenes va por fuera. En carpeta Public.
---------------


8) Si borro node_modules lo recupero poniendo en consola npm install y se instalan las dependencias en mi archivo de configuracion package.json. /
9) Al entregar el proyecto se entrega sin la carpeta node modules y para instalarla de nuevo se pasa en la terminal el comando npm install. 
10) Para guardar en github> 
Creo en https://github.com un repositorio paso los comandos que me indican en la terminal

git init
git remote add origin https://github.com/mlacolla/Entrega2BackendLacolla.git
git push -u origin main

--------
Luego con cada modificacion por terminal paso los comandos. 

git add .

git commit -m "Carpeta"

git push

11) json vacio
[

]

12) crear .gitignore > Adentro  /node_modules

13) CSS 
. class
#id
//En terminal> nodemon ./src/app.js
//En browser>  localhost:8080

14) deployar en glitch> https://glitch.com/
En el archivo package.json
hacer script

  "scripts": {
    "star": "node./src/app.js"
  },

  debajo de todo poner> "engines":{
  "node":"16.x"
}

Nuevo proyecto
importar desde github. 
Preview in a new windows
copio url

15) Crear archivo en principal de .gitignore
Poner> /node_modules

//En terminal> nodemon ./src/app.js
//En browser>  localhost:8080

