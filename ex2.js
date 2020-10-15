/*
Dado o problema de valor inicial
dy
dx
= 30(sen x 􀀀 y) + 3 cos x; y(0) = 1 (3)
e use o método de Euler implícito na determinação da solução entre x = o até 5 usando
x = 0,5.
Devemos lembra que o algoritmo implícito assume a forma
yi+1 = yi + f(xi+1; yi+1)x



*/

function eulerimplicito(f, x0 = 0, y0 = 1.0, h = 0.5) {
    let y = [y0];
    let x =[x0]
    let ynew = []
  
    for (n = 0; n <= 9; n++) {

      x[n+1] = x[n] + h
      ynew = y[n] + h * (f(x[n],y[n]))
      y[n+1] = y[n] + h * f(x[n+1] , ynew)
      
       
      
      console.log(`x${n} - y= ${y[n+1]}`)
      //console.log(`y${n + 1}=`,y[n + 1],"h=",h,"F(x,y)=",f(x[n], y[n]),`x${n}=`,x[n],`y${n}=`,y[n]);
    }
  
    return "Fim";
  }


  function ex2(x = 0, y=1) {
    return 30*(Math.sin(x-y)) + 3 * Math.cos(x);
  }

  eulerimplicito(ex2,x0=0,y0=1,h=0.5)