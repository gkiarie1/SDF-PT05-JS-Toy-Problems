function grossPay() {
  let basicSalary = parseFloat(document.getElementById('basicSalary').value) || 0;
  let benefits = parseFloat(document.getElementById('benefits').value) || 0;

  return basicSalary + benefits;
}

function taxDeductions(basicSalary) {
  let taxRate;
  if (basicSalary <= 24000) {
    taxRate = 10.0;
  } else if (basicSalary <= 32333) {
    taxRate = 25.0;
  } else if (basicSalary <= 500000) {
    taxRate = 30.0;
  } else if (basicSalary <= 800000) {
    taxRate = 32.5;
  } else {
    taxRate = 35.0;
  }

  const taxDeductions = basicSalary * (taxRate / 100);
  return taxDeductions;
}
  
function calculateNHIFRate(grossSalary) {
  let nhifRate = 0;
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
    return nhifRate;
  }
function calculateNSSFRate(basicSalary) {
  
  const nssfRate = (6 / 100) * basicSalary;
  return nssfRate;
}
function showNotification(message) {
  const notificationBar = document.getElementById('notificationBar');
  notificationBar.textContent = message;
  notificationBar.style.display = 'block';

  setTimeout(() => {
      notificationBar.style.display = 'none';
    }, 10000); 
}
function netPay() {
  const basicSalary = parseFloat(document.getElementById('basicSalary').value) || 0;
  const benefits = parseFloat(document.getElementById('benefits').value) || 0;

  const grossSalary = grossPay();
  const deductions = taxDeductions(grossSalary);
  const nhifRate = calculateNHIFRate(grossSalary);
  const nssfRate = calculateNSSFRate(basicSalary);
  let netSalary = grossSalary - deductions-nhifRate-nssfRate;

  netSalary = Math.max(netSalary, 0);

  const message=`Basic Salary: ${basicSalary}\nBenefits: ${benefits}\nGross Salary: ${grossSalary}\nTax Deductions: ${deductions}\nNHIF: ${nhifRate}\nNSSF: ${nssfRate}\nNet Salary: ${netSalary}`;
showNotification(message)
}
