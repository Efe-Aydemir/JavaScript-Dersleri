// Break ve Continue İŞlemleri

const isimler = [
    'Efe','Mahmut','Mehmet','Sevda','Osman','Melek'
]

let index = 0
// Örneğin sevda gelene kadar devam etsin sevda gelince döngü bitsin
for (; index < isimler.length; index++) {

    console.log(`Bulunamadı
    istenen: "Sevda"
    gelen: ${isimler[index]}`)
    console.log()    

    if (isimler[index] == 'Sevda') {
        console.log('Bulundu')
        break;
    }
}

// Continue ile kısa örnek bulamadın araştırınız ödev olarak
