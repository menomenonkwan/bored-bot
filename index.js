const container = document.querySelector('.container');
const activity = document.querySelector('.activity p');
const btn = document.querySelector('button');

const handleClick = () => {
  fetch('https://apis.scrimba.com/bored/api/activity')
    .then(res => res.json())
    .then(data => {
      container.classList.add("darker");
      activity.textContent = data.activity;
    });
}

btn.addEventListener('click', handleClick);