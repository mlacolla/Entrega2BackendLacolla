//0
import express from "express";
import ProductManager from "../ProductManager.js";

const viewsRouter = express.Router();
const productManager = new ProductManager("./src/data/products.json");


//Capturar imagen que mandamos del formulario
const middlewarweIsAdmin = (req,res,next)=>{

    if(user.isAdmin){
        next();
    }else{
        res.render("errorPermisos");
    }
}

//Enpoints
//isAdmin: true permite agregar producto.
//isAdmin: false no aparece la opcion de agregar producto. 
const user = { username: "Soe Lopez", isAdmin: true };

viewsRouter.get("/", async(req, res) => {
    try {
        const products= await productManager.getProducts();
        res.render("home", { products, user });
    } catch (error) {
        res.render("errorPermisos");
    }

    //devolvemos una plantillas .render("nombre de la vista")
});

//Si el usuario tiene permisos de administrador deja agregar productos. 
viewsRouter.get("/realTimeProducts", middlewarweIsAdmin, async(req, res) => {
    try {
        const products= await productManager.getProducts();
        res.render("realTimeProducts", { products, user });
    } catch (error) {
    res.status(500).send({message:error.message});
    }
});

export default viewsRouter;