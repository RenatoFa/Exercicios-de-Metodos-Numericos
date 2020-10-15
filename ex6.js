/*
Use o método de Runge-Kutta de quarta ordem com incrementos iguais a x = 0,1 e
0,01 e ache a solução numérica de:

nos pontos 2 e 2,5.
Por último, comente os resultados sabendo que a solução exata é


*/

function Runge_Kutta(f, x0 = 1, y0 = 3 / 2, h) {
  let y = [y0];
  let x = [x0];

  for (n = 0; n < 9; n++) {
    k1 = f(x[n], y[n]);
    k2 = f(x[n] + h / 2, y[n] + k1 * (h / 2));
    k3 = f(x[n] + h / 2, y[n] + k2 * (h / 2));
    k4 = f(x[n] + h, y[n] + k3 * h);

    y[n + 1] = y[n] + (1 / 6) * (k1 * h + 2 * k2 * h + 2 * k3 * h + k4 * h);
    x[n + 1] = x[n] + h;

    console.log(y[n + 1]);

    //console.log(`y${n + 1}=`,y[n + 1],"h=",h,"F(x,y)=",f(x[n], y[n]),`x${n}=`,x[n],`y${n}=`,y[n]);
  }
}

function Runge_Kutta2(f, x0 = 1, y0 = 3 / 2, h) {
  let y = [y0];
  let x = [x0];

  for (n = 0; n < 90; n++) {
    k1 = f(x[n], y[n]);
    k2 = f(x[n] + h / 2, y[n] + k1 * (h / 2));
    k3 = f(x[n] + h / 2, y[n] + k2 * (h / 2));
    k4 = f(x[n] + h, y[n] + k3 * h);

    y[n + 1] = y[n] + (1 / 6) * (k1 * h + 2 * k2 * h + 2 * k3 * h + k4 * h);
    x[n + 1] = x[n] + h;

    console.log(y[n + 1]);

    //console.log(`y${n + 1}=`,y[n + 1],"h=",h,"F(x,y)=",f(x[n], y[n]),`x${n}=`,x[n],`y${n}=`,y[n]);
  }
}

function Runge_Kutta3(f, x0 = 1, y0 = 3 / 2, h) {
    let y = [y0];
    let x = [x0];
  
    for (n = 0; n < 14; n++) {
      k1 = f(x[n], y[n]);
      k2 = f(x[n] + h / 2, y[n] + k1 * (h / 2));
      k3 = f(x[n] + h / 2, y[n] + k2 * (h / 2));
      k4 = f(x[n] + h, y[n] + k3 * h);
  
      y[n + 1] = y[n] + (1 / 6) * (k1 * h + 2 * k2 * h + 2 * k3 * h + k4 * h);
      x[n + 1] = x[n] + h;
  
      console.log(y[n+1]);
  
      //console.log(`y${n + 1}=`,y[n + 1],"h=",h,"F(x,y)=",f(x[n], y[n]),`x${n}=`,x[n],`y${n}=`,y[n]);
    }
  }

  function Runge_Kutta4(f, x0 = 1, y0 = 3 / 2, h) {
    let y = [y0];
    let x = [x0];
  
    for (n = 0; n < 140; n++) {
      k1 = f(x[n], y[n]);
      k2 = f(x[n] + h / 2, y[n] + k1 * (h / 2));
      k3 = f(x[n] + h / 2, y[n] + k2 * (h / 2));
      k4 = f(x[n] + h, y[n] + k3 * h);
  
      y[n + 1] = y[n] + (1 / 6) * (k1 * h + 2 * k2 * h + 2 * k3 * h + k4 * h);
      x[n + 1] = x[n] + h;
  
      console.log(y[n + 1]);
  
      //console.log(`y${n + 1}=`,y[n + 1],"h=",h,"F(x,y)=",f(x[n], y[n]),`x${n}=`,x[n],`y${n}=`,y[n]);
    }
  }



function ex6(x = 1, y = 3 / 2) {
  return 7 / x ** 2 + 3 - (1 / x) * y;
}

function solucao(x = 1.1) {
  for (x = 1.1; x <= 2.0; x = x + 0.1) {
    console.log(7 * (Math.log(x) / x) + (3 / 2) * x);
  }

  return "Fim";
}

function solucao2(x = 2.0) {
    for (x = 2.0; x <= 2.5; x = x + 0.1) {
      console.log(7 * (Math.log(x) / x) + (3 / 2) * x);
    }
  
    return "Fim";
  }



console.log("");
console.log("Solucao exata para 2.0:");
console.log("");
console.log(solucao());


console.log("");
console.log("Runge Kutta 1 - 1.9 : Solucao: 2  h=0.1")
console.log("");
Runge_Kutta(ex6, (x0 = 1), (y0 = 3 / 2), (h = 0.1));


console.log("");
console.log("Runge Kutta 1 - 1.9 : Solucao: 2  h=0.01")
console.log("");
Runge_Kutta2(ex6, (x0 = 1), (y0 = 3 / 2), (h = 0.01));


console.log("");
console.log("Runge Kutta 1 - 2.4 : Solucao: 2.5  h=0.1")
Runge_Kutta3(ex6, (x0 = 1), (y0 = 3 / 2), (h = 0.1));

console.log("");
console.log("Runge Kutta 1 - 2.4 : Solucao: 2.5  h=0.01")
Runge_Kutta4(ex6, (x0 = 1), (y0 = 3 / 2), (h = 0.01));

console.log("");
console.log("Solucao exata para 2.5");
console.log(solucao2());
