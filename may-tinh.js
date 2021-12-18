function number1() {
    let a = parseInt(document.getElementById("tatol1").value);
    let b= parseInt(document.getElementById("tatol2").value) ;
    let c = a+b;
    document.getElementById("result").innerHTML="Result:" +c;
}
function number2() {
    let a = parseInt(document.getElementById("tatol1").value);
    let b= parseInt(document.getElementById("tatol2").value) ;
    let c = a-b;
    document.getElementById("result").innerHTML="Result:" +c;
}
function number3() {
    let a = parseInt(document.getElementById("tatol1").value);
    let b= parseInt(document.getElementById("tatol2").value) ;
    let c = a*b;
    document.getElementById("result").innerHTML="Result:" +c;
}
function number4() {
    let a = parseInt(document.getElementById("tatol1").value);
    let b= parseInt(document.getElementById("tatol2").value) ;
    let c = a/b;
    document.getElementById("result").innerHTML="Result:" +c;
}
