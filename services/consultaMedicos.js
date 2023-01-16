export async function consultarMedicos(){
    //Consumiendo API
    //1.Conocer la dirección del API o Servicio
    let url="https://apigestorapp.vercel.app/gestionapp/especialistas"

    //2.Configurar a que voy al API
    //Configurando la REQUEST o PETICION
    let peticion={
        method:"GET",
        
    }
    //3.Consumir
    //Traer los datos del API
    let respuesta=await fetch(url,peticion)
    let medicos=await respuesta.json()

    return(medicos)
}