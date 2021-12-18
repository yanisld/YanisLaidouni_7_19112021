getPost = async () => {
    try {
        const main = document.querySelector('#main');
        const url = 'api/posts/:id';
        const result = await fetch(url);
        if (result.ok) {
            const post = await result.json();
            displayPost(post);
        }
    }
    catch (err) {
        console.error(err);
    }
}
displayPost = (post) => {
    const main = document.querySelector('#main');
    const div = document.createElement('div');
    const title = document.createElement('h2');
    const content = document.createElement('div');

    div.classList.add('post');
    title.textContent = post.title;
    content.textContent = post.content;

    main.appendChild(div);
    div.appendChild(title);
    div.appendChild(content);
}
getPost();