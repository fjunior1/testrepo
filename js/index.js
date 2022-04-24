
document.getElementById('btn1a').onclick =function (event) {
    // queryAPICityInfo(event.target.innerText);
    window.alert("clicked");
    document.getElementById("btn1a").style.backgroundColor = "red";
}

// The next commented function is used to handle click
// event in button when you add
//  onclick="myFunction()"
// to the html button element

// function myFunction(){
//     // window.alert("clicked");
//     $("btn1a").css("background-color", "red");
//     var elem = document.getElementById('btn1a')
//     elem.style.color = "yellow";
// }