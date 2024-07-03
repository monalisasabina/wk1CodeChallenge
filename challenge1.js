// Write a function that prompts the user to input student marks. The input should be between 0 and 100.
//  The output should correspond the correct grade, as shown below: 
//  A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function studentMarks(marks){
    if (marks>79 && marks<=100){
        console.log('A');
   }else if(marks<=79 && marks >=60){
        console.log('B');
   }else if (marks<=59 && marks >= 49 ){
       console.log('C');
   }else if (marks <=48 && marks >=40){
       console.log('D');
   }else if (marks<40){
       console.log('E')
   }
   return marks;
}
studentMarks(79);
studentMarks(60);
studentMarks(59);
studentMarks(49);
studentMarks(40);
studentMarks(10);







