export function validarFormularioPacientes(datospaciente){
    //referencias a etiquetas que quiero validar
    let etiquetaDocumentoPaciente=document.getElementById("documentopaciente")
    let etiquetaNombrePaciente=document.getElementById("nombrepaciente")
        
    // validemos 3 campos de formularios
    //nombres-documento-registros del medico
    let nombrePa=datospaciente.nombreP
    let documentoPa=datospaciente.documentoP
    

    //Agregar todos los caminos posibles para validar el formulario
    if(nombrePa== "" && documentoPa==""){
        etiquetaNombrePaciente.classList.add("is-invalid")
        etiquetaDocumentoPaciente.classList.add("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nombre y documento son obligatorios!',
            
          })

    }else if(nombrePa=="" && documentoPa!=""){
        etiquetaNombrePaciente.classList.add("is-invalid")
        etiquetaDocumentoPaciente.classList.remove("is-invalid")
    }else if(nombrePa!="" && documentoPa==""){
        etiquetaNombrePaciente.classList.remove("is-invalid")
        etiquetaDocumentoPaciente.classList.add("is-invalid")
    }else{
        alert("nos vamos para la bd")
        etiquetaNombrePaciente.classList.remove("is-invalid")
        etiquetaDocumentoPaciente.classList.remove("is-invalid")
    }
}