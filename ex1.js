
function euler(f, x0 = 0, y0 = 2, h) {
  let y = [y0];
  let x = [x0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];

  for (n = 0; n <= 10; n++) {
    y[n + 1] = y[n] + h * f(x[n], y[n]);/**/

    console.log(
      `y${n + 1}=`,
      y[n + 1],
      "h=",
      h,
      "F(x,y)=",
      f(x[n], y[n]),
      `x${n}=`,
      x[n],
      `y${n}=`,
      y[n]
    );
  }

  return "Fim";
}

function ex1(x, y) {
  return 7 * Math.exp(4 * x) - 3 * y;
}

console.log(euler(ex1, 0, 2, 0.1));
console.log("");
console.log(euler(ex1, 0, 2, 0.05));
console.log("");
console.log(euler(ex1, 0, 2, 0.025));
console.log("");

function solucao(x = 0.0) {
  console.log("Solucao exata")
  for (x = 0.0; x <= 1.0; x = x + 0.1) {
    
    console.log(Math.exp(4 * x) + Math.exp(-3 * x));
  }

  return "Fim";
}

console.log("");
console.log(solucao());
