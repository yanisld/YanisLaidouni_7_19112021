export const formData = (form) => {
    const formData = new FormData(form);
    let formInput = [];
    for (let value of formData.entries()) {
        formInput.push(value);
    }
    const body = Object.fromEntries(formInput);
    return body;
}

export const fetchPost = async (route, body) => {
    try {
        let result = false;
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
            result = true;
            return result;
        }
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

export const fetchGetOne = async (route) => {
    try {
        const data = await fetch(route, { credentials: 'include' });
        const result = await data.json();
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