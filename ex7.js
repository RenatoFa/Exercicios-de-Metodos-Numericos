/*


Um modelo para um reator de batelada, no qual a penicilina é produzida por fermentação,
foi derivado da seguinte forma:



*/

function Runge_Kutta_Sistema(f, f2, x0 = 0.0, y0 = 0.3, y_0 = 0 , h = 0.1) {
    let y = [y0];
    let x = [x0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0];
    let yk = [y_0]
    
    y2=[]
    
  
    for (n = 0; n <= 10; n++) {
      k1 = f(x[n], y[n]);
      k1_2 = f2(x[n], yk[n]);
      


      k2 = f(x[n] + (h / 2), y[n] + k1 * (h / 2));
      k2_2 = f2(x[n] + (h / 2), yk[n] + k1 * (h / 2));


      k3 = f(x[n] + h / 2, y[n] + k2 * (h / 2));
      k3_2 = f2(x[n] + h / 2, yk[n] + k2 * (h / 2));

      k4 = f(x[n] + h, y[n] +( k3 * h));
      k4_2 = f2(x[n] + h, yk[n] +( k3 * h));
  
      y[n + 1] = y[n] + (1 / 6) * (k1 + (2 * k2) + (2 * k3 ) + k4 ) * (h);
      y2[n + 1] = yk[n] + (1 / 6) * (k1_2 * h + 2 * k2_2 * h + 2 * k3_2 * h + k4_2 * h);
      
      y[n+1] = y[n+1]
      yk[n+1] = y2[n+1]
      
  
      console.log( ` x= ${x[n]}   - y1= ${y[n + 1] } , y2=  ${yk[n+1]} `)
  
      //console.log(`y${n + 1}=`,y[n + 1],"h=",h,"F(x,y)=",f(x[n], y[n]),`x${n}=`,x[n],`y${n}=`,y[n]);
    }
  }


  function ex7_1(x = 0, y = 0.3 , z= 0) {
    return (13.1*y - 13.94 * Math.pow(x,2));
  }

  function ex7_2(x = 0, y = 0.0 , z = 0) {
    return (1,71*y);
  }


  Runge_Kutta_Sistema(ex7_1,ex7_2,x0= 0.0 , y0 = 0.3 ,y_0 = 0 , h = 0.1)

 
