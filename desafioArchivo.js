const fs = require('fs');

class Contenedor{
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo;
    }

    

    save(object){
        try{
            fs.promises.readFile(this.nombreArchivo, 'utf-8')
            .then((productosStr) => {
              //  const productosObj = JSON.parse(productosStr)
                if(productos.lenght != 0 ){
                    const nuevoProducto = productos.map((element, index) => {
                        const id = index + 1
                        
                        element.id = id
                        fs.promises.appendFile(this.nombreArchivo, element)
                      })
                      const id = productos.lenght +1;
                      object.id = id
                      fs.promises.appendFile(this.nombreArchivo, object)
                    
                }else{
                    object.id = 1;
                    fs.promises.writeFile(this.nombreArchivo,object)

                }
             })
       
        }
        catch(err){

        }
    }

    getById(id){
        try{
        fs.promises.readFile(this.nombreArchivo, 'utf-8')
            .then((productos) => {
            //    const productosObj = JSON.parse(productosStr)
                const object = productos.find((element, id) => {
                const isMatch = element.id === id
                    console.log(isMatch)
                  })
            })
        }
        catch(err){}
    
    }
 
    getAll(){
        try{
            fs.promises.readFile(this.nombreArchivo, 'utf-8')
                .then((productos) => {
                   // const productosObj = JSON.parse(productosStr)
                        console.log(productos)
                      })
                
            }
            catch(err){}
    }

    deleteById(id){
        try{
            fs.promises.readFile(this.nombreArchivo, 'utf-8')
                .then((productos) => {
                   // const productosObj = JSON.parse(productosStr)
                    const nuevaLista = productos.filter(p =>{
                        p.id !== id;
                    })
                      })
                      console.log(nuevaLista)
            fs.writeFileAsyn(this.nombreArchivo, nuevaLista)
            
                
            }
            catch(err){}
    }

    deleteAll(){
    fs.unlink(this.nombreArchivo, error =>{
        if(error){
            console.log("No se pudo borrar")
        }else{
            console.log("Archivo borrado")
        }
    })
    }
}


const nuevo = new Contenedor('./productos.txt')

nuevo.getAll()