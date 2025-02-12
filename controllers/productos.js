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


//crear nuevo
    
};
const nuevo=async(req,res)=>{

    //llega el objeto en el body del request

let datos={
    nombre: req.body.nombre,
    descripcion:req.body.descripcion,
    imagen:req.body.imagen,
    marca:req.body.marca,
    precio:req.body.precio,
    existencia:req.body.existencia,
    rating:req.body.rating,
    numRevisiones:req.body.numRevisiones,
    estaOfertado:req.body.estadoOfertado
};

try {
     //instanciamos del modelo producto(collection)

const productoNuevo = new Producto(datos)
productoNuevo.save(); //Escribe en mongo 

return res.send({
    estado:true,
    mensaje:"Insecion Exitosa!!"

})  
    
} catch (error) {

    return res.send({
        estado:false,
        mensaje:'Ha ocurrido un ERROR en la consulta!! ${error}',
    })
    
}

   

};

module.exports={listartodos,nuevo}