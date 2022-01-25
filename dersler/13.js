// ternary operatör ile short if kullanımı

// eger kullanıcı adı varsa yazdır yoksa "kulanıcı biligisi bulunamadı" yaz

let username = prompt("Adınız: ")

let info = username.length > 0 ?
`<center><h1>Hoşgeldin ${username}</h1></center>` : `<center><h1>Kullanıcı Bilgisi Bulunamadı</h1></center>`

document.write(info)

// soru işaretine kadar olan kısım eğer yani if bölümü ikinokta üstüste ise değilse yani else bölümü b kodun açıklaması şu şekilde eğer username'in uzunluğu 0 dan büyük ise soru işaretinden sonraki eylemi değilse ikinoktadan sonrakini yap
