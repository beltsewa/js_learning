//task1
var res = document.getElementById("result"),
  input = document.getElementById("input");

input.addEventListener('change', function() {
  inputNumber = this.value;
  if(inputNumber < 1)
  {
    alert('Невозможно найти число последовательности Фибоначчи с отрицательным или нулевым порядковым номером!');
  }
  res.innerHTML = fibonacci(inputNumber-1);
});

//task2
var res2 = document.getElementById("result2"),
  x = document.getElementById("X"),
  y = document.getElementById("Y"),
  z = document.getElementById("Z"),
  btn = document.getElementById("eval");

btn.onclick = () => 
{
    var xVal = parseFloat(x.value),
      yVal = parseFloat(y.value),
      zVal = parseFloat(z.value);
    res2.innerHTML = u(xVal, yVal, zVal);
}

//task3
var res3 = document.getElementById("result3"),
  inputR = document.getElementById("R");

inputR.addEventListener('change', function() 
  {
    var R = this.value;
    res3.innerHTML = volume(R);
  });

// function declaration statement
function fibonacci(n)
{
    if (n === 0 || n === 1)
    {
        return n;
    }
    else
    {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// function definition expression
var u = function (x, y, z) {
    func = (Math.max(x, y) + Math.max((x + y), z))/Math.pow((Math.max(0.5, (x+z))), 2);
    return func;
};
    
// Arrow function expressions
var volume = R =>
{
  if(R <= 0)
  {
    alert('Невозможная операция');
    return;
  }
  return (4 *Math.PI * Math.pow(parseFloat(R), 3))/3;
}