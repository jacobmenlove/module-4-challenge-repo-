const main = document.getElementById('blog-posts');


if (posts.length === 0) {
    main.innerHTML = '<p>No Blog posts yet...</p>';
    return;
  }

  posts.forEach(post => {
    const article = document.createElement('article');
    article.innerHTML = `
      <h2>${post.title}</h2>
      <blockquote>By ${post.username}</blockquote>
      <p>${post.content}</p>
    `;
    main.appendChild(article);
  });
}


function getPosts() {
    return JSON.parse(localStorage.getItem('posts')) || []; 
}

document.addEventListener('DOMContentLoaded', () => {
    const posts = getPosts();
    renderPosts(posts);
  });