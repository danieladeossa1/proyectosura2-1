//Importaciones
import {capturarDatosPacientes} from '../formularios/formularioPaciente.js'


//Etiquetas que controlo
let etiquetaDocumentoPaciente=document.getElementById("documentopaciente")
let etiquetaBotonPaciente=document.getElementById("botonenviopaciente")
let etiquetaNombrePaciente=document.getElementById("nombrepaciente")
let etiquetaCuota=document.getElementById("cuotamoderadorapaciente")
let etiquetaCorreoPaciente=document.getElementById("correopaciente")
let etiquetaTelefonoPaciente=document.getElementById("telefonopaciente")


//detectar el evento de clic
etiquetaBotonPaciente.addEventListener("click",function(evento){

    evento.preventDefault()
    capturarDatosPacientes(etiquetaDocumentoPaciente,etiquetaNombrePaciente,etiquetaCuota,etiquetaCorreoPaciente,etiquetaTelefonoPaciente)

    
    })
