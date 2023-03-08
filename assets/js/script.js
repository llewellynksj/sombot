function burgerMenu() {
    myLinks = document.getElementById("links");
    if (myLinks.style.display === "block") {
        myLinks.style.display = "none";
    } else {
        myLinks.style.display = "block"
    }
}