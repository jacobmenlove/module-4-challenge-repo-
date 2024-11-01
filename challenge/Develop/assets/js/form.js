const form = document.getElementById('blog-form');
const error = document.getElementById('error');

form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const username = document.getElementById('username').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (!username || !title || !content) {
    error.textContent = 'Please complete the form.';
    return;
  }

  error.textContent = '';

  const blogPost = { username, title, content };

  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(blogPost);

  localStorage.setItem('posts', JSON.stringify(posts));

  location.assign('blog.html');
});
