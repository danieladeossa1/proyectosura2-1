import {validarFormulario} from './validacionFormularioMedico.js'

//Creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaRegistro,etiquetaEspecialidad,etiquetaCorreo,etiquetaSede,etiquetaHorario,etiquetaDescripcion,etiquetaFoto){
    let nombreMedico=etiquetaNombre.value
    let documentoMedico=etiquetaDocumento.value
    let especialidadMedicina=etiquetaEspecialidad.value
    let registroMedico=etiquetaRegistro.value
    let correoMedico=etiquetaCorreo.value
    let sedeMedico=etiquetaSede.value
    let horarioMedico=etiquetaHorario.value
    let descripcionMedico=etiquetaDescripcion.value 
    let fotoMedico=etiquetaFoto.value

    //debemos almacenar todos lo valores del formulario en una sola variable
    //Objeto=permite alamcenar varios datos en 1 solo espacio de memoria
    let datosFormularioMedico={
        nombre:nombreMedico,
        documento:documentoMedico,
        especialidad:especialidadMedicina,
        regsitro:registroMedico,
        correo:correoMedico,
        sede:sedeMedico,
        Horario:horarioMedico,
        descripcion:descripcionMedico,
        foto:fotoMedico,
    }
    validarFormulario(datosFormularioMedico)
    
    
}