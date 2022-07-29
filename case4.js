let Tiara = { 
    mobil :[ 
        { merk : "Toyota", tahun : "2018", harga : "100000" },
        { merk : "Honda", tahun : "2017", harga : "75000" },
        { merk : "Suzuki", tahun : "2016", harga : "50000" },
    ], 
    lahan : 10000000000,
    kos : 500000000 
}

let Aurel = {   
    mobil : 4000000000,
    lahan : 5000000000,
    kos : 800000000
}

let hartaTiara = Tiara.mobil + Tiara.lahan + Tiara.kos
let PajakTiara = hartaTiara * (20/100)

let hartaAurel = Aurel.mobil + Aurel.lahan + Aurel.kos
let PajakAurel = hartaAurel * (20/100)

let selisih = PajakAurel - PajakTiara

if (selisih < 0) {
    selisih = selisih * (-1)
}
console.log("Selisih Pajak : "+selisih)