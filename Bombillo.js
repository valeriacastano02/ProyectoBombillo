const $cambiarInterruptor = document.getElementById("cambiarInterruptor");
const $cambiarFoco = document.getElementById("cambiarFoco");
const $switch = document.querySelector(".switch");

function cambiarImagenes(){
    if($cambiarFoco.src.match("Assets/encendido-1.png") && $cambiarInterruptor.src.match("Assets/on-or.png")){
        $cambiarFoco.src = "Assets/apagado-1.png";
        $cambiarInterruptor.src = "Assets/off-or.png";

    }else{
        $cambiarFoco.src = "Assets/encendido-1.png";
        $cambiarInterruptor.src = "Assets/on-or.png";

    }
}

$switch.addEventListener("click", cambiarImagenes);
