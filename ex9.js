/*
Use o método de Milne para integrar
dy
dx
= 4e0;8x 􀀀 0; 5y (16)
de x = 0 a x = 4 usando um incremento igual 1. A condição inicial em x = 0 é y = 2.
Como estamos lidando com um método multistep, necessitamos de pontos anteriores.
Para o presente exemplo, da solução analítica podemos calcular os valores exatos yi􀀀3 =
-4,547302, yi􀀀2 = -2,306160, e yi􀀀1 = -0,3929953, respectivamente.
O método de Milne é do tipo preditor-corretor





*/


function Milne(f, x0 = 0, y0 = 2.0, h = 1) {
    let y = [y0];
    let x = [x0,1,2,3,4,5];
    let yc=[]
  
    for (n = 0; n <=4 ; n++) {
      x[n-1] = x[n] - h
      x[n-2] = x[n] - (h*2)
      y[n-3] = -4.547302
      y[n-2] = -2.306160
      y[n-1] = -0.3929953
  
      y[n + 1] = y[n-3] + 4/3 *(2*f(x[n], y[n]) - f(x[n-1], y[n-1]) + 2 * f(x[n-2], y[n-2])) * h  // Preditor;
      k = f(x[n+1] , y[n+1])
      yc[n+1] = y[n-1] + (1/3) * (f(x[n-1], y[n-1]) + 4*f(x[n], y[n]) + k) * h
     
      
  
      console.log(`x${n}=${n} - Preditor: y${n}= ${y[n+1]} - Corretor: y${n}= ${yc[n+1]}` );
  
      //console.log(`y${n + 1}=`,y[n + 1],"h=",h,"F(x,y)=",f(x[n], y[n]),`x${n}=`,x[n],`y${n}=`,y[n]);
    }
  }

  function ex9(x,y) {
    return (4*Math.exp(0.8*x) - 0.5*y)
  }

Milne(ex9 , x0 = 0.0 , y0= 1.0 , h = 0.1)


