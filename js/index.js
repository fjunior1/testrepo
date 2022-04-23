
$('#btn1a').click(function (event) {
    // queryAPICityInfo(event.target.innerText);
    window.alert("clicked");
    $("btn1").css("background-color", "red");
})


function myFunction(){
    // window.alert("clicked");
    $("btn1").css("background-color", "red");
    var elem = Document.getElementById('btn1');
    elem.style.color = "yellow";
}