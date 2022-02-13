// Object içinde metot nasıl ekleriz

let user1 = {
    firstname : "Efe",
    lastname : "Aydemir",
    score : [1, 2, 3, 4, 5],
    isActive : true,
    shortName : function() {return `${this.firstname[0].toUpperCase()}. ${this.lastname}`}
}

console.log(user1.shortName())