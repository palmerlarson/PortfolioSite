let x = document.getElementsByClassName("bar");
const mobileNav = ()=>{
    let checkBox = document.getElementById("myCheck");
    let y = document.getElementById("burger");
    if (checkBox.checked == true) for(i = 0; i < x.length; i++)x[i].style.display = "block";
    else for(i = 0; i < x.length; i++)x[i].style.display = "none";
    if (y.style.display == "none") for(i = 0; i < x.length; i++)x[i].style.display = "inline-block";
};
window.onresize = function() {
    if (window.innerWidth > 1065) for(i = 0; i < x.length; i++)x[i].style.display = "inline-block";
    else for(i = 0; i < x.length; i++)x[i].style.display = "none";
};

//# sourceMappingURL=index.362fe9da.js.map
