// Array yapısına öğe eklemek ve Array içerisinde istenilen öğenin çıkarılması


let items = [1,3,5,7,9]
console.log(`items - ilk hali: ${items}`)

// Array: Sona eleman eklemek --> push
items.push(11)
console.log(`items - push(sona ekleme): ${items}`)

// Array: Başa Öğe ekleme --> unshift
items.unshift(20)
console.log(`items - unshift(başa ekleme): ${items}`)

// Array Sondaki ögeyi çıkarmak --> pop
items.pop()
console.log(`items - pop(son öğeyi çıkarmak): ${items}`)

// Array Baştaki öğeyi çıkarma
items.shift()
console.log(`items - shift(ilk eleman çıkarma): ${items}`)