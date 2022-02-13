// Array map kullanımı

const users = ["Efe","Mehmet","Osman","Nisa"]
console.log(users)


// userName içinde orjinal isim kalsın
// shortName içinde ilk harf büyük (A.)
// newName içinde ilk harf büyük olsun


const newUsers = users.map( (user) => user.toLowerCase())
console.log(newUsers)

