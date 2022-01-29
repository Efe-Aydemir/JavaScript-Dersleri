// Formlarla Çalışmak

// Form Submit:

const formDOM = document.querySelector('#userform')
const isim = document.querySelector('#isim')
const soyisim = document.querySelector('#soyisim')

formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) { // burada eventımızı alıyoruz yani submiti 
    event.preventDefault() // ve preventDefault ile ben söyleyene kadar hiçbişey yapma diyoruz binevi 
    console.log(isim.value ? isim.value : "Boş")
    console.log(soyisim.value ? soyisim.value : "Boş")
    localStorage.setItem('name',isim.value)
    localStorage.setItem('surname',soyisim.value)
}

// onSubmit: Form submit olduğu anda ne yapacağını söyleyeceğimiz event'tir.
// onChange: Form'un içindeki form elementlerinin(input) value'su her değiştiğinde bu değişen value'yu bizim her defasında elde etmemize olanak sağlayan eventtir.
