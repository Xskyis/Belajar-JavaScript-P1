//Menghitung BMI dari data anak syahril di bawah
var AnakSyahril = [ 
    {nama : "John Cena" , tinggi : 1.8 , berat : 80},
    {nama : "Bobby Lesley" , tinggi : 1.6 , berat : 90},
    {nama : "Undertaker" , tinggi : 1.76 , berat : 100},
    {nama : "Khali" , tinggi : 2 , berat : 120},
    {nama : "Rey Mysterio" , tinggi : 1.4 , berat : 30},
]

//hitung bmi dari setiap anak syahril
for (let index = 0; index < AnakSyahril.length; index++) {
    let bmi = AnakSyahril[index].berat / (AnakSyahril[index].tinggi * AnakSyahril[index].tinggi)
        if (bmi < 18.5) {
            console.log(AnakSyahril[index].nama + " (UnderWieght) " + " Bmi : " + bmi)
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            console.log(AnakSyahril[index].nama + " (Normal Weight) " + " Bmi : " + bmi)
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            console.log(AnakSyahril[index].nama + " (OverWeight) " + " Bmi : " + bmi)
        }
        else if (bmi >= 30) {
            console.log(AnakSyahril[index].nama + " (Obese) " + " Bmi : " + bmi)
        }
}
