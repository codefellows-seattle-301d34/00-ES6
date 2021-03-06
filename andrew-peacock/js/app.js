'use strict';

const names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

const allProducts = [];
let container = document.getElementById('image_container');
const viewed = [];
const labels = [];
let pics = [document.getElementById('left'),
                document.getElementById('center'), //eslint-disable-line
                document.getElementById('right')]; //eslint-disable-line
let list = document.getElementById('productlist');
let totalClicks = 0;
const views = [];
const votes = [];

function Product(name) {
  this.name = name;
  this.path = 'img/' + name + '.jpg';
  this.votes = 0;
  this.views = 0;
  allProducts.push(this);
}

function makeRandom() {
  return Math.floor(Math.random() * names.length);
}

function displayPics(){
  // roll for three random indexes
  while(viewed.length < 6){
    let rando = makeRandom();
    while(!viewed.includes(rando)){
      viewed.push(rando);
    }
    console.log(rando);
  }
 
  // TODO: In a sentence or two, explain why the previous line of code threw an error when we changed the variable declaration from `var to `let`.
  //the console log was outside of let block scope but not var local scope. Moving it into let scope allowed the js to finish running fully
  console.log(viewed)

  // To the DOM and beyond!
  for (let i = 0; i < 3; i++){
    let temp = viewed.shift();
    pics[i].src = allProducts[temp].path;
    pics[i].id = allProducts[temp].name;
    allProducts[temp].views += 1;
  }
}

function handleClick(event) {
  if(totalClicks > 24) {
    container.removeEventListener('click', handleClick);
    container.style.display = 'none';
    showList();
    makeChart();
  }
  if (event.target.id === 'image_container') {
    return alert('Be sure to click directly on an image!!');
  }
  totalClicks += 1;
  for(let i = 0; i < names.length; i++){
    if(event.target.id === allProducts[i].name) {
      allProducts[i].votes += 1;
      console.log(event.target.id + ' has ' + allProducts[i].votes + ' votes in ' + allProducts[i].views + ' views');
    }
  }
  localStorage.busmall = JSON.stringify(allProducts);
  localStorage.busmallProducts = JSON.stringify(allProducts);
  displayPics();
}

function showList() {
  for(let i = 0; i < allProducts.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = allProducts[i].name + ' has ' + allProducts[i].votes + ' votes in ' + allProducts[i].views + ' views';
    list.appendChild(liEl);
  }
}

function makeChartData(){
  allProducts.forEach(function(product){
    labels.push(product.name);
    votes.push(product.votes);
    views.push(product.views);
  });
}

function makeChart(){
  makeChartData();
  let ctx = document.getElementById('chartypants').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'total votes',
        backgroundColor: 'gold',
        borderColor: '#214',
        data: votes,
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            max: 20,
            min: 0,
            stepSize: 1
          }
        }]
      }
    }
  });
  Chart.defaults.global.defaultFontColor = '#eee';
}

container.addEventListener('click', handleClick);

document.getElementById('bus').addEventListener('click', function(){
  localStorage.removeItem('busmall');
  console.log('Local storage was cleared!');
});

if(localStorage.busmall){
  console.log('Local storage data exists');
  allProducts = JSON.parse(localStorage.busmall)
} else {
  console.log('There is no local storage data; initialize app by creating instances');
  for(let i = 0; i < names.length; i++) {
    new Product(names[i]);
  }
  console.log(allProducts);
}

displayPics();
