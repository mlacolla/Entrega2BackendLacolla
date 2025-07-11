Entrega N° 2
Consigna> Configurar nuestro proyecto para que trabaje con handlebars y websocket. 

Aspectos a incluir> 
Configurar el servidor para integrar el motor de plantillas Handlebars e instalar un servidor de socket.io al mismo. 
Crear una vista "home.handlebars" la cual contenga una lista de todos los prodructos agregados hasta el momento. 

Websockets
Además, crear una vista “realTimeProducts.handlebars”, la cual vivirá en el endpoint “/realtimeproducts” en nuestro views router, ésta contendrá la misma lista de productos, sin embargo, ésta trabajará con websockets.
Al trabajar con websockets, cada vez que creemos un producto nuevo, o bien cada vez que eliminemos un producto, se debe actualizar automáticamente en dicha vista la lista.


Consigna

Configurar nuestro proyecto para que trabaje con Handlebars y websocket.

Aspectos a incluir

Configurar el servidor para integrar el motor de plantillas Handlebars e instalar un servidor de socket.io al mismo.

Crear una vista “home.handlebars” la cual contenga una lista de todos los productos agregados hasta el momento

Sugerencias

Ya que la conexión entre una consulta HTTP y websocket no está contemplada dentro de la clase. Se recomienda que, para la creación y eliminación de un producto, Se cree un formulario simple en la vista realTimeProducts.handlebars. Para que el contenido se envíe desde websockets y no HTTP. Sin embargo, esta no es la mejor solución, leer el siguiente punto.

Si se desea hacer la conexión de socket emits con HTTP, deberás buscar la forma de utilizar el servidor io de Sockets dentro de la petición POST. ¿Cómo utilizarás un emit dentro del POST?

----
A tener en cuenta:
* Si el usuario es administrativo visualizara la opcion de agregar producto. De lo contrario no se visualiza la opcion de para agregar un producto. 
* Si no se puede agregar un producto se redirige a la vista de errorAgregarProducto.
