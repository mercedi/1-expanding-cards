const panel = document.querySelectorAll(".panel"); //call all panels

for (let i = 0; i < panel.length; i++) {
    panel[i].addEventListener("click", function() {
        
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace("active", "");
        }
        //add the active class to current clicked
        this.className += " active";
    });
}

function removeClass() {
    for (let i = 0; i < panel.length; i++) {
        panel[i].addEventListener("click", function() {
            let bye = document.getElementsByClassName(".active");
             if (panel.length < 0) {
                bye.classList.remove(".active");
             }
        });
    }
}
removeClass();