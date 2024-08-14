// TODO: Create a variable that selects the main element

const main = document.getElementById('blog-posts');


// TODO: Create a function that builds an element and appends it to the DOM
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

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function that reads from local storage and returns the data
function getPosts() {
    return JSON.parse(localStorage.getItem('posts')) || []; 
}
// TODO: Call the function to render the list of blog posts

document.addEventListener('DOMContentLoaded', () => {
    const posts = getPosts();
    renderPosts(posts);
  });