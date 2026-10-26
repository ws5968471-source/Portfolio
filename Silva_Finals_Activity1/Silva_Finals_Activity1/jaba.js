const image = document.getElementById("image1")
const secondo = document.getElementById("second")
const pressholds = document.getElementById("presshold")
const first1 = document.getElementById("first")
const named = document.getElementById("name1")
const waiting = document.getElementById("wait1")
const intput = document.getElementById("input1")

image.addEventListener(
    "mouseover", function(){
        waiting.innerHTML = "Mouse entered the image"
    }
)

image.addEventListener(
    "mouseout", function(){
        waiting.innerHTML = "Mouse leave the image"
    }
)

pressholds.addEventListener(
    "focus", function(){
        waiting.innerHTML = "Mouse button is pressed"     
    }
)

pressholds.addEventListener(
    "click", function(){
        waiting.innerHTML = "Mouse button is release"     
    }
)

intput.addEventListener(
    "click", function(){
        intput.style.backgroundColor = "skyblue"
    }
)

intput.addEventListener(
    "click", function(){
        waiting.innerHTML = "Intput is active"
    }
)

intput.addEventListener(
    "input", function(){
        intput.innerHTML = intput.value
        named.innerHTML = intput.value
        waiting.innerHTML = "Typing...."
    }
)

first1.addEventListener(
    "click", function(){
        named.innerHTML = "Future Alpha"
        waiting.innerHTML = "Click event activated"
    }
)

secondo.addEventListener(
    "click", function(){
        named.style.color = "red"
    }
)

secondo.addEventListener(
    "dblclick", function(){
        named.innerHTML = "Future Alpha"
    }
)


