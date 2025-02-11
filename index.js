//Librerias vase
const express=require('express');
const app=express();
const cors=require("cors");
//middleware de la app
app.use(cors());
app.use(express.json());


//Instanciamos la libreria de conexion 
const conexion=require('./models/bd_conexion.js');
conexion();
//rutas globales de la app

const productoRta=require('./routes/productos.js');


//usamos las rutas

app.use('/api',productoRta);

app.listen(4000,()=>{
    console.log(`listen ${4000}`);
});