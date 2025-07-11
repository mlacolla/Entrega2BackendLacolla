import express from "express";
import ProductManager from "../ProductManager.js";
import uploader from "../utils/uploader.js";

//instanciamos el router de express para manejar las rutas
const productsRouter = express.Router();
//instanciamos el manejador de nuestro archivo de productos
const productManager = new ProductManager("./src/data/products.json");

productsRouter.get("/", async (req, res) => {
  try {
    const data = await productManager.getProducts();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

productsRouter.get("/:pid", async (req, res) => {
  try {
    const products = await productManager.getProductById(req.params.pid);
    res.status(200).send(products);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

productsRouter.post("/", async (req, res) => {
  try {
    const newProduct = req.body;
    const product = await productManager.addProduct(newProduct);
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});


//
//capturo el archivo importado como file
productsRouter.post("/",uploader.single("file"), async(req,res)=>{
try {
    //info viaje por el body.
    const title = req.body.title;
    const price = req.body.price;
    const thumbnail="/img/"+ req.file.filename;
    
    await productManager. addProduct({title, price, stock, thumbnail});
    res.redirect("/");
    //res.redirect("/realTimeProducts");
    //redirige a la pag principal home.handlebars
    //si quiero que quede en la misma pag que agrego  res.redirect("/realTimeProducts");
} catch (error) {
   // res.status(500).json({status:"error", massage: "No se agrego el producto"});
         res.render("errorAgregarProducto");

}

});
//


productsRouter.put("/:pid", async (req, res) => {
  try {
    const updatedProduct = req.body;
    const products = await productManager.setProductById(req.params.pid, updatedProduct);
    res.status(200).send(products);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

productsRouter.delete("/:pid", async (req, res) => {
  try {
    await productManager.deleteProductById(req.params.pid);
    res.status(200).send({ message: `Producto con id: ${req.params.pid} eliminado` });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

export default productsRouter;