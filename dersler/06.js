// String Veri Türü İşlemleri

let email = "monjor@gmail.com"
let firstname = "monjor"
let lastname = "KOYUN"

// string karakter sayısı -> length:
console.log(`${email}'in uzunluğu ${email.length} Karakter`)


// İlk karakteri bylmak -> [0]:
console.log(`${email}'in ilk karakteri ${email[0]}`)


// Büyük Harf / Küçük Harf:
firstname = firstname.toUpperCase()
console.log(`Hoşgeldin ${firstname}`)

lastname = lastname.toLowerCase()
console.log(`Hoşgeldin ${lastname}`)

// String içinde istediğimiz bilgiyi aramak ve yerini bulmak -> search:
console.log(`
${email}'in içindeki "@" karakteri
${email.search("@")}.index'te
`) // eğer search'e olmayan birşey girersem -1 değeri döner ama eğer olan bir karakter varsa sürekli olarak 0 ve üstünde değer döner

// Belli bir yere kadar olanı alma -> slice: (domain bilgisi)
//! Yukarıda "@" işaretinin 15.indexte olduğunu öğrendik ozaman domain bilgisini alabilirim

console.log(`
${email} Adresinin 
domain adresi ${email.slice(6)}
`)
// yani 15.karakter ve sonrasını al

// sadece gmail bilgisini alsak ama kaçıncı indexte . olduğunu bilmeden onuda şöyle yapıcaz
let dom = email.slice(6)

console.log(`
${email} adresinin 
domain adresi(.com olmadan) ${dom.slice(0, dom.indexOf('.'))}
`)
// sliece ile başlangıç ve bitiş noktası verdik başlangıç 0 yani @ bitiş ise dom'un indexOf'u yani . gördüğü indexine kadar


// bilgiyi değiştir -> replace:
// örneğin monjor@gmail.com yerine monjor@email.com yapalım

email = email.replace('gmail.com','email.com') // ilk arancak değer ve 2.ise değiştirilecek değer
console.log(`Değiştirilmiş mail: ${email}`)

// İstediğim bilgi var mı? -> includes:
let inc = email.includes('@')
if (inc == true) {
    console.log(`${email} içerisinde "@" karakteri var`)
} else {
    console.log(`${email} içerisinde "@" karakteri yok`)
}
// Görüldüğü üzere includes bize var ise true yok ise false döner

// istediğim bilgi ile başladı mı? Bitti mi? -> startsWith, endsWith:

// örneğin benim email'im firstname ilemi başladı
// console.log(email.startsWith(firstname)) // bu bize false döner çünkü firstname'mimiz hatırlarsınız uppercase ile büyük yaptık küçültelim ve tekrar deneyeliö
console.log(email.startsWith(firstname.toLowerCase())) // işte bu true döndü

// örenğin benim email'im .com ilemi bitti
console.log(email.endsWith('.com')) // buda true döndü

// İlk harfleri büyük alma
let first = "mehmet"
let last = "dursun"

let fullname = `${first[0].toUpperCase()}${first.slice(1)}  ${last[0].toUpperCase()}${last.slice(1)}`


console.log(fullname)