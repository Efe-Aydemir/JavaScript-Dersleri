// Document Object Model
/*
W3C(World Wide Web Consortium)'e göre Document Object Model, programların ve komut dosyalarının bir belgenin içeriğine, yapısına ve stiline dinamik olarak erişmesine ve güncellemesine izin veren bir platform ve dilden bağımsız bir arayüzdür.

Bir HTML belgesini iç içe geçmiş kutular olarak hayal edebilirsiniz. <body> ve </body> gibi çevreleyen etiketler, sırayla başka etiketler veya metinler içeren diğer etiketleri kapsar.

Tarayıcının belgeyi temsil etmek için kullandığı veri yapısı bu şekli izler. Her kutu için, hangi HTML etiketini temsil ettiği ve hangi kutuları ve metni içerdiği gibi şeyleri bulmak için etkileşime girebileceğimiz bir nesne vardır. Bu temsil, Document Object Model veya kısaca DOM olarak adlandırılır.
*/

/*
DOM’da HTML ile hazırladığınız sayfa, document; bu document'in içine yerleştirdiğiniz her türlü öğe ise element olarak adlandırılır. DOM'da nesnelerin birer element olarak kullanılabilmesi için hiyerarşik bir düzen izlenerek çağrılmaları gerekir. HTML’deki her bir elamanın birbiri ile hiyerarşik bir yapı oluşturması ile oluşur. DOM bir ağaç dizini gibi bütün dokümanları birbirine bağlar.
*/

// ve js'de dökümanımız hakkında birçok şey öğrenebilecek iken ben birkaç şeyin üzerinde duracağım

// Js'dosyamızı import ettiğimiz .html dosyamızın URL adresini öğrenelim örneğin
console.log(document.URL)
// ÇIKTI: http://127.0.0.1:5500/index.html
// Daha ayrıntılı istersek çıktımızı
console.log(document.location)

// Dosya yolunu öğrenmek içinde 
console.log(document.location.pathname)

// Hostname için
console.log(document.location.hostname)

// vb şekilde location özelliğimizin özelliklerine erişebilmekteyiz

// Yada dökümanımızın body elementine ulaşalım
console.log(document.body)
// burada çıktımız body elementi ve içindekiler olacaktır

// bunlara erişip işlemde yapmamız mümkün örneğin body etiketimize style verelim arkaplan rengini değiştirelim
document.body.style.backgroundColor = "aqua"

let title = document.getElementById('title')
title.innerHTML = "<h2>Değiştirilmiş Metin</h2>"

let link = document.querySelector("ul#list>li>a")
console.log(link.innerHTML)

link.innerHTML = "Link Bilgisi Değişti"
console.log(link.innerHTML)

link.classList.add('classLink')
console.log(link.classList)