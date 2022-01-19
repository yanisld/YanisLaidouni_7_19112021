export const formData = (form) => {
    const formData = new FormData(form);
    let formInput = [];
    for (let value of formData.entries()) {
        formInput.push(value);
    }
    const body = Object.fromEntries(formInput);
    return body;
}

const storeUsername = (key, value, ttl) => {
    const now = new Date();
    const item = {
		value: value,
		expiry: now.getTime() + (ttl * 1000),
	}
    localStorage.setItem(key, JSON.stringify(item))
}

export const fetchPost = async (route, body) => {
    try {
        const datas = await fetch(route, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(body),
        });
        if (datas.ok) {
            const response = await datas.json();
            const user = {username: response.username, id: response.id, role: response.role}
            storeUsername('name', user, 43200);
            return user;
        }
    }
    catch (err) {
        console.error(err);
    }
}

export const fetchPostData = async (route, body) => {
    try {
        await fetch(route, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(body),
        });
    }
    catch (err) {
        console.error(err);
    }
}

export const fetchGet = async (route) => {
    try {
        const datas = await fetch(route, { credentials: 'include' });
        const result = await datas.json();
        if (result) {
          return result;
        }
        } catch (err) {
        console.error(err);
      }
}

export const fetchUpdate = async (route, body) => {
    try {
        let result = false;
        const datas = await fetch(route, {
            method: 'PUT',
            credentials: 'include',
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(body),
        });
        if (datas.ok) {
            result = true;
            return result;
        }
    }
    catch (err) {
        console.error(err);
    }
}

export const fetchDelete= async (route) => {
    try {
        await fetch(route, { method: 'DELETE', credentials: 'include' });
      } catch(err) {
        console.error(err);
      }
}

export const date = (newDate) => {
    const format = new Date(newDate);
    return Intl.DateTimeFormat('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'}).format(format)
}