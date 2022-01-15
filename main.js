const nout = {
   1:{
      name:`Lenova`,
      model:`Ty500`,
      price: 500,
      amount:10
   },
   2:{
      name:`HP`,
      model:`AT480`,
      price: 450,
      amount:5
   },
   3:{
      name:`acer`,
      model:`SD600`,
      price: 560,
      amount:7,
   },
   4:{
      name:`acer`,
      model:`QY700`,
      price: 650,
      amount:3,
      
   },
   5:{
      name:`HP`,
      model:`IE300`,
      price: 400,
      amount:13,
   },
   6:{
      name:`Lenova`,
      model:`PX900`,
      price: 800,
      amount:14,
   },
   7:{
      name:`Lenova`,
      model:`NS400`,
      price: 200,
      amount:11,
   },
}

let text = `jami `
let answer = 0
for(let key in nout) {
   let result = nout[key]
     if (result.name === 'Lenova') {
      answer += result.amount    
      text =   `nomi:${result.name} \n modeli:${result.model} \n jami: ${result.amount} \n summa:${result.price}`
   }else if (result.name === 'HP') {
      answer += result.amount    
      text =   `nomi:${result.name} \n modeli:${result.model} \n jami: ${result.amount} \n summa:${result.price}`
   }else if (result.name === 'acer') {
      answer += result.amount    
      text =   `nomi:${result.name} \n modeli:${result.model} \n jami: ${result.amount} \n summa:${result.price}`
   }
   console.log(text);
} 