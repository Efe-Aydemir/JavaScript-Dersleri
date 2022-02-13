// Object  Key-Value


// Doğru Anahtar Bilgisi Oluşturma

let laptop = {
    marka : "Asus",
    model : "Tuf Gaming"
}

console.log(laptop)

// Anahtar bilgisine yeni değer ekleme

laptop.model = "Rog"
console.log(laptop)

// Yeni Bilgi Eklemek

laptop.dil = "Türkçe"
console.log(laptop)

// Anahtar bilgilerine ulaşmak (keys) --> Object.keys(item)

let keys = Object.keys(laptop)
console.log(keys)

// deger bilgilerine ulaşmak (values) --> Object.values(item)

let values = Object.values(laptop)
console.log(values)