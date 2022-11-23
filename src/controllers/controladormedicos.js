//Etiquetas que controlo
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaRegistro=document.getElementById("registro")
let etiquetaCorreo=document.getElementById("correoelectronico")

//detectar el evento de clic
etiquetaBoton.addEventListener("click",function(evento){

    evento.preventDefault()
    /*Swal.fire(
        'Exito!',
        'El especialista ha sido registrado',
        'success'
      )*/

      //Recibiendo los datos del formulario
      let nombreMedico=etiquetaNombre.value
      console.log(nombreMedico)
      let documentoMedico=etiquetaDocumento.value
      console.log(documentoMedico)
      let registroMedico=etiquetaRegistro.value
      console.log(registroMedico)
      let correoMedico=etiquetaCorreo.value
      console.log(correoMedico)
    })
