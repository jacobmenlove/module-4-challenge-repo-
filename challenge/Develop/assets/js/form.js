const redirectURL = 'blog.html'; 

function readLocalStorage(key) {
    if (!key || typeof key !== 'string') {
        console.error("readLocalStorage - No valid key provided!", key);
        return [];  
    const data = JSON.parse(localStorage.getItem(key));
    console.log(`readLocalStorage - Key: ${key}, Data:`, data);
    return data || [];
}

function storeLocalStorage(key, data) {
    if (!key || typeof key !== 'string') {
        console.error("storeLocalStorage - No valid key provided!", key);
        return;
    }
    console.log(`storeLocalStorage - Key: ${key}, Data to Store:`, data);
    localStorage.setItem(key, JSON.stringify(data));
}

document.getElementById('blog-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const error = document.getElementById('error');

    if (!username || !title || !content) {
        error.textContent = 'Please complete the form.';
        return;
    }

    error.textContent = '';  
    const blogPost = { username, title, content };

    
    let posts = readLocalStorage('posts'); 
    if (!Array.isArray(posts)) {
        console.error("Error: 'posts' is not an array. Resetting to an empty array.");
        posts = [];  
    }
    posts.push(blogPost);
    storeLocalStorage('posts', posts); 

   
    console.log("Final Stored data array:", JSON.parse(localStorage.getItem('posts')));

    
    if (redirectURL.includes('blog.html')) {
        location.assign(redirectURL);
    }
});
