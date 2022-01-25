// *** Number ***

// *** number veri türü tanımlama:
let fiyat = 100

// *** arttırma ve azaltma işlemleri:
let baslangic = 0

if (baslangic <= 10) {
    while(baslangic <= 10) {
        console.log(baslangic)
        baslangic++
    }
}

// *** işlem önceliği:

console.log(2 + 2 * 5) // 20 ???? hayır cevao 12
console.log((2 + 2) * 5) // 20 ???? evet cevap 20

// *** mod(kalan) alma %:
let bas = 24

if (bas % 2 == 0) {
    console.log(`Sayı Çift-Sayı: ${bas}`)
} else {
    console.log(`Sayı Tek-Sayı: ${bas}`)
}

// *** üs alma **:
let sayi = 3
console.log(sayi ** 3)

// *** aşağı yuvarlama işlemi -> Math.floor:
let yuvarlama = 2.7
console.log(Math.floor(yuvarlama))

// *** Yukarı yuvarlama işlemi -> Math.ceil:
let yuvarlama2 = 2.3
console.log(Math.ceil(yuvarlama2))

// *** yakına yuvarlama işlemi -> Math.round:
let yuvar = 2.3
console.log(Math.round(yuvar))