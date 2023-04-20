// var isRunning = true
// while (isRunning){
//     var rand = Math.floor(Math.random() * 10 + 1)
//     if(rand == 9){
//         console.log ('WINNER')
//         isRunning = false
//     }else{
//         console.log(' You Have Got '  +  rand )
//     }
// }

// var isRunning = false
//  while (isRunning){
//     console.log('Running')
//  }
//  do{
//     console.log('Running')
//  }while(isRunning)
//nested loop

var n = 5
for(var i=1;i<=n;i++){
    var result = ''
    for(var j=1; j <= i; j++){
        result += j + ' '
    }
    console.log(result)
}

var n = 5
for(var i=1;i<=n; i++){
    var result =''
    for(var j =1;j<=n;j++){
        result +=  '* '
    }
    console.log(result)
    
}
