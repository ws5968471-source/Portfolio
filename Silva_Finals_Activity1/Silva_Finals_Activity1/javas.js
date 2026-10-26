const first1 = document.getElementById("first")
const waiting = document.getElementById("wait1")
const named = document.getElementById("name1")

first1.addEventListener(
    "click", function(){
        named.innerHTML = "Future Alpha"
        waiting.innerHTML = "Click event activated"
    }
)