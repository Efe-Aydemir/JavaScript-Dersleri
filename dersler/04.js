// Veri türünü öğrenmek typeof:
let sayi = 111
let metin = "JavaScript"
let deger = true

console.log(`'${sayi}'  Türü:`, typeof sayi )
console.log(`'${metin}' Türü:`, typeof metin )
console.log(`'${deger}' Türü:`, typeof deger )

// string(metinsel) bilgileri int ve float'a donüstürme:
let number1 = "42"
console.log(`'${number1}' Türü:`, typeof number1)
// string verimizi integer'a dönüştürmek için parseInt() adında bir fonksiyonumuz var
number1 = parseInt(number1)
console.log(`'${number1}' Türü:`, typeof number1)


let number2 = "34plaka"
console.log(`'${number2}' Türü:`, typeof number2)
// string verimizi integer'a dönüştürmek için parseInt() kullandığımızda eğer verinin başında sayı varsa alabilmemizi sağlıyor
number2 = parseInt(number2)
console.log(`'${number2}' Türü:`, typeof number2)
//! Number() adındada bir fonksiyon var fakat number sadece içinde sayı varsa çalışır başka karakter var ise NaN alırız


let number3 = "42.3"
console.log(`'${number3}' Türü:`, typeof number3)
// string verimizi integer'a dönüştürmek için parseInt() adında bir fonksiyonumuz var
number3 = parseFloat(number3)
console.log(`'${number3}' Türü:`, typeof number3)
//! Number() adındada bir fonksiyon var fakat number sadece içinde sayı varsa çalışır başka karakter var ise NaN alırız



// number veri tipini string'e dönüştürme
let number4 = 5
console.log(`'${number4}' Türü: `, typeof number4)
number4 = number4.toString()
console.log(`'${number4}' Türü: `, typeof number4)