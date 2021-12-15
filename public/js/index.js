login = () => {
    const submit = document.querySelector('#form_login_submit');
    submit.addEventListener('click', async (event) => {
        event.preventDefault();
        const form = document.querySelector('#form_login');
        const formData = new FormData(form);
        let formInput = []
        for (let value of formData.entries()) {
            formInput.push(value);
        }
        const login = Object.fromEntries(formInput);
        console.log(login);

        try {
            const url = 'users/connexion';
            const result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(login)
            });
            if (result.ok) {
                window.location.href = "/home.html";
            }
        }
        catch (err) {
            console.error(err);
        }
    });
}

signup = () => {
    const submit = document.querySelector('#form_signup_submit');
    submit.addEventListener('click', async (event) => {
        event.preventDefault();
        const form = document.querySelector('#form_signup');
        const formData = new FormData(form);
        let formInput = []
        for (let value of formData.entries()) {
            formInput.push(value);
        }
        const signup = Object.fromEntries(formInput);

        try {
            const url = 'users/inscription';
            const result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(signup)
            });
            const data = await result.json();
            console.log(data);
        }
        catch (err) {
            console.error(err);
        }
    });
}
login();
signup();