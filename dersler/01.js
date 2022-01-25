// ********* let ve const ile Degişken tanımlama *********


// *** var ile değişken tanımlama ***
var personName = "Efe  | Var ile"
// *** var değişken tanımlama yöntemi artık yeni modern yapı ile kullanılmamaya başlandı onun yerini let-const aldı 
console.log(personName)


// *** let ile değişkeni boş tanımlamak ***
let personName2;
console.log(personName2 + " | Let ile boş")


// *** let ile değişkene bilgi atamak ***
personName2 = "Efe2  | Let ile dolu"
console.log(personName2)


// *** let ile değişkene bilgi atayarak tanımlamak ***
let personName3 = "Efe3  | let ile bilgili atama"
console.log(personName3)


// *** değişken ataması yapmadan önce kullanmaya çalışmak ***
// console.log(personName4)
// let personnName4 = "Efe4"

// *** const ile değişkeni boş tanımlamaya çalışmak ***
// const degisemez; // const değiştirilemeyen bir bilgi o yüzden tanımlama yapıp sonradan içini dolduramayız
 // o an veriyi vermemiz gerekli 
// console.log(degisemez)

// *** const ile değişken tanımlamak ***
const degisemez = "Değişemez Bilgi";
console.log(degisemez)