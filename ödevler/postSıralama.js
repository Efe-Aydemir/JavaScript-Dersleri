const posts = [
    {id : 1, name : "post 1", desc : "birinci post"},
    {id : 2, name : "post 2", desc : "ikinci post"},
    {id : 3, name : "post 3", desc : "üçüncü post"},
    {id : 4, name : "post 4", desc : "dördüncü post"},
    {id : 5, name : "post 5", desc : "beşinci post"},
]

function sıralama(postArray) {
    return new Promise( (resolve, reject) => {
        if(postArray) {
            let posts = postArray.map( (post) => post )
            resolve(posts)
        } else {
            reject('Sıralanacak Öğe Bulunamadı - Başarısız')
        }
    })
}

sıralama(posts)
.then(result => console.log(result))
.catch(error => console.log(error))


let newPost = {
    id : 11,
    name : "rastgele post id",
    desc : "yeni açıklama"
}

async function eklePost() {
    await posts.push(newPost)
    sıralama(posts)
    .then(result => console.log(result))
    .catch(error => console.log(error))
}

eklePost()