const panels = document.querySelectorAll(".panel");
//Each div with 'panel' is iterated and each element is added a event listener
panels.forEach(panel => {
    panel.addEventListener("click", function() {
        //inside this forEach loop, each panel removes active class, after removed
        panels.forEach(x => x.classList.remove("active"));
        this.classList.add("active"); //'this' refers to current panel element that is clicked (adds the active class when clicked)
    });
});
