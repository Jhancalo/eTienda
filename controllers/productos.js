//controlador para el manejo de los productos

//conectamos el controlador con su modelo correspondiente

let Producto=require('../models/productos');

//toda la logica de un crud tipico listar todo,listar por ID,crear,actualizar,borrar, etc...

const listartodos=async (req,res)=>{


try {

    //consulta todos sin filtro

    let listarProductos= await Producto.find().exec();
    res.status(200).send({
        exito:true,
        listarProductos
    })

    
} catch (error) {
   res.status(500).send({exito:false,
    mensaje:"Error en la consulta"}) 
}
    
};

module.exports={listartodos}