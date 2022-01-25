// Template Literals Kullanımı

//! Elimizde bir mail adresi var fakat oluşmamış biçimde şuan
let username = "monjor"
const domain = "gmail.com"

// let email = username + "@" + domain
// console.log(`Hoşgeldin ${username} Sitemize Hoşgeldin. Email Adresin: ${email}`)
// Fark ettiyseniz burada terstırnak kullandık ve ters tırnakların içinde dolarişareti ve süslü parantez attık ${}
// bunun içine dışardan aldığımız değişkenleri yazarak beraber içinde kullanabildik ama bunu tek tırnak yada çift tırnakta yapamayız ayrıca 
// bunun içerisinde toplama çıkarma fonksiyon kullanımı vb. işelmlerede yapabilmekteyiz şimdi email değişkenini bu şekilde tanımlayalım

let email = `${username}@${domain}`

console.log(`Hoşgeldin ${username}.
Sitemize Hoşgeldin.
Email Adresin: ${email}
Email Adresinizin Uzunluğu: ${email.length} Karakter
Bakiyeniz: ${(5 * 5) * 4} TL
Şuanki Saat: ${new Date().getHours()}
`)

// ayrıca bunun içerisinde alt satırlarada inebilmekteyiz normalde böyle birşey yapmamız mümkün değil ama terstırnaklar ile mümkün ve alt satıra indiğimizde satırda aşşağıya iner ve console'a yazdıklarımız alt alta iner
