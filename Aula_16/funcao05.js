 // RECURSIVIDADE  
 function fatorial(n) {
     if (n == 1) {
         return 1
     }else{
         return n * fatorial(n-1)
     }
 }

 console.log(fatorial(4))

 /* n! = n x (n-1) 
 FATORIAL DO N É IGUAL A N * N MENOS UM 
 5! = 
 */