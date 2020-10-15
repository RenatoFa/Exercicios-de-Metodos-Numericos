/*

Empregue o método de Euler e os incrementos de espaço 0,1, 0,05 e 0,025 e determine a
solução numérica do problema de valor inicial



*/

function euler(f, x0 = 0, y0 = 2, h) {
  

    let y = [y0];
    let x = [x0,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2.0];
    
  
    for (n = 0; n <= 10; n++) {
      y[n + 1] = y[n] + (h * (f(x[n], y[n])));
      
      console.log(`y${n+1}=`,y[n+1],"h=",h,"F(x,y)=",f(x[n], y[n] ), `x${n}=`,x[n],`y${n}=`,y[n])
    }
  
    return "Fim"
  }

  function ex1(x=1, y=1) {
    return ((3/Math.pow(x,3)) + 1 - ((2/x) * y));
  }


  console.log(euler(ex1,1,1.0,0.1))
  console.log("")
  console.log(euler(ex1,1,1.0,0.05))
  console.log("")
  console.log(euler(ex1,1,1.0,0.025))

  function solucao(x=1.0) {
  
    for(x=1.0;x<=2.1;x=x+0.1){
      
      console.log(`y${x}`,"",(1/(3*Math.pow(x,2)))*((9*Math.log(x)) + (Math.pow(x,3)) + 2))
      
    }
  
    return "Fim"
        
  }
  console.log("")
  console.log(solucao())