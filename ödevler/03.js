const ulDOM = document.querySelector('#todo')
const ekleBTN = document.querySelector('#ekleme')
const cikarBTN = document.querySelector('#cikarma')
const input = document.querySelector('#txtİnt')


ekleBTN.addEventListener('click', () => {
    let int = input.value
    if (int.length > 0) {
        let numGör = 0
        window.localStorage.setItem(numGör+=1,input.value)
        let liDOm = document.createElement('li')
        liDOm.innerHTML = window.localStorage.getItem(numGör)
        ulDOM.prepend(liDOm)
        input.value = ""
    } else {
        alert('Lütfen Bir Görev Giriniz')
    }

})

cikarBTN.addEventListener('click', () => {
    let sonel = document.querySelector('ul#todo>li')
    if(sonel) {
        sonel.remove()
        window.localStorage.removeItem(sonel.localName)
    } else {
        alert('Görev Kalmadı')
    }
})

