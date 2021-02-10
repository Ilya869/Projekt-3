class Api {
    constructor(url, headers) {
      this.url = url;
      this.headers = headers;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`); 
        }
        return res.json();
    }
    
    getInfoProfile() {
        return fetch(`${this.url}/users/me`, {
            method: 'GET',
            headers: this.headers
            })
        .then(res => {
            return this._getResponseData(res) 
        })
    };

    getCards() {
        return fetch(`${this.url}/cards`, {
            method: 'GET',
            headers: this.headers
        })
        .then(res => {
            return this._getResponseData(res) 
        })
    };

    patchInfoProfile(name, about) {  
        return fetch(`${this.url}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
              name: name,
              about: about
            })
        })
        .then(res => {
            return this._getResponseData(res)
        }) 
    };

    addNewCard(name, link) {
        return fetch(`${this.url}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: ({
                name: name,
                link: link
            })
        })
        .then(res => {
            return this._getResponseData(res)
        })
    }
}