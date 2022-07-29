//case 6
let Nilaisiswa = [  
        {nama : "Kaizo" , tugas : 80 , uts : 70 , uas : 98},
        {nama : "Yaya" , tugas : 90 , uts : 60 , uas : 50},
        {nama : "Ciciko" , tugas : 70 , uts : 70 , uas : 85},
    ]

let nilaikaizo = {  
    tugas : Nilaisiswa[0].tugas * (30/100),
    uts : Nilaisiswa[0].uts * (40/100),
    uas : Nilaisiswa[0].uas * (30/100),
}

let nilaiyaya = {
    tugas : Nilaisiswa[1].tugas * (30/100),
    uts : Nilaisiswa[1].uts * (40/100),
    uas : Nilaisiswa[1].uas * (30/100),
}

let nilaiciciko = {
    tugas : Nilaisiswa[2].tugas * (30/100),
    uts : Nilaisiswa[2].uts * (40/100),
    uas : Nilaisiswa[2].uas * (30/100),
}

let nilaiakhirkaizo = nilaikaizo.tugas + nilaikaizo.uts + nilaikaizo.uas
let nilaiakhiryaya = nilaiyaya.tugas + nilaiyaya.uts + nilaiyaya.uas
let nilaiakhirciciko = nilaiciciko.tugas + nilaiciciko.uts + nilaiciciko.uas

console.log("Nilai Akhir Kaizo : "+nilaiakhirkaizo)
console.log("Nilai Akhir Yaya : "+nilaiakhiryaya)
console.log("Nilai Akhir Ciciko : "+nilaiakhirciciko)


