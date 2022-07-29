let nilai = [93,95,83,17,32,94,17,123]

let BilanganGanjil = 0
let BilanganGenap = 0

//menentukan ganjil genap
for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] % 2 == 0) {
        BilanganGenap++
    } else {
        BilanganGanjil++
    }
}
console.log("Jumlah Bilangan Ganjil : "+BilanganGanjil)
console.log("Jumlah Bilangan Genap : "+BilanganGenap)