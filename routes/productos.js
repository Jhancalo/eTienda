//rutas ára consumir el modulo productos del servicio Ecommerce

const express=require("express");
const router=express.Router();

//Instanciamos el controlador correspondiente

const productoCtr=require("../controllers/productos")

//rutas que entregara el modulo producto

router.get("/producto/listartodos",productoCtr.listartodos);
router.post("/producto/nuevo",productoCtr.nuevo)
//...



module.exports=router;