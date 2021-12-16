getAllPosts = async () => {
        try {
            const main = document.querySelector('#main');
            const url = 'posts/';
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
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const content = document.createElement("div");

        div.classList.add('post');
        title.textContent = posts[i].title;
        content.textContent = posts[i].content;

        main.appendChild(div);
        div.appendChild(title);
        div.appendChild(content);
    }
}
getAllPosts();