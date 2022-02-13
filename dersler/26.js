// Array filter kullanimi 


// 5 Harften fazla olanlar ??
const products = ["Pc","Tele","Moue","Klvye","Kulklık","Mouse pad","Mikrofon"]

const newProducts = products.filter( (ürün,index) => {
    if ( ürün.length >= 5) { 
        console.log(`${index}. indexdeki ürünün harf sayısı ${ürün.length}`)
    }
} )

// Aktif Kullancılar 
const users = [
    {
        name : "Efe",
        isActive: false
    },
    {
        name : "Mehmet",
        isActive: true
    },
    {
        name : "Melek",
        isActive: true
    },
    {
        name : "Necati",
        isActive: false
    }
]

const newUsers = users.filter( (user) => {
    if (user.isActive == true) {
        console.log(`${user.name} adlı kullanıcı online`)
    } else {
        console.log(`${user.name} adlı kullanıcı offline`)
    }
})