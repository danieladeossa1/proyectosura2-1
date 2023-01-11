import {validarFormularioPacientes} from './validacionFormularioPacientes.js'

//Creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatosPacientes(etiquetaDocumentoPaciente,etiquetaNombrePaciente,etiquetaCuota,etiquetaCorreoPaciente,etiquetaTelefonoPaciente){
    let documentoPaciente=etiquetaDocumentoPaciente.value
    let nombrePaciente=etiquetaNombrePaciente.value
    let cuota=etiquetaCuota.value
    let correoPaciente=etiquetaCorreoPaciente.value
    let telefonopaciente=etiquetaTelefonoPaciente.value


    //debemos almacenar todos lo valores del formulario en una sola variable
    //Objeto=permite alamcenar varios datos en 1 solo espacio de memoria
    let datosFormularioPaciente={
        documentoP:documentoPaciente,
        nombreP:nombrePaciente,
        cuotaP:cuota,
        correoP:correoPaciente,
        telefonoP:telefonopaciente,    
        
    }
    validarFormularioPacientes(datosFormularioPaciente)
    
    
}