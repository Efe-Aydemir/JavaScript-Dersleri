// FOr dongüsü

// For ([başlangıçAtaması], [koşul], [arttırım]) {kodlar}


let users = ["Efe","Mehmet","Esma"]

// users içindeki isimleri birer birer dönerek
for (let index = 0; index < users.length; index++) { // index = 0 ve index users'ın uzunluğundan küçükse indexi arttır
    let li = document.createElement('li') // her seferinde yeni bir li tagı oluştur
    let ul = document.querySelector('#isimler') // ul'yi seç
    li.innerHTML = users[index] // li'nin içine usersın o anki inde sayısı yaz
    ul.prepend(li) // ul ye gönder
}