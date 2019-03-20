function addTable(text,whoDaddy)
{
    var el=document.createElement("table");
    el.innerHTML="<a>"+text+"</a>";
    //ну и всё, что нужно в том же духе, например:
    el.style.backgroundColor="#B0FFB0";
    whoDaddy.appendChild(el);
}

addTable("Text", index.html.here)