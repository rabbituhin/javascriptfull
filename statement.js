// //breakState
// for (var i =1; i<10; i++){
//     if(i % 5 == 0){
//         break
//     }else{
//         console.log(i)
//     }
// }

// //continue

// for (var i =1; i<10; i++){
//     if(i ==3 || i == 6){
//         continue
//     }else{
//         console.log(i)
//     }
// }

// infinityloop

for(; ;){
        var rand = Math.floor(Math.random() * 10 + 1)
        if(rand == 9){
            console.log ('WINNER')
            break
            
        }else{
            console.log(' You Have Got '  +  rand )
        }

}