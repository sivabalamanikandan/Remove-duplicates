var input=[1,2,3,4,5,1,6,2,4,1,3]

function removeduplicates(input){
 return input.filter((data,index)=>
  (input.indexOf(data)=== index)

)


}



var output =removeduplicates(input)
console.log(output)