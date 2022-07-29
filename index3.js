let berat = [90,31,55,70,80,40,30]

let JumlahDiatasRata = 0
var ratarata 

ratarata = berat.reduce((a,b) => a+b)/berat.length

for (let index = 0; index < berat.length; index++) {
    if (berat[index] > ratarata) {
        JumlahDiatasRata++
    }
}
console.log("Jumlah Yang Di Atas Rata² : "+JumlahDiatasRata);
console.log("Rata² : "+ratarata);

