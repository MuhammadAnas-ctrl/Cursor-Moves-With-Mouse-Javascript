window.addEventListener("load" , ()=>{
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden")

    loader.addEventListener("transitioned" , ()=>{
        document.body.removeChild("loader")
    })
})

var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})


function promptName() {
    let name = prompt("Please enter your name:");

    let nameDisplay = document.getElementById("name");

    if (name && name.trim() !== "") {
        nameDisplay.innerHTML = "Hello , " + name + "!";
    } else {
        nameDisplay.innerHTML = "Reload and enter your name.";
    }
}
        // If the user did not enter a name, prompt them again
        window.onload = promptName;




