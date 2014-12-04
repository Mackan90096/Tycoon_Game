window.onload = function() {
  var money = 100;
  vat = document.querySelector('#water');
  var water = {
    'amt':0,
    'cost':100,
    'el':vat
  };
  var wind = {
    'amt':0,
    'cost':1000,
    'el': document.querySelector('#wind')
  }
  var totalItem = 0;
  document.querySelector('#money').innerText = '$ '+money;
  document.querySelector('#buyW').addEventListener('click', function(){
    if(money >= water.cost){
    water.amt += 1;
    money -= water.cost;
    water.el.innerHTML = 'Water: '+water.amt;
    totalItem += 1;
    water.cost *= 2;
    document.querySelector('#money').innerText = '$ '+money;
    document.querySelector('#buyW').innerText = 'Buy Water: $'+water.cost;
    document.querySelector('#mps').innerText = 'Money per sec: $'+String(water.amt*10+wind.amt*100/2);
    }
  });

  document.querySelector('#buyWin').addEventListener('click', function(){
    if(money >= wind.cost){
    wind.amt += 1;
    money -= wind.cost;
    wind.el.innerHTML = 'Wind: '+wind.amt;
    totalItem += 1;
    wind.cost *= 2;
    document.querySelector('#money').innerText = '$ '+money;
    document.querySelector('#buyWin').innerText = 'Buy Wind: $'+wind.cost;
    document.querySelector('#mps').innerText = 'Money per sec: $'+String(water.amt*10+wind.amt*100/2);
    }
  });

  //Mney

  function addMoney(amt){
    money += amt;
  }

  var moneyInt = window.setInterval(function(){
    if(totalItem > 0){
      addMoney(10*water.amt);
      addMoney(100*wind.amt);
    document.querySelector('#money').innerText = '$ '+money;
    }
}, 2000);
};
