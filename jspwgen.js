"use strict";
function koremutakePwGen () {
/* 
Password generation using koremutake: http://shorl.com/koremutake
*/
var i;
var pwd = "";
var syllableList = [ "ba", "be", "bi", "bo", "bu", "by", "da", "de", "di", 
"do", "du", "dy", "fa", "fe", "fi", "fo", "fu", "fy", "ga", "ge",
"gi", "go", "gu", "gy", "ha", "he", "hi", "ho", "hu", "hy", "ja", 
"je", "ji", "jo", "ju", "jy", "ka", "ke", "ki", "ko", "ku", "ky", 
"la", "le", "li", "lo", "lu", "ly", "ma", "me", "mi", "mo", "mu", 
"my", "na", "ne", "ni", "no", "nu", "ny", "pa", "pe", "pi", "po", 
"pu", "py", "ra", "re", "ri", "ro", "ru", "ry", "sa", "se", "si", 
"so", "su", "sy", "ta", "te", "ti", "to", "tu", "ty", "va", "ve", 
"vi", "vo", "vu", "vy", "bra", "bre", "bri", "bro", "bru", "bry", 
"dra", "dre", "dri", "dro", "dru", "dry", "fra", "fre", "fri", 
"fro", "fru", "fry", "gra", "gre", "gri", "gro", "gru", "gry", 
"pra", "pre", "pri", "pro", "pru", "pry", "sta", "ste", "sti", 
"sto", "stu", "sty", "tra", "tre" ];

for (i=0; i <= 7 ; i++) {
pwd += syllableList[Math.floor(Math.random()*127)];
}
return pwd;
}

function classicPwGen () {
/*
Password generation using classic algorithm
*/
var i;
var pwd = "";

for (i=0; i <= 8; i++) {

}
return "Jdm8J42%";
}

function dicePwGen () {
/*
Password generation using diceware: http://world.std.com/~reinhold/diceware.html
*/
return "cleft cam synod lacy yr wok";
}

var pwGenAlgs = [
function () { document.write("<div style=\"color: red;\">" + koremutakePwGen() + "</div>");  },
function () { document.write("<div style=\"color: green;\">" + classicPwGen() + "</div>") },
function () { document.write("<div style=\"color: blue;\">" + dicePwGen() + "</div>") }
];
