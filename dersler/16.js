// Arrow Function Kullanımı

// Normal Function
function hello(name) {
    console.log(`Merhaba ${name ? name : "Kullanıcı"}`)
}

hello("Efe")


// Arrow Function

const helloFunc = (name,surname) => {
    console.log(`Merhaba2 ${name ? name : "Kullanıcı"} ${surname ? surname : ""}`)
}
// Arrow Function'lar aynı bir değişken tanımlar gibi tanımlanır
helloFunc("Efe","Aydemir")



// Ve Eğer fonksiyonumuz tek parametre alacak ise ve tek bir satırlık işlem ise parantezleri kullanmamıza gerek yok
const helloFunc2 = name =>
    console.log(`Merhaba3 ${name ? name : "Kullanıcı"}`)

// Eğer parantezsiz bir şekilde 2 veya daha fazla parametre vermeye çalışırsak hata alırız
helloFunc2("Efe")

