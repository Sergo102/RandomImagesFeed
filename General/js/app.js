const url = 'https://source.unsplash.com/random/';
const content = document.querySelector('.content');
const rows = 7;

for(let i = 0;i < rows * 3;i++){
  const img = document.createElement('img');
  img.src = `${url}${randomSize()}`;
  content.appendChild(img);
}

function randomSize(){
 return `${randomNumber()}x${randomNumber()}`
}

function randomNumber(){
  return Math.floor(Math.random() * 10) + 300;
}