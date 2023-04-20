//  //litaral
//  var arr =[1,2,3,4,5]
//  arr[5] = 6
//  arr[11] = 12
//  console.log(arr)
//  console.log(arr[1])
//  console.log(arr[8])
//  console.log(arr.length)
 

//  //constructor

//  var arr1 = Array(1,2,3)
//  console.log(arr1)


//traversing

// for(var i=0;i<arr.length;i++){
    //     // console.log(arr[i])
    //     arr[i]=arr[i] + 3
    // }console.log(arr)
    
    // var sum = 0
    // for(var i=0;i<arr.length;i++){
        //     sum += arr[i]
        // }
        // console.log(sum)
        
        
        // odd & even sum
        // for(var i=0;i<arr.length;i++){
            //     if(arr[i] %2 == 0 || arr[i] %2 == 1){
                //         sum += arr[i]
                //     } 
                
                // }console.log(sum)
                
 //insert and replace            
// var arr = [3,6,9,12,15]
// arr.push(18)
// arr.unshift(0)
// arr.splice(5,0,18)
//reomve
// arr.pop(0)
// arr.shift()
// arr.splice();
// console.log(arr)

var  arr = [ 1,2,3,4,5,6,7,8,9,10]
var find = 12
var isFound = false
for (var i=0;i<arr.length;i++){
    if(arr[i] == find){
        console.log(' data found at index ' + i)
        isFound =true
        break
    }

}
if(!isFound){
    console.log(' Not found in any index ')
}
