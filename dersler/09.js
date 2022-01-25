// Liste İçerisindeki Öğeye Erişmek ve Yeni Öğe Eklemek 
let firstChild = document.querySelector("ul#liste>li:first-child")
// Hatırlatma
// :first-child - ilk eleman
// :last-child - son eleman

console.log(`Listenin ilk elemanı ${firstChild.innerHTML}`)


let soru = prompt("Son Öğenin adı")
let lastChild = document.querySelector("ul#liste>li:last-child")
lastChild = lastChild.innerHTML = soru


// YENİ BİR ÖĞRE EKLEME

let ulDOM = document.querySelector("ul#liste")
let liDOM = document.createElement('li')
// Burda createElement ile yeni bir elemenet oluşturabildik

liDOM.innerHTML = "New Öğe"

// ulDOM.append(liDOM) append ile sona ekledik

ulDOM.prepend(liDOM) // 