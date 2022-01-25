// Fonksiyonlara Parametreler atamak ve Fonksiyondan Geridonus Almak

// TEMEL KURALLAR :
// 1: Bir Fonksiyon Bir veya Daha Fazla Parametre alabilir veya Hiç Almayabilir
// 2: Bir Fonksiyon Dışarı Bilgi Gönderebilir(return) veya Göndermeyebilir
// 3: Mümkünse Fonksiyonun Bağımlılıklarını Azaltmak Gerekir


let firstname = "Efe"

function merhaba() {
    console.log(`Merhaba ${firstname}`)
    // burada eğer firstname olmazsa hata alırız bide daha doğru kullanımına bakalım
}


function dogru(firstname) {
    console.log(`Merhaba ${firstname ? firstname : "Kullanıcı"}`)
}

dogru("efe")
// Parametre girmezsem "Merhaba Kullanıcı" dönecek 
// Parametre girersem parametreyi dönecek


// Bir fonksiyon dışarıya değerde gönderebilir örneğin bi toplama işlemi yapalım

function topla(a,b) {
    console.log(`${a} sayısının ${b} sayısı ile toplamı: ${a + b}`)
}
// e bize bi değer döndü ozaman değişkene eşitlerim
// let toplama = topla(2,2) bu hataya düşmeden uyarayım burda hata alırız çünkü fonksyionumuz dışarıyı bi değer dönmüyor aslında sadece console'a yazıyor bu şekilde kullanabilmemiz için

function dogruTopla(a,b) {
    return `${a} sayısının ${b} sayısı ile toplamı: ${a + b}` // return kelimesinden yararlanırız 
}

let deger = dogruTopla(2,2)
console.log(deger)