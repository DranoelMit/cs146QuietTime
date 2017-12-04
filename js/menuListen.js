window.addEventListener("load", function(e)
{
    var menubar = document.getElementById('menu');
    menubar.addEventListener("mouseover", function(e)
    {
        menubar.style.transition = "font-size .5s";
        menubar.style.fontSize = "16pt";

    });
    menubar.addEventListener("mouseout", function(e)
    {
        menubar.style.transition = "font-size .5s";
        menubar.style.fontSize = "14pt";

    });

});
