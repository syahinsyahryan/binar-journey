// //Git status untuk cek status git nya
// git clone url = buat nge clone dari github
// code namafolder buat masuk ke folder yg mau kita edit

// jumlah sama dengan
// = > untuk nge asign sesuatu
// == > perbandingan sama atau nggak
// ===> perbandingan identik harus sampe tipe datanya juga

// “and”  && 1 salah = salah
// “or”   || 1 benar = benar
// kasus di dunia nyata untuk mastiin apakah data yg di input user lengkap

// truthy dan falsy memaksa nilai menjadi boolean

let nama = "Ryan kurniawan";
console.log(nama);

nama = "kucing";
console.log(nama);

let x = true || (true && false) || false;
console.log(x);

if (false) {
  console.log("ini if");
} else if (true) {
  console.log("ini else if");
} else {
  console.log("ini else");
}
// conditional, jadi ngecek kondisi dari atas ke bawah. kalo if bener dia ngejalanin yg di dalem if
// kalo if salah dia ke if else sampe nemu yang "True". kalo ga nemu yg true ke "else"

switch ("2") {
  case "1":
    console.log(1);
  case "3":
    console.log(3);
  case "2":
    console.log(2);
    break;
  default:
    console.log("ini default");
}

// function
let binatang = "kucing";
function halo(binatang) {
  console.log(`halo nama saya ${nama}`);
}
halo(binatang);

// BLOCK SCOPE & GLOBAL SCOPE
// var is a global scope because it can be accessed outside of the scope. but it can cause bug,
// so we need to use let to minimize bug

// data type primitive string, number and boolean
let iniString = "string";
let iniNumber = 2;
let isBoolean = true; // boolean use 'is' at the front to make us easier to know it is boolean data

// non-primitive ada Array dan Object
const iniArray = ["kucing", "anjing"];
//built in function di array ada filter, maping untuk merubah nilai, 
const iniObject = {
  nama: "asep",
  jenisKelamin: "perempuan",
  umur: [22, 23, 24],
};
const iniObject1 = {
  nama: "apes",
  jenisKelamin: "laki-laki",
  umur: [22, 23, 24],
};
const iniObject2 = {
  nama: "sepa",
  jenisKelamin: "perempuan",
  umur: [22, 23, 24],
};

console.log(iniObject.umur[2]); //to call the second index in umur array from ini Object object

// function declaration
function sayHello(){

}

// variable
const say