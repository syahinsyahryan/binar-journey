let inputNama = "Ryan Kurniawan Syahrini";
let jumlahKata = inputNama.split(" ");
console.log(jumlahKata);

//masukan kata keberapa yan mau dirubah
let kataOriginalKe = 1;
//masukan mau dirubah jadi kata apa
let diubahJadi = "dirubah";

function perubahKata(kataOriginalKe, diubahJadi) {
  return (jumlahKata[kataOriginalKe - 1] = diubahJadi);
}

perubahKata(kataOriginalKe, diubahJadi);
console.log(jumlahKata);

let ubahKeString = jumlahKata.toString();
console.log(ubahKeString);

let hasilAkhir = ubahKeString.replace(/,/g, " ");
console.log(hasilAkhir);
/*let ubahKeString = jumlahKata.toString();
console.log(ubahKeString);
let koma = ",";
let spasi = " ";
let hasilAkhir = ubahKeString.replaceAll(koma, spasi);
console.log(hasilAkhir);*/
