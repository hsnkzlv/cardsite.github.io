const panels = document.querySelectorAll(".panel"); /*querySelectorAll bütün panellere ulaşır. */

panels.forEach(panel => {
    panel.addEventListener("click", () =>{

        removeActive();
        panel.classList.add("active");
    })
})

function removeActive(){
    panels.forEach( panel => {
        panel.classList.remove("active");
    })
}