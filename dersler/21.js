// Çok Kullanılan array metotları ve array içinde array

let items = [1,3,5,6,7,8]

// Array içinde array

let erkekler = ["Efe","Şükrü","Mehmet"]
let kızlar = ["Ece","Ceren","Melek"]

// items array'inin başına erkekleri ekleyelim
items.unshift(erkekler)

// Şimdide items array'inin sonuna kızları erkleyelim
items.push(kızlar)
console.log(items)

// Ve örneğin items içindeki erkeklerin 2.elemanını alalım
console.log(`İtems'ın içindeki erkeklerin 2.elemanı: ${items[0][1]}`)

// Array içinden öğe ayırmak --> splice()

let newItems = items.slice(2,5) // Başlangıç indexi 2 ve bitiş indexi 5
console.log(newItems)

// Array içindeki öğrenin index bilgisini bulmak --> indexOf('value')
// Örneğin items içindeki efeyi bulalım

console.log(items[0][items[0].indexOf('Efe')])

// Array kopyalamak --> slice
let copyItems = items.slice()
copyItems.push('Copy')

console.log(`Copy Items: ${copyItems}`)
console.log(`Items: ${items}`)

// Bir diğer kullanım ise
let alUsers = [...erkekler, ...kızlar]
console.log(alUsers)

// Array içerisindeki bilgiyi String'e çevirmek --> toString , join

console.log(alUsers.toString())
console.log(alUsers.join(" "))


// İstediğimiz Index bilgisine oğe eklemek --> splice(index,0,value)

alUsers.splice(2,1,"Efe2")
console.log(alUsers)