getAllPosts = async () => {
        try {
            const url = 'api/posts/';
            const result = await fetch(url);
            if (result.ok) {
                const posts = await result.json();
                displayAllPosts(posts);
            }
        }
        catch (err) {
            console.error(err);
        }
}
displayAllPosts = (posts) => {
    const main = document.querySelector('#main');
    for (let i in posts) {
        const div = document.createElement('div');
        const link = document.createElement('a');
        const title = document.createElement('h2');
        const content = document.createElement('div');

        div.classList.add('post');
        link.classList.add('post_link');
        link.setAttribute('href', 'api/posts/' + posts[i].id);
        title.textContent = posts[i].title;
        content.textContent = posts[i].content;

        main.appendChild(div);
        div.appendChild(link);
        link.appendChild(title);
        div.appendChild(content);
    }
}
logout = () => {
    const logout = document.querySelector('#logout');
    logout.addEventListener('click', async (event) => {
        event.preventDefault();
        try {
            const url = 'api/users/deconnexion';
            const result = await fetch(url);
            if (result.ok) {
                window.location.href = '/';
            }
        }
        catch (err) {
            console.error(err);
        }
    });
}
getAllPosts();
logout();