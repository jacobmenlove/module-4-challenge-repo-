const main = document.querySelector('main');
const toggleButton = document.getElementById('toggle');
const backButton = document.getElementById('back');

function renderPosts() {
  let posts = JSON.parse(localStorage.getItem('posts')) || [];

  if (posts.length === 0) {
    main.innerHTML = '<p>No Blog posts yet...</p>';
    return;
  }

  main.innerHTML = '';

  posts.forEach(post => {
    const postElement = document.createElement('article');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <blockquote>By ${post.username}</blockquote>
      <p>${post.content}</p>
    `;
    main.appendChild(postElement);
  });
}

toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark');
  localStorage.setItem('mode', document.body.classList.contains('dark') ? 'dark' : 'light');
});

document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark');
  }
  renderPosts();
});

backButton.addEventListener('click', function() {
  location.assign('index.html');
});