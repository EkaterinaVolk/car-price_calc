const form = document.forms.form;

const brand = form.elements.brand;
const audiModel = document.getElementById('Audi__model');
const bmwModel = document.getElementById('BMW__model');
const fordModel = document.getElementById('Ford__model');
const teslaModel = document.getElementById('Tesla__model');
const fuel = form.elements.fuel;
const capacity = document.getElementById('capacity');
const condition = form.elements.condition;
// у меня не получается достать condition, не могу получить доступ к элементу, как к радиокнопке, чтобы получить значение
const conditionUsed = document.getElementById('used');
const conditionNew = document.getElementById('new');
const usedSelect = document.getElementById('used__select');
const paymentMethod = form.elements.paymentMethod;
const total = document.getElementById('total');


let modelPrice = 0;
let fuelPrice = 0;
let capacityPrice = 0;
let conditionFactor = 0;
let paymentMethodFactor = 0;

let enginesTypes = {
  gasoline: 2000,
  diesel: 5000,
  gas: 7000,
  electricity: 15000,
};

let models = {
S: 7700000,
Y: 5100000,
X: 10000000,
A3: 3000000,
Q5: 5500000,
A7: 8900000,
Explorer: 3500000,
Mondeo: 1000000,
Aerostar: 6750000,
X1: 4000000,
series5: 15000000,
X6: 20000000,
};

function selectModel() {
  if (brand.value === 'Audi') {
    audiModel.style.display = "block";
    bmwModel.style.display = "none";
    fordModel.style.display = "none";
    teslaModel.style.display = "none";
  } else if (brand.value === 'BMW') {
    bmwModel.style.display = "block";
    audiModel.style.display = "none";
    fordModel.style.display = "none";
    teslaModel.style.display = "none";
  } else if (brand.value === 'Ford') {
    fordModel.style.display = "block";
    audiModel.style.display = "none";
    bmwModel.style.display = "none";
    teslaModel.style.display = "none";
  } else if (brand.value === 'Tesla') {
    teslaModel.style.display = "block";
    audiModel.style.display = "none";
    bmwModel.style.display = "none";
    fordModel.style.display = "none";
  }
}

conditionUsed.onfocus = function() {
  usedSelect.style.display = "block";
}

conditionNew.onfocus = function() {
  usedSelect.style.display = "none";
}

function getFuelPrice() {
  if (fuel.value === 'gasoline') {
    fuelPrice = enginesTypes.gasoline;
  };
  if (fuel.value === 'diesel') {
    fuelPrice = enginesTypes.diesel;
  };
  if (fuel.value === 'gas') {
    fuelPrice = enginesTypes.gas;
  };
  if (fuel.value === 'electricity') {
    fuelPrice = enginesTypes.electricity;
  };
}

function getModelPrice(){
  if (brand.value === 'Audi') {
    if (audiModel.value === 'A3') {
    modelPrice = models.A3;}
    if (audiModel.value === 'Q5') {
    modelPrice = models.Q5;}
    if (audiModel.value === 'A7') {
    modelPrice = models.A7;}
  } else if  (brand.value === 'BMW') {
    if (bmwModel.value === 'X1') {
      modelPrice = models.X1;}
      if (bmwModel.value === 'X6') {
      modelPrice = models.X6;}
      if (bmwModel.value === 'series5') {
      modelPrice = models.series5;}
  } else if  (brand.value === 'Ford') {
    if (fordModel.value === 'Explorer') {
      modelPrice = models.Explorer;}
      if (fordModel.value === 'Mondeo') {
      modelPrice = models.Mondeo;}
      if (fordModel.value === 'Aerostar') {
      modelPrice = models.Aerostar;}
  } else {
    if (teslaModel.value === 'S') {
      modelPrice = models.S;}
      if (teslaModel.value === 'Y') {
      modelPrice = models.Y;}
      if (teslaModel.value === 'X') {
      modelPrice = models.X;}
  }
}

function getCapacityPrice() {
 if (Number(capacity.value) > 2.4) {
 capacityPrice = 500000;
} else {
  capacityPrice = 0;
}
}

// function getConditionFactor() {
//   if (condition.value === 'used') {
//     if (usedSelect.value === 'used__select1') {
//       conditionFactor = 0.8;
//     }
//     if (usedSelect.value === 'used__select2') {
//       conditionFactor = 0.5;
//     }
//   } else if (condition.value === 'new') {
//     conditionFactor = 1;
//   }
// }

function getPaymentMethodFactor() {
  if (paymentMethod.value === 'cash'){
    paymentMethodFactor = 0.8;
  }
  if (paymentMethod.value === 'card'){
    paymentMethodFactor = 1;
  }
  if (paymentMethod.value === 'company'){
    paymentMethodFactor = 1.2;
  }
}

function spaceTotalNumber(number){
  return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

function calculatePrice() {
  let totalPrice = (modelPrice + fuelPrice + capacityPrice) * paymentMethodFactor;
  total.value = spaceTotalNumber(totalPrice);
}
// должно быть ещё умножение на conditionFactor

form.addEventListener('change', () => {
  selectModel();
  getFuelPrice();
  getModelPrice()
  getCapacityPrice();
  // getConditionFactor();
  getPaymentMethodFactor();
  calculatePrice();
});