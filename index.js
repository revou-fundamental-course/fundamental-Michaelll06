
const results = document.getElementById("user_input");
const results2 = document.getElementById("user_input2");
const results3 = document.getElementById("user_input3");
const results4 = document.getElementById("user_input4");
function Display(){
    let text = results.value;
    let text2 = results2.value;
    let text3 = results3.value;
    let text4 = results4.value;
    document.getElementById("show").innerHTML = "Nama: " + text;
    document.getElementById("show2").innerHTML = "Tanggal Lahir: " + text2;
    document.getElementById("show3").innerHTML = "Jenis Kelamin: " + text3;
    document.getElementById("show4").innerHTML = "Pesan: " + text4;
}