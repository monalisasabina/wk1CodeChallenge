// Write a program that takes the speed of a car as input e.g 80. 
// If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), 
// it should give the driver one demerit point and print the total number of demerit points.

//    > For example, if the speed is 80, it should print: “Points: 2”. 
//    If the driver gets more than 12 points, the function should print: “License suspended”.



function speedInput (carSpeed,point=1){
if(carSpeed<=70){
    console.log('OK')
    
}
else if(carSpeed>=75 && carSpeed<80){
    console.log(`Points:${point}`)

}else if(carSpeed>=80 && carSpeed<85){
    console.log(`Points:${point + 1}`)

}else if(carSpeed>=85 && carSpeed<90){
    console.log(`Points:${point + 2}`)

}else if(carSpeed>=90 && carSpeed<95){
    console.log(`Points:${point + 3}`)

}else if(carSpeed>=95 && carSpeed<100){
    console.log(`Points:${point + 4}`)

}else if(carSpeed>=100 && carSpeed<105){
    console.log(`Points:${point + 5}`)
   
}else if(carSpeed>=105 && carSpeed<110){
    console.log(`Points:${point + 6}`)

}else if(carSpeed>=110 && carSpeed<115){
    console.log(`Points:${point + 7}`)

}else if(carSpeed>=115 && carSpeed<120){
    console.log(`Points:${point + 8}`)

}else if(carSpeed>=120 && carSpeed<125){
    console.log(`Points:${point + 9}`)

}else if(carSpeed>=125 && carSpeed<130){
    console.log(`Points:${point + 10}`)

}else if(carSpeed>=130 && carSpeed<135){
    console.log(`Points:${point + 11}.License suspended`)
  
}else if(carSpeed>=135){
    console.log(`Points above 12. License suspended`)
}    
}
speedInput(70)
speedInput(80)
speedInput(90)
speedInput(100)
speedInput(110)
speedInput(120)
speedInput(130)
speedInput(150)