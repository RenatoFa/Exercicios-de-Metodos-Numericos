/*
Aplique os métodos de Euler e de Heun na busca pela solução aproximada do problema
de valor inicial
dy
dx
+ 3y = e􀀀3x(1 􀀀 2x); y(0) = 2 (9)
e encontre as soluções em x = 0,3, 0,5, 0,7 e 1,0. Obtenha os valores usando x = 0,1 e
0,01.

*/

function Heun(f, x0 = 0.0, y0 = 2.0, h=0.01) {
    let y = [y0];
    let x = [x0, 0.3 , 0.5 , 0.7 ,1.0];
    
    console.log("Heun ")
    for (n = 1; n <=5; n++) {
      
        y_intermediario = y[n-1] +  (f(x[n-1],y[n-1])*h); // Preditor 
        y[n] = y[n-1] + [(f(x[n-1],y[n-1]) + f(x[n],y_intermediario))/2] * h // Corretor

        console.log(y_intermediario, `y${n} = ${y[n]}`)
      
  
     
  
      
    }
    
}

function euler(f, x0 = 0, y0 = 2, h) {
    let y = [y0];
    let x = [x0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
    console.log("Euler ")
    for (n = 0; n <= 10; n++) {
      y[n + 1] = y[n] + h * f(x[n], y[n]);
  
      console.log(
        `y${n + 1}=`,y[n + 1],"h=",h,"F(x,y)=",f(x[n], y[n]),`x${n}=`,x[n],`y${n}=`,y[n]);
    }}

function ex5(x = 0, y = 2) {
    return ((Math.exp(-3*x)*(1-2*x)) - (3*y));
  }

  function solucao(x = 0.0 ,x0=0) {
    let xl = [x0, 0.3 , 0.5 , 0.7 ,1.0]
    console.log("Solucao Exata")
    for (x = 0; x < 5; x = x+1 ) {
      console.log(Math.exp(-3*xl[x])*(2+xl[x]-xl[x]**2));
      
      
    }
  
    return "Fim";
  }

euler(ex5,x0=0.0,y0=2.0,h=0.1)
console.log("")

euler(ex5,x0=0.0,y0=2.0,h=0.01)
console.log("")

Heun(ex5,x0=0.0,y0=2.0,h=0.1)
console.log("")

Heun(ex5,x0=0.0,y0=2.0,h=0.01)
console.log("")
console.log(solucao())




//console.log(ex4())