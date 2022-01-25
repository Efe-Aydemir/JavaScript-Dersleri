// Koşullar ile çalışmak


// eğer Kullanıcı bilgisi varsa ekrana ismini yazdır

let userName = prompt("Adınız: ")

if (userName.length > 0) { 
     // eğer username'in uzunluğu 0'dan büyükse bu bloğun içine girer
     document.write(`<h1>Hoşgeldin ${userName}</h1>`)
     
} else { 
     // uzunluğu 0'dan büyük değilse buna girer
     document.write('<h1>Malesef Kutucuk Boş Bırakılamaz</h1>')
}