//* 0 ve 1'i Anlamak ->
let deger = false // 0
deger = true // 1

Boolean("11") // true
Boolean("0") // true
Boolean("") // false

// örneğin bi değişken tanımlayalım ardından boolean ile bu değişkenin içinde veri olup olmadığını anlyalım

let deg = "efe"
let varmi = Boolean(deg)

if (varmi == true){
    console.log("Değer var")
} else {
    console.log("Değer yok")
}

//! Ek olarakta Boolean()'nın false gösterdiği bazı şeyler -->
/*
0
-0
null
false
NaN
undefined
("")
*/