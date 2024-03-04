// var n = Math.random()
// n = n * 6
// n = Math.floor(n) + 1
// console.log(n)

// prompt("siapa nama mu ?");
// prompt("masuk universitas gak ?");

// if (studentWish === "mau") {
//     var chanceGetUniv = Math.random() * 100;
//     chanceGetUniv = Math.floor(chanceGetUniv);
//     console.log(chanceGetUniv);
//     alert("kemungkinan kamu msk univ adl" + chanceGetUniv "%");
// } else {
//     alert("baiklah goodluck !");
// }


var namaMahasiswa = prompt("Siapa Nama mu ?")
var studentWish = prompt("masuk universitas gak ?")


if (studentWish === "mau") {
    var nilaiSMA = prompt("Berapakan nilai terakhir SMA/SMK mu?")
    if (nilaiSMA < 30) {
        alert(`hmm kemungkinan kamu ${namaMahasiswa} kecil masuk UNIV`)
    }
    else if (nilaiSMA < 50) {
        alert(`hmm kemungkinan kamu ${namaMahasiswa} kecil masuk UNIV`)
    } 
    else if (nilaiSMA < 70) {
        alert(`hei ${namaMahasiswa} pasti masuk UNIV dengan ${nilaiSMA} mu yang besar itu`)
    } 
    else {
        alert(`hei ${namaMahasiswa} pasti masuk UNIV dengan ${nilaiSMA} mu yang besar itu`)
    }
} else {
    alert(`okedeh goodluck Terserah Lu!`)
}
