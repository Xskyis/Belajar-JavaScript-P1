let usia = [30,107,45,60,15,80,73,28]

let muda = 0
let dewasa = 0
let tua = 0
let senja = 0

for (let index = 0; index < usia.length; index++) {
    if (usia[index] >=10 , usia[index] <=30){
        muda++
    }
    else if (usia[index] >=31 , usia[index] <=50) {
        dewasa++
    }
    else if (usia[index] >=51 , usia[index] <=100) { 
        tua++
    }
    else if (usia[index] , usia[index] >=100) {
        senja++
    }
}
document.writeln("Jumlah Usia Muda : "+muda+"<br>")
document.writeln("Jumlah Usia Dewasa : "+dewasa+"<br>")
document.writeln("Jumlah Usia Tua : "+tua+"<br>")
document.writeln("Jumlah Usia Senja : "+senja+"<br>")

