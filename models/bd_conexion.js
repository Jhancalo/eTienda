//Instanciar la libreria mongoose: 
const mongoose=require("mongoose");

const conexion=async()=>{
    try{
       
       await mongoose.connect("mongodb://127.0.0.1:27017/etienda");
       console.log("Conectado!!!");
    }catch(error){
    console.log(`Ojo --->Error en la conexion:${error}`);
    //throw new Error(error);
    }  
};


module.exports=conexion

