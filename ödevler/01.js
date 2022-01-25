// Koşullar ile çalışmak bölüm sonu egzersizi

/*
1-promt ile aldığın bilgiye göre aşağıdaki yapıyı kullanarak notun bilgisini sayfaya yaz

AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0-49

2-kullanıcının girdiği verinin istediğimiz aralıkta olup olmadığını kontrol et

3-ff bilgisinde üzgün surat ikonu çıkart diğerlerinde gülücük

4-ff class bilgisi text-danger,diğerlerinin text-pri olsun
*/

// 1
let not = parseInt(prompt("Sınav Notunuz: "))
let head = document.querySelector("#bas")

if (not >= 90 && not <= 100) {
     head.innerHTML = "Notunuz: AA 😀"
     head.classList.add("text-pri")
}
 else if (not >= 85 && not <= 89) {
     head.innerHTML = "Notunuz: BA 😀"
     head.classList.add("text-pri")
}
 else if (not >= 80 && not <= 84) {
     head.innerHTML = "Notunuz: BB 😀"
     head.classList.add("text-pri")
}
 else if (not >= 75 && not <= 79) {
     head.innerHTML = "Notunuz: CB 😀"
     head.classList.add("text-pri")
}
 else if (not >= 70 && not <= 74) {
     head.innerHTML = "Notunuz: CC 😀"
     head.classList.add("text-pri")
}
 else if (not >= 65 && not <= 69) {
     head.innerHTML = "Notunuz: DC 😀"
     head.classList.add("text-pri")
}
 else if (not >= 60 && not <= 64) {
     head.innerHTML = "Notunuz: DD 😀"
     head.classList.add("text-pri")
}
 else if (not >= 50 && not <= 59) {
     head.innerHTML = "Notunuz: FD 😀"
     head.classList.add("text-pri")
}
 else if (not >= 0 && not <= 49) {
     head.innerHTML = "Notunuz: FF 😒"
     head.classList.add("text-danger")
}
 else {
     head.innerHTML = "Girilen Sayı Anlaşılamadı :/"
}