window.onload = function() {
  var money = 100;
  var water = {'amt':0,'cost':100,'el':document.querySelector('#water')};
  var wind = {'amt':0,'cost':1000,'el': document.querySelector('#wind')};
  var solar = {'amt':0, 'cost':5000, 'el:': document.querySelector('#solar')};
  var nuclear = {'amt':0, 'cost':10000, 'el:': document.querySelector('#nuc')};
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
    document.querySelector('#mps').innerText = 'Money per sec: $'+String(water.amt*10+wind.amt*50+solar.amt*100+nuclear.amt*150/2);    }
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
    document.querySelector('#mps').innerText = 'Money per sec: $'+String(water.amt*10+wind.amt*50+solar.amt*100+nuclear.amt*150/2);
    }
  });

  document.querySelector('#buySol').addEventListener('click', function(){
    if(money >= solar.cost){
      solar.amt += 1;
      money -= solar.cost;
      solar.el.innerHTML = 'Solar: '+solar.amt;
      totalItem+=1;
      solar.cost *=2;
      document.querySelector('#money').innerText = '$ '+money;
      document.querySelector('#buySol').innerText = 'Buy Solar: $'+solar.cost;
      document.querySelector('#mps').innerText = 'Money per sec: $'+String(water.amt*10+wind.amt*50+solar.amt*100+nuclear.amt*150/2);
    }
  });

  document.querySelector('#buyNuc').addEventListener('click', function(){
    if(money >= nuclear.cost){
      nuclear.amt += 1;
      money -= nuclear.cost;
      nuclear.el.innerHTML = 'Nuclear: '+nuclear.amt;
      totalItem += 1;
      nuclear.cost *= 2;
      document.querySelector('#money').innerText = '$ '+money;
      document.querySelector('#buyNuc').innerText = 'Buy Nuclear: $'+solar.cost;
      document.querySelector('#mps').innerText = 'Money per sec: $'+String(water.amt*10+wind.amt*50+solar.amt*100+nuclear.amt*150/2);
    }
  });

  //Money

  function addMoney(amt){
    money += amt;
  }

  var moneyInt = window.setInterval(function(){
    if(totalItem > 0){
      addMoney(10*water.amt);
      addMoney(50*wind.amt);
      addMoney(100*solar.amt);
      addMoney(150*nuclear.amt);
    document.querySelector('#money').innerText = '$ '+money;
    }
}, 2000);

// Cheat handling

window.onkeyup = function(e){
  if(e.shiftKey && e.ctrlKey && e.keyCode == 67){
    money += 10000;
    document.querySelector('#money').innerText = '$ '+money;

  }
}
};
