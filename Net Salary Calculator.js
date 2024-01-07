function calculateSalary(){
var basicSalary = parseFloat(document.getElementById('basicSalary').value) || 0;
var benefits = parseFloat(document.getElementById('benefits').value) || 0;

var grossSalary = basicSalary + benefits;

let taxRate;
if (grossSalary <= 24000) {
  taxRate = 10.0;
} else if (grossSalary <= 32333) {
  taxRate = 25.0;
} else if (grossSalary <= 500000) {
  taxRate = 30.0;
} else if (grossSalary <= 800000) {
  taxRate = 32.5;
} else {
  taxRate = 35.0;
}

const taxDeductions = grossSalary * (taxRate / 100);

let nhifRate;
if (grossSalary <= 5999) {
  nhifRate = 150;
} else if (grossSalary <= 7999) {
  nhifRate = 300;
} else if (grossSalary <= 11999) {
  nhifRate = 400;
}
else if(grossSalary<= 14999){
    nhifRate=500;
}
else if(grossSalary<= 19999){
    nhifRate=600;
}
else if(grossSalary<= 24999){
    nhifRate=750;
}
else if(grossSalary<= 29999){
    nhifRate=850;
}
else if(grossSalary<=34999){
    nhifRate=900;
}
else if(grossSalary<=39999){
    nhifRate=950;
}
else if(grossSalary<=44999){
    nhifRate=1000;
}
else if(grossSalary<=49999){
    nhifRate=1100;
}
else if(grossSalary<=59999){
    nhifRate=1200;
}
else if(grossSalary<=69999){
    nhifRate=1300;
}
else if(grossSalary<=79999){
    nhifRate=1400;
}
else if(grossSalary<=89999){
    nhifRate=1500;
}
else if(grossSalary<=99999){
    nhifRate=1600;
}
else{
    nhifRate=1700;
}

let nssfRate;
nssfRate=(6/100)* basicSalary;


totalDeductions(basicSalary, benefits, grossSalary, taxDeductions, nhifRate, nssfRate);
}

function totalDeductions(basicSalary, benefits, grossSalary, taxDeductions, nhifRate, nssfRate) {
  const netSalary = grossSalary - taxDeductions - nhifRate - nssfRate;
  alert(`Basic Salary: ${basicSalary}\nBenefits: ${benefits}\nGross Salary: ${grossSalary}\nTax Deductions: ${taxDeductions}\nNHIF Rate: ${nhifRate}\nNet Salary: ${netSalary}`);
}
