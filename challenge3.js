// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.
// Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 




let grossSalary=54500



function payee(tax) {
    if (grossSalary>0 && grossSalary<24000){
        return tax=0
    
    }else if(grossSalary >= 24000 && grossSalary<32333){ 
        return tax=2400 + (grossSalary-24000)*0.25

    }else if(grossSalary >=32333 && grossSalary<500000){
        return tax=2400 + (8333*0.25) + (grossSalary-32333)*0.30
    
    }else if(grossSalary>= 500000 && grossSalary<800000){
        return tax= 2400 + (8333*0.25) + (300000*0.325) +(grossSalary-500000)
      
    }else if (grossSalary>=800000){
        return tax= 2400 + (8333*0.25) + (300000*0.325) +(800000*0.35)+ (grossSalary-800000)

    }
    
}

console.log(`The PAYEE rate for ${grossSalary} is: ${payee()}`)



function nssf(nssfRate){
    
    if (grossSalary<2999){
        return nssfRate=0
    }
    if(grossSalary>=3000 && grossSalary<=4499){
        return nssfRate=300

    }else if(grossSalary>=4500 && grossSalary<=5999){
        return nssfRate=540

    }else if(grossSalary>=6000 && grossSalary<=9999){
        return nssfRate=540

    }else if(grossSalary>=10000 && grossSalary<=13999){
        return nssfRate=1200

    }else if(grossSalary>=14000 && grossSalary<=17999){
        return nssfRate=1680

    }else if(grossSalary>=18000){
        return nssfRate=2160
    }
    return nssfRate
} 
console.log(`The NSSF rate for ${grossSalary} is: ${nssf()}`)


    

function nhif(nhifRate){
    if (grossSalary<1000){
        return nhifRate=0

    }else if(grossSalary>=1000 && grossSalary<=5999){
        return nhifRate=150

    }else if(grossSalary>=6000 && grossSalary<=7999){
        return nhifRate=300

    }else if(grossSalary>=8000 && grossSalary<=11999){
        return nhifRate=400

    }else if(grossSalary>=12000 && grossSalary<=14999){
        return nhifRate=500

    }else if(grossSalary>=15000 && grossSalary<=19999){
        return nhifRate=600

    }else if(grossSalary>=20000 && grossSalary<=24999){
        return nhifRate=750

    }else if(grossSalary>=25000 && grossSalary<=29999){
        return nhifRate=850

    }else if(grossSalary>=30000 && grossSalary<=34999){
        return nhifRate=900

    }else if(grossSalary>=40000 && grossSalary<=49999){
        return nhifRate=1000

    }else if(grossSalary>=45000 && grossSalary<=49999){
        return nhifRate=1100

    }else if(grossSalary>=50000 && grossSalary<=59999){
        return nhifRate=1200

    }else if(grossSalary>=60000 && grossSalary<=69999){
        return nhifRate=1300

    }else if(grossSalary>=70000 && grossSalary<=79999){
        return nhifRate=1400

    }else if(grossSalary>=80000 && grossSalary<=89999){
        return nhifRate=1500

    }else if(grossSalary>=90000 && grossSalary<=99999){
    return nhifRate=1600

    }else if (grossSalary>=10000){
        return nhifRate=1700
    }
   return nhifRate
}
console.log(`The NHIF rate for ${grossSalary} is: ${nhif()}`)

function netSalary(){
    return grossSalary -(payee() + nssf() + nhif())
}

console.log(`Your Net salary is ${netSalary()}`)