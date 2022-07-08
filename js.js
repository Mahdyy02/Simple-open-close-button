function toggleOnOff() {
    var element = document.getElementsByClassName("button")[0];
    var on = document.getElementsByClassName("On")[0];
    var off = document.getElementsByClassName("Off")[0];
    var span_on = document.querySelector(".On span");
    var span_off = document.querySelector(".Off span");

    element.classList.toggle("active")

    active = (' ' + element.className + ' ').indexOf(' active ') != -1;

    if (active){
        on.style.display = "block"
        off.style.display = "none"

        span_on.style.color = "green"
    }
    else{
        on.style.display = "none"
        off.style.display = "block"

        span_off.style.color = "red"
    }
                
}