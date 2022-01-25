// Karşılaştırma Operatörleri ve Mantıksal Operatörler

let fiyat = 100

// == Eşitse 
console.log(" == : ",fiyat == 1) // fiyat eşitmi 1'e => false
console.log(" == : ",fiyat == 100) // fiyat eşitmi 100'e => true

// === Hem değerleri hem türleri eşitse
console.log(" === : ",fiyat === 100) // fiyat'ın değeri integer(sayı) 100'e eşitmi => true
console.log(" === : ",fiyat === "100") // fiyat'ın değeri string(metin) 100'e eşitmi => false

// != Eşit Değilse
console.log(fiyat != 1) // fiyat eşit değilmi 1'e => true 
console.log(fiyat != 100) // fiyat eşit değilmi 100'e => false 

// < Küçükse
console.log(fiyat < 200) // fiyat küçükmüdür 200'den => true
console.log(fiyat < 100) // fiyat küçükmüdür 100'den => false

// <= Küçük veya Eşitse
console.log(fiyat <= 1) // fiyat küçük veya eşitmidir 1'e => false
console.log(fiyat <= 100) // fiyat küçük veya eşitmidir 100'e => true

// > Büyükse 
console.log(fiyat > 1) // fiyat büyükmüdür 1'den => false
console.log(fiyat > 100) // fiyat büyükmüdür 100'den => false

// >= Büyük veya Eşitse
console.log(fiyat >= 1) // fiyat büyük veya eşitmidir 1'e => false
console.log(fiyat >= 100) // fiyat büyük veya eşitmidir 100'e => true

// && ve
let frname = "monjor"
console.log(fiyat == 100 && frname == "monjor") // fiyat eşitmi 100'e ve frname eşitmi "monjor"'a => true
// ve operatöründe iki sorguda true dönmek zorunda herhangi biri false olursa sonuc false olur

// || veya
console.log(fiyat == 1 || frname == "monjor") // fiyat eşitmidir 1'e veya frname eşitmidir "monjor"'a => true
// veya operatöründe ise sorgunun herhangi birinin true olması yeter sonuç true döner

