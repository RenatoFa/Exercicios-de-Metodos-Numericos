/*Considere a haste fina de comprimento l movendo-se no plano x 􀀀 y como mostrado na
Fig. 1. A haste é fixada a um pino em uma extremidade e a uma massa no outro. Observe */
function Runge_Kutta_Sistema(f, f2, x0 = 0.0, o0 = 0.0, o_0 = 0.25 , h = 0.1) {
    let o = [o0];
    let x = [x0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0];
    let ok = [o_0]
    
    y2=[]
    
  
    for (n = 0; n <= 10; n++) {
      k1 = f(x[n], o[n]);
      k1_2 = f2(x[n], ok[n]);
      


      k2 = f(x[n] + (h / 2), o[n] + k1 * (h / 2));
      k2_2 = f2(x[n] + (h / 2), ok[n] + k1 * (h / 2));


      k3 = f(x[n] + h / 2, o[n] + k2 * (h / 2));
      k3_2 = f2(x[n] + h / 2, ok[n] + k2 * (h / 2));

      k4 = f(x[n] + h, o[n] +( k3 * h));
      k4_2 = f2(x[n] + h, ok[n] +( k3 * h));
  
      o[n + 1] = o[n] + (1 / 6) * (k1 + (2 * k2) + (2 * k3 ) + k4 ) * (h);
      y2[n + 1] = ok[n] + (1 / 6) * (k1_2 * h + 2 * k2_2 * h + 2 * k3_2 * h + k4_2 * h);
      
      o[n+1] = o[n+1]
      ok[n+1] = y2[n+1]
      
  
      console.log( ` x= ${x[n]}    o= ${o[n + 1] } , o'=  ${ok[n+1]} `)
  
      //console.log(`y${n + 1}=`,y[n + 1],"h=",h,"F(x,y)=",f(x[n], y[n]),`x${n}=`,x[n],`y${n}=`,y[n]);
    }
  }

function ex8(w = 0 , o=0) {
    return w            // dO/ dt = w
  }

function ex8_2(g=9.81 , l = 0.5 , o= 0.25 ) {
    return (-g/l) * Math.sin(o) // dw/dt =  (-g/l) * Math.sin(o)
  }

Runge_Kutta_Sistema(ex8, ex8_2, x0 = 0.0, o0 = 0.0, o_0 = 0.25 , h = 0.1)