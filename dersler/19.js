// Array -- Dizilerle Çalışmak


// Array Oluşturmak
let surname = "efe"
let items = ["Elma","Armut","Portakal",surname,true] // Dizilerin içine virgüller ile istediğimiz bilgileri koyabiliriz
console.log(items)

// Array içerisindeki eleman/öğe sayısını öğrenmek
console.log(items.length) // array içindeki öğre sayısı

// Array içindeki ilk elemanın çağrılması
console.log(`İtems arrayinin ilk elemanı '${items[0]}'`)

// Array içindeki son elemanı alma
console.log(`İtems arrayinin son elemanı '${items[ items.length - 1 ]}'`)

// değişken içindeki bilginin Array olup olmadığını kontrol etme

let isArray = Array.isArray(items)

if (isArray == true) {
    console.log(
        "İtems öğesi Bir Array"// Array const. is array adında bi fonku var ve buna vericeğimiz objenin array olup olmadığını kontroş edio
    )
}

