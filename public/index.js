let button = document.querySelector(".navigation-einklappen");
/*
button.addEventListener('click', function () {
    if (document.querySelector('.sidenav').style.width === "50px") {
        document.querySelector('.sidenav').style.width = "300px";
    } else {
        document.querySelector('.sidenav').style.width = "50px";
    }
});*/

button.addEventListener('click', ()=> {
    document.querySelector(".sidenav").classList.toggle('collapsed');
});