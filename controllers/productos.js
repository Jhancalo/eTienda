// controlador para el manejo de los productos

// conectamos el controlador con su modelo correspondiente
const Producto = require("../models/productos");
//let Producto = require("../models/productos");

// logica de un CRUD tipico.
const getProductos = async (req, res) => {
  try {
    // consultador todo sin filtro
    let listarProductos = await Producto.find().exec();
    res.status(200).send({
      Exito: true,
      data: listarProductos,
      mensaje: "Exito en la consulta",
    });
  } catch (error) {
    res.status(500).send({
      Exito: false,
      mensaje: "Error, en la consulta.",
    });
  }
};
const setProducto = async (req, res) => {
  // llega el objeto en el body del request.
  let data = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    imagen: req.body.imagen,
    marca: req.body.marca,
    precio: req.body.precio,
    existencia: req.body.existencia,
    rating: req.body.rating,
    numRevisiones: req.body.numRevisiones,
    estadoOfertado: req.body.estadoOfertado,
  };
  try {
    // instancia del modelo Producto (collection).
    const productoCreate = new Producto(data);
    // creamos el nuevo documento (que agregaremos a la collection).
    productoCreate.save(); // salvamos el mongo.
    return res.send({
      estado: true,
      mensaje: "¡Insercion Exitosa!",
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: `Error en la Insercion: ${error}`,
      error: error,
    });
  }
};
const updateProducto = async (req, res) => {
  // llega el objeto en el body del request.
  let id = req.params.id;
  let data = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    imagen: req.body.imagen,
    marca: req.body.marca,
    precio: req.body.precio,
    existencia: req.body.existencia,
    rating: req.body.rating,
    numRevisiones: req.body.numRevisiones,
    estadoOfertado: req.body.estadoOfertado,
  };
  try {
    // instancia del modelo Producto (collection).
    let productoUpdate = await Producto.findByIdAndUpdate(id, data);

    return res.send({
      estado: true,
      mensaje: "Actualizacion Exitosa!",
      reslut: productoUpdate,
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: `Error en la Actualizacion: ${error}`,
    });
  }
};

// buscar por ID o otro parametro
const searchById = async (req, res) => {
  // recibimos el paramotro por el cual debemos buscar.
  //let id=0;
  let id = req.params.id;
  /*  if (req.params.id) {
    id = req.params.id;
  } else {
    console.log("falta el parametro");
  } */
  try {
    // logica de buscar y mostrar el resultado.
    // let result = await productos.findById({ id: req.params.id }).exec();
    let result = await Producto.findById(id).exec();

    return res.send({
      estado: true,
      mensaje: "Consulta Exitosa",
      result: result,
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: "Error, No fue posible encotrar el registro.",
    });
  }
};
// actualizadr de acuerdo al ID

// Eliminar de acuerdo al ID :: RECUERDE QUE ES SOLO DE USO DIDACTICO.
const deleteById = async (req, res) => {
  let id = req.params.id;

  try {
    // let result = await Producto.findByIdAndDelete(id).exec();
    let result = await Producto.findOneAndDelete(id).exec();
    return res.send({
      estado: true,
      mensaje: "Borrado Exitoso",
      result: result,
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: "Error, Nos fue posible eliminar el producto.",
    });
  }
};
module.exports = {
  getProductos,
  setProducto,
  updateProducto,
  searchById,
  deleteById,
};