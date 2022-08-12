let turnOn = document.getElementById('turnOn')
let turnOff = document.getElementById('turnOff')
let lamp = document.getElementById('lamp')
function isLampBroken() {
    return lamp.src.indexOf ('quebrada') > -1
}
function lampOn() { 
    if (!isLampBroken()) {
    lamp.src='imagem/ligada.jpg'
    }
}
function lampOff() {
    if (!isLampBroken()) {
    lamp.src='imagem/desligada.jpg'
    }
}
function lampbroken() {
    lamp.src='imagem/quebrada.jpg'
}
turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff) 
lamp.addEventListener('mouseover', lampOn)  
lamp.addEventListener('mouseleave', lampOff) 
lamp.addEventListener('dblclick', lampbroken)   
                                                   