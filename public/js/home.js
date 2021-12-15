getAllPosts = async () => {
        try {
            const main = document.querySelector('#main');
            const url = 'posts/';
            const result = await fetch(url);
            if (result.ok) {
                const data = await result.json();
                console.log(data);
            }
        }
        catch (err) {
            console.error(err);
        }
}
getAllPosts();