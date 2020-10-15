/*


Use o método de Euler Modificado na busca da solucão do problema
dy
dx
=
y2 + xy * x2
x2 ; y(1) = 2 (7)
empregado incrementos x iguais a 0,05, 0,025 e 0,0125 e encontre os valores de y(x)
nos pontos 1,05, 1,10, 1,15, ...,1,5 . Por último, confronte os valores encontrados com os
exatos fornecidos por



*/

function eulermodificado(f, x0 = 1, y0 = 2, h=0.1) {
  let y = [y0];
  let x = [x0, 1.05, 1.10, 1.15, 1.20, 1.25, 1.30, 1.35, 1.40, 1.45, 1.50];
  

  for (n = 0; n < 10; n++) {
    
    y[n + 1 / 2] = y[n] +  (f(x[n], y[n]) * (h/2));
    y[n + 1] = y[n] + h * f(x[n + 1 / 2], y[n + 1 / 2]);

    console.log(`y${n+1}=`,y[n+1],"h=",h,"F(x,y)=",f(x[n], y[n] ), `x${n}=`,x[n],`y${n}=`,y[n])

    
  }

  return "Fim";
}

function ex4(x = 1, y = 2) {
  return (Math.pow(y,2)+x*y - Math.pow(x,2))/Math.pow(x,2);
}

console.log("h=0.5")
eulermodificado(ex4, (x0 = 1), (y0 = 2), (h = 0.05));
console.log("")
console.log("h=0.025")
eulermodificado(ex4, (x0 = 1), (y0 = 2), (h = 0.025));
console.log("")
console.log("h=0.0125")
eulermodificado(ex4, (x0 = 1), (y0 = 2), (h = 0.0125));

console.log("")

function solucao(x = 1.0) {
    for (x = 1.0; x <= 1.55; x = x + 0.05) {
      console.log(`y${x} = `, ((x*(1+((x**2)/3)))) / ((1 - ((x**2) / 3))));
      console.log()
      
    }
  
    return "Fim";
  }
   
  console.log("Solução exata:")
  console.log(solucao())

