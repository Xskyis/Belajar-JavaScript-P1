//Case 5 Array Di dalam object
let belanjaan = [   
        {nama : "Beras Muntari", harga : 10000 , jumlah : 100},
        {nama : "Minyak FreshCare", harga : 15000 , jumlah : 5},
        {nama : "Gula", harga : 20000 , jumlah : 20},
    ]

    let totalBelanjaan = 0

    for (let index = 0; index < belanjaan.length; index++) {
        totalBelanjaan += belanjaan[index].harga * belanjaan[index].jumlah
    }
    console.log("Total Belanjaan : "+totalBelanjaan)