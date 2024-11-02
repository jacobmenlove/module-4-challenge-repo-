const redirectURL = 'index.html';

function readLocalStorage(key) {
    if (!key || typeof key !== 'string') {
        console.error("readLocalStorage - No valid key provided!");
        return [];  
    const data = JSON.parse(localStorage.getItem(key));
    console.log(`readLocalStorage - Key: ${key}, Data:`, data);
    return data || [];
}


function renderBlogList() {
    const main = document.querySelector('main');
    const posts = readLocalStorage('posts');

    
    if (!Array.isArray(posts) || posts.length === 0) {
        main.innerHTML = '<p>No Blog posts yet...</p>';
    } else {
        main.innerHTML = ''; // Clear any existing content
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
}

document.addEventListener('DOMContentLoaded', () => {
    renderBlogList(); 


    document.getElementById('back').addEventListener('click', () => {
        if (redirectURL.includes('index.html')) {
            location.assign(redirectURL);
        }
    });
});
