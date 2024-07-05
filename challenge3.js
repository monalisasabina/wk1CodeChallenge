// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.
// Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 




let grossSalary=500000


function netSalary(){
    let result= grossSalary-(nssf() + nhif())
    console.log(result)
}
netSalary()

    
// function payee(salary,tax){
//     if (salary>0 && salary<24000){
//         console.log(tax=0)
    
//     }else if(salary >= 24000 && salary<=500000){ 
//         console.log(tax=(8333*0.25))
//     }
//     return tax
// }
// paye(100000)

function nhif(nhifRate){
    if (grossSalary<1000){
        console.log(nhifRate=0)

    }else if(grossSalary>=1000 && grossSalary<=5999){
        console.log(nhifRate=150)

    }else if(grossSalary>=6000 && grossSalary<=7999){
        console.log(nhifRate=300)

    }else if(grossSalary>=8000 && grossSalary<=11999){
        console.log(nhifRate=400)

    }else if(grossSalary>=12000 && grossSalary<=14999){
        console.log(nhifRate=500)

    }else if(grossSalary>=15000 && grossSalary<=19999){
        console.log(nhifRate=600)

    }else if(grossSalary>=20000 && grossSalary<=24999){
        console.log(nhifRate=750)

    }else if(grossSalary>=25000 && grossSalary<=29999){
        console.log(nhifRate=850)

    }else if(grossSalary>=30000 && grossSalary<=34999){
        console.log(nhifRate=900)

    }else if(grossSalary>=40000 && grossSalary<=49999){
        console.log(nhifRate=1000)

    }else if(grossSalary>=45000 && grossSalary<=49999){
        console.log(nhifRate=1100)

    }else if(grossSalary>=50000 && grossSalary<=59999){
        console.log(nhifRate=1200)

    }else if(grossSalary>=60000 && grossSalary<=69999){
        console.log(nhifRate=1300)

    }else if(grossSalary>=70000 && grossSalary<=79999){
        console.log(nhifRate=1400)

    }else if(grossSalary>=80000 && grossSalary<=89999){
        console.log(nhifRate=1500)

    }else if(grossSalary>=90000 && grossSalary<=99999){
        console.log(nhifRate=1600)

    }else if (grossSalary>=10000){
        console.log(nhifRate=1700)
    }
   return nhifRate
}
nhif();


function nssf(nssfRate){
    if (grossSalary<2999){
        console.log(nssfRate=0)
    }
    if(grossSalary>=3000 && grossSalary<=4499){
        console.log(nssfRate=300)

    }else if(grossSalary>=4500 && grossSalary<=5999){
        console.log(nssfRate=540)

    }else if(grossSalary>=6000 && grossSalary<=9999){
        console.log(nssfRate=540)

    }else if(grossSalary>=10000 && grossSalary<=13999){
        console.log(nssfRate=1200)

    }else if(grossSalary>=14000 && grossSalary<=17999){
        console.log(nssfRate=1680)

    }else if(grossSalary>=18000){
        console.log(nssfRate=2160)
    }
    return nssfRate
}
nssf()


