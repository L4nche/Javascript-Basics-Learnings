  let valores = [4, 0, 2, 8 ,9]
  valores.push(5,3,7,1,6,80)
  valores.sort()
  /*for (let  v= 0;  v < valores.length; v++) {
      
      console.log( `A posição dos elementos ${v} e eles são ${valores[v]}`)
      
  }
  
  console.log(valores)

    */

    for (let v in valores) {
        console.log( `A posição dos elementos ${v} e eles são ${valores[v]}`)
    }