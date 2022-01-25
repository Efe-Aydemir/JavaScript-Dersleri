// PROMT İLE KULLANICIDAN BİLGİ ALMAK 

let qu = prompt("Başlıkmı Olsun Yoksa Paragrafmı (1/2):")

if(qu == "1") {
     let head = prompt("Sayfaya Yazılacak Başlık:")
     document.write(`<h1>${head}</h1>`)
} else if (qu == "2") {
     let str = prompt("Sayfaya Yazılacak Paragraf:")
     document.write(`<p id="new">${str}</p>`)
}