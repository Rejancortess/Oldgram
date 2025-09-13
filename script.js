const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment: 'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
];

const heartEl = document.getElementById('heart');

heartEl.addEventListener('click', function () {
  if (heartEl.getAttribute('fill') === '#000000') {
    heartEl.setAttribute('fill', 'red');
  } else {
    heartEl.setAttribute('fill', '#000000');
  }
});

const heartE2 = document.getElementById('heart2');

heartE2.addEventListener('click', function () {
  if (heartE2.getAttribute('fill') === '#000000') {
    heartE2.setAttribute('fill', 'red');
  } else {
    heartE2.setAttribute('fill', '#000000');
  }
});

const heartE3 = document.getElementById('heart3');

heartE3.addEventListener('click', function () {
  if (heartE3.getAttribute('fill') === '#000000') {
    heartE3.setAttribute('fill', 'red');
  } else {
    heartE3.setAttribute('fill', '#000000');
  }
});
