
function romanNumeralsEncoder (romanNum){
    if(typeof romanNum !=='string' || !romanNum.trim()) return 'Parameter must be roman numeral string'
    
     const romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
     const numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
     
     let num = 0;
     let remainder = romanNum
     
     for(let i=0;i<romans.length;i++){
         while(remainder.startsWith(romans[i])){
             num += numbers[i];
             remainder = remainder.slice(romans[i].length)
         }
     }
     
     return num
}

 //TEST CASES
 console.log(romanNumeralsEncoder('M'))
 console.log(romanNumeralsEncoder('MMXXVI'))
 console.log(romanNumeralsEncoder('MMIV'))
 console.log(romanNumeralsEncoder("MCMXCIX"))
 