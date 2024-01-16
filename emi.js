var loanamount=200000;
var interestRate=9;
var tenure=20;

var P=loanamount;
var R=interestRate/12;
var i=R/100;
var n=tenure*12;

var onePlusi=(1+i)**n
var Emi=(P*i*onePlusi)/(onePlusi-1)
console.log(Math.round(Emi));


