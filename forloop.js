
// for( var i = 0;i<100; i++){
//     console.log(i  + "TUHIN")
// }

// for( var i = 0;i<100; i++){
//     if(i %2 == 1){
//     console.log(i)
//     }
// }
var sum = 0;
for (var i =1; i<=100;i++){
    if(i %2 == 0){
    console.log(sum + '+' + 'i'+ '=' + (sum+i))
    sum += i
    }
}
console.log('result=' + sum)