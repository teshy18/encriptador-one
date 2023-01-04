
function encriptarTexto(){
    const text = document.getElementById('textarea').value
    const mensajeSalida = document.getElementById('msg')

    const textoEncriptado = text.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat')


    if (text.length == 0 ){
        mensajeSalida.textContent = 'No se encontro ningún un mensaje para encriptar o desencriptar'
    }
    else{
        mensajeSalida.textContent = textoEncriptado
    }
    
}


function desencriptarTexto(){
    const text = document.getElementById('textarea').value
    const mensajeSalida = document.getElementById('msg')

    const textoDesencriptado = text.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u')


    if (text == 0 ){
        mensajeSalida.textContent = 'No se encontro ningún un mensaje para encriptar o desencriptar'
    }
    else{
        mensajeSalida.textContent = textoDesencriptado
    }
    
}

function copiarTexto(){
    const mensajeSalida = document.getElementById('msg');

    
    navigator.clipboard.writeText(mensajeSalida.textContent)

    alert('se copio el mensaje')
}




const botonEncriptar = document.getElementById('encriptar').addEventListener('click',(event)=>{
    event.preventDefault();
    encriptarTexto()
})

const botonDesencriptar = document.getElementById('desencriptar').addEventListener('click', (event)=>{
    event.preventDefault();
    desencriptarTexto();
})

const botonCopiar = document.getElementById('copiar').addEventListener('click', (event)=>{
    event.preventDefault();
    copiarTexto()
})