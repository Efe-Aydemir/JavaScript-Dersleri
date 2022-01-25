// Çoklu Koşullar ile çalışmak

let username = prompt("Kullanıcı Adınız: ")
let age = prompt("Yaşınız: ")

if (username && age >= 18) {
     document.write(`<h1>Ehliyet alabilirsin ${username}</h1>`)
} else if (username) {
     document.write(`<h1>Malesef ${username} yaş bilgisi zorunlu</h1>`)
} else if (age) {
     document.write(`<h1>Malesef  isim bilgisi zorunlu</h1>`)
} else {
     document.write(`<h1>Malesef Alanları Doldurmak zorunlu</h1>`)
}

// Burada else if yardımı ile birden çok sorgu yazabildik yani 
// eğer username varsa ve yaşda varsa ve 18'den büyükse kayıt et
// sadece username varsa uyar
// sadece yaş varsa uyar
// ikiside yoksa kayıt olamaz