let hunger = 100;
let happiness = 100;
let cleanliness = 100;
let sleepy = 100;
let level = 1;
let hungerValue = document.getElementById('hunger').textContent.split(':')[1].trim();
let cleanlinessValue = document.getElementById('cleanliness').textContent.split(':')[1].trim();
let sleepinessValue = document.getElementById('sleepy').textContent.split(':')[1].trim();
let petImage = document.getElementById('pet').querySelector('img');

let normalImageSrc = 'Gambar\\3.jpeg';
let hungryImageSrc = 'Gambar\\3_lapar.png';
let dirtyImageSrc = 'Gambar\\3_kotor.png';
let tiredImageSrc = 'Gambar\\3_tutu.png';

 function updatePetImage() {
  if (parseInt(hungerValue) < 30 && parseInt(cleanlinessValue) < 30 && parseInt(sleepinessValue) < 30) {
    petImage.src = dirtyImageSrc;
  } else if (parseInt(hungerValue) < 30 && parseInt(cleanlinessValue) < 30) {
    petImage.src = dirtyImageSrc;
  } else if (parseInt(hungerValue) < 30 && parseInt(sleepinessValue) < 30) {
    petImage.src = tiredImageSrc;
  } else if (parseInt(hungerValue) < 30) {
    petImage.src = hungryImageSrc;
  } else {
    petImage.src = normalImageSrc;
  }
}
 setInterval(function() {
  hungerValue = document.getElementById('hunger').textContent.split(':')[1].trim();
  cleanlinessValue = document.getElementById('cleanliness').textContent.split(':')[1].trim();
  sleepinessValue = document.getElementById('sleepy').textContent.split(':')[1].trim();
  updatePetImage();
}, 1000);

const hungerStat = document.getElementById('hunger');
const happinessStat = document.getElementById('happiness');
const cleanlinessStat = document.getElementById('cleanliness');
const sleepyStat = document.getElementById('sleepy');
const feedBtn = document.getElementById('feed');
const cleanBtn = document.getElementById('clean');
const sleepBtn = document.getElementById('sleep');
const etImage = document.querySelector('#pet img');
const actions = document.querySelector('#actions');

actions.addEventListener('click', function(e) {
  if (e.target.id === 'feed') {
    displayTempImage('Gambar\\eeq_badaq.png');
  } else if (e.target.id === 'clean') {
    displayTempImage('Gambar\\air_timah.png');
  } else if (e.target.id === 'sleep') {
    displayTempImage('Gambar\\3_tutu.png');
  }
});

function displayTempImage(imageSrc) {
  const newImage = document.createElement('img');
  newImage.src = imageSrc;
  newImage.classList.add('temp-image');
  etImage.insertAdjacentElement('afterend', newImage);
  setTimeout(function() {
    const tempImage = document.querySelector('.temp-image');
    if (tempImage) {
      tempImage.remove();
    }
  }, 15000);
}


 function increaseLevel() {
	setInterval(function() {
	  level++;
	  console.log("Level increased to " + level);
	  document.getElementById('level').innerHTML = "Level: " + level;
	  localStorage.setItem('level', level);
	}, 6000);
}
 window.onload = function() {
	let savedLevel = localStorage.getItem('level');
	if (savedLevel) {
	  level = parseInt(savedLevel);
	  document.getElementById('level').innerHTML = "Level: " + level;
	}
	increaseLevel();
 	let name = sessionStorage.getItem('name');
	document.getElementById('name').innerHTML = name;
}
 feedBtn.addEventListener('click', function() {
	if (hunger <= 90) {
		hunger += 10;
		hungerStat.innerText = 'Hunger: ' + hunger + '%';
	}
});
 cleanBtn.addEventListener('click', function() {
	if (cleanliness <= 90) {
		cleanliness += 10;
		cleanlinessStat.innerText = 'Cleanliness: ' + cleanliness + '%';
 		let newImg = document.createElement('img');
		newImg.setAttribute('src', 'Gambar\\3_bersih.png');
		newImg.style.opacity = 1;
		document.getElementById('pet').appendChild(newImg);
 		setTimeout(() => {
			newImg.style.opacity = 0;
			setTimeout(() => {
				newImg.remove();
			}, 1000);
		}, 5000);
	}
});
 sleepBtn.addEventListener('click', function() {
	if (sleepy <= 90) {
		sleepy += 10;
		sleepyStat.innerText = 'Sleep: ' + sleepy + '%';
 		let newImg = document.createElement('img');
		newImg.setAttribute('src', 'Gambar\\3_tidur.png');
		newImg.style.opacity = 1;
		document.getElementById('pet').appendChild(newImg);
 		setTimeout(() => {
			newImg.style.opacity = 0;
			setTimeout(() => {
				newImg.remove();
			}, 1000);
		}, 5000);
	}
});
setInterval(function() {
    hunger -= 1;
    hungerStat.innerText = 'Hunger: ' + hunger + '%';
    if (hunger <= 0) {
        alert('Your pet has died from hunger!');
        location.reload();
    }
}, 2000);
 setInterval(function() {
    happiness -= 1;
    happinessStat.innerText = 'Happiness: ' + happiness + '%';
    if (happiness <= 0) {
        alert('Your pet has died from sadness!');
        location.reload();
    }
}, 6000);
 setInterval(function() {
    cleanliness -= 1;
    cleanlinessStat.innerText = 'Cleanliness: ' + cleanliness + '%';
    if (cleanliness <= 0) {
        alert('Your pet has died from dirtiness!');
        location.reload();
    }
}, 6000);
 setInterval(function() {
    sleepy -= 1;
    sleepyStat.innerText = 'Sleepy: ' + sleepy + '%';
    if (sleepy <= 0) {
        alert('Your pet has died from sleepiness!');
        location.reload();
    }
}, 6000);