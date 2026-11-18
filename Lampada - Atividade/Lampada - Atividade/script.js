var lamp = document.getElementById("lamp");
var alternar = false;
    lamp.addEventListener("click", function () {
        alternar = !alternar
       if (alternar) {
      document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)"
      lamp.src = "assets/lamp_on.png" 
      lamp.alt = "Lâmpada acesa"
    } else {
        document.body.style.background = "radial-gradient(circle, white 8%, black 100%)"
        lamp.src = "assets/lamp_off.png" 
      lamp.alt = "Lâmpada apagada"
    }
    })
var interruptor = document.getElementById("interruptor");
var alternar = false;
    interruptor.addEventListener("click", function () {
        alternar = !alternar
       if (alternar) {
      interruptor.src = "assets/button_on.png" 
      interruptor.alt = "Interruptor ligado"
      document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)"
      lamp.src = "assets/lamp_on.png" 
      lamp.alt = "Lâmpada acesa"
    } else {
      interruptor.src = "assets/button_off.png" 
      interruptor.alt = "Interruptor desligado"
      document.body.style.background = "radial-gradient(circle, white 8%, black 100%)"
        lamp.src = "assets/lamp_off.png" 
      lamp.alt = "Lâmpada apagada"
    }
})