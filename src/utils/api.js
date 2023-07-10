const apiOptions = {
	url: 'https://mesto.nomoreparties.co/v1/cohort-68/',
	headers: {
		authorization: '3c161b6c-5a5d-4642-af7d-6f12393d02c0',
		'Content-Type': 'application/json'
	}
}

class Api {
	constructor(config) {
		this._url = config.url;
		this._headers = config.headers;
	}

	// Получение данных о пользователе с сервера
	getUserData() {
		return fetch(`${this._url}/users/me`, {
			headers: this._headers,
		})
			.then(this._handleResponse)
	}

	// Отправка полученных данных о пользователе на сервер
	sendUserData(userData) {
		return fetch(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: userData.name,
				about: userData.about
			})
		})
			.then(this._handleResponse)
	}

	// Смена аватара пользователя
	sendAvatarData(userAvatar) {
		return fetch(`${this._url}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: userAvatar.avatar
			})
		})
			.then(this._handleResponse)
	}

	// Добавление новой карточки на сервер
	addNewCard({ name, link }) {
		return fetch(`${this._url}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({ name, link })
		})
			.then(this._handleResponse)
	}

	// Загрузка карточек с сервера
	getCards() {
		return fetch(`${this._url}/cards`, {
			headers: this._headers,
		})
			.then(this._handleResponse)
	}

	// Удаление карточки
	deleteCard(cardId) {
		return fetch(`${this._url}/cards/${cardId}`, {
			method: 'DELETE',
			headers: this._headers,
		})
			.then(this._handleResponse)
	}

	// Постановка лайка
	putLike(cardId) {
		return fetch(`${this._url}/cards/${cardId}/likes`, {
			method: 'PUT',
			headers: this._headers,
		})
			.then(this._handleResponse)
	}

	// Удаление лайка
	deleteLike(cardId) {
		return fetch(`${this._url}/cards/${cardId}/likes`, {
			method: 'DELETE',
			headers: this._headers,
		})
			.then(this._handleResponse)
	}

	changeLikeCardStatus(cardId, isLiked) {
		// console.log(cardId)
		if (isLiked) {
			return this.deleteLike(cardId);
		} else {
			return this.putLike(cardId);
		}
	}

	_handleResponse(res) {
		if (res.ok) {
			return res.json();
		} else {
			return Promise.reject(`Возникла ошибка: ${res.status}`)
		}
	}
}

export const api = new Api(apiOptions);