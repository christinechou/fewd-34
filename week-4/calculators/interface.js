//--beginning of pythagorean thereom

var pyA = document.querySelector('.py-a');
var pyB = document.querySelector('.py-b');
var pyC = document.querySelector('.py-c');

pyA.addEventListener('keyup', calcPy);
pyB.addEventListener('keyup', calcPy);



function calcPy(event) {
  if (pyA.value.length > 0 && pyB.value.length > 0) {
    pyC.value = calcLongestSide(pyA.value, pyB.value)
  } else {
    pyC.value = '';
  }
}


//--end of pythagorean thereom


//--beginning of circumfrance

var r = document.querySelector('.circum-r');
var c = document.querySelector('.circum-c');

r.addEventListener('keyup', calcC);

function calcC(event) {
  if (r.value.length > 0) {
    c.value = calcCircumference(r.value)
  } else {
    c.value = '';
  }
}

function calcCircumference (r) {
  return (2*Math.PI*r)
};


//--end of circumfrance


//--beginning of temperature conversion


var tempF = document.querySelector('.temp-f');
var tempC = document.querySelector('.temp-c');

tempF.addEventListener('keyup', calcFtoC);
tempC.addEventListener('keyup', calcCtoF);

function calcFtoC(event) {
  if (tempF.value.length > 0) {
    tempC.value = calcFahrenheitToCelcius(tempF.value)
  } else {
    tempC.value = '';
  }
}

function calcFahrenheitToCelcius (tempF) {
  return ((tempF-32)*(5/9))
};

function calcCtoF(event) {
  if (tempC.value.length > 0) {
    tempF.value = calcCelciusToFarenheit(tempC.value)
  } else {
    tempF.value = '';
  }
}

function calcCelciusToFarenheit (tempC) {
  return  (tempC*(9/5)+32)
};

//--end of temperature conversion
