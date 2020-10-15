/*
Resolva novamente o Exercício 9 utilizando, agora, o método de Adams de quarta ordem:



*/



function Adams(f, x0 = 0, y0 = 2.0, h = 1) {
    let y = [y0];
    let x = [x0,1,2,3,4,5];
    let yc=[]
  
    for (n = 0; n <=4 ; n++) {
      x[n-1] = x[n] - h
      x[n-2] = x[n] - (h*2)
      x[n-3] = x[n] - (h*3)
      y[n-3] = -4.547302
      y[n-2] = -2.306160
      y[n-1] = -0.3929953
  
      y[n + 1] = y[n] +( (((55/24) * f(x[n],y[n])) - ((59/24) * f(x[n-1],y[n-1])) + ((37/24) * f(x[n-2],y[n-2])) - ((9/24) * f(x[n-3], y[n-3])))) * h  // Preditor;
      k = f(x[n+1] , y[n+1])
      yc[n+1] = y[n] + ((9/24 * k ) + ((19/24) * f(x[n],y[n]) )- ((5/24)*f(x[n-1],y[n-1]) + (1/24) * f(x[n-2],y[n-2]))) * h
     
      
      
      console.log(`x${n}=${n} - Preditor: y${n}= ${y[n+1]} - Corretor: y${n}= ${yc[n+1]}` )
  
      //console.log(`y${n + 1}=`,y[n + 1],"h=",h,"F(x,y)=",f(x[n], y[n]),`x${n}=`,x[n],`y${n}=`,y[n]);
    }
  }

  function ex10(x,y) {
    return (4*Math.exp(0.8*x) - 0.5*y)
  }

Adams(ex10 , x0 = 0.0 , y0= 1.0 , h = 0.1)
