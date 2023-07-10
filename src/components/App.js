import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api';
import avatar from '../images/Avatar.jpg';
import { EditProfilePopup } from './EditProfilePopup';
import { EditAvatarPopup } from './EditAvatarPopup';
import { AddPlacePopup } from './AddPlacePopup';



function App() {

	const [currentUser, setCurrentUser] = React.useState({
		name: 'Жак-Ив Кусто',
		about: 'Исследователь окена',
		avatar: avatar,
	});

	const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

	const [selectedCard, setSelectedCard] = React.useState({
		name: '',
		img: '',
	});
	const [cards, setCards] = React.useState([]);

	function handleCardClick({ name, img }) {
		setSelectedCard({
			name,
			img,
		});
	}

	function handleCardLike({ likes, id }) {
		const isLiked = likes.some(i => i._id === currentUser._id);

		api.changeLikeCardStatus(id, isLiked).then((newCard) => {
			setCards((cards) => cards.map((c) => c._id === id ? newCard : c));
		}).catch((err) => console.log(`При постановке/снятия лайка возникла ошибка: ${err}`))
	}

	function handleCardDelete({ id }) {
		api.deleteCard(id).then(() => {
			setCards((cards) => cards.filter((c) => c._id !== id));
		}).catch((err) => console.log(`При удалении карточки возникла ошибка: ${err}`))
	}

	function handleUpdateUser(data) {
		api.sendUserData(data).then((res) => {
			setCurrentUser(res);
			closeAllPopups();
		}).catch((err) => console.log(`При редактировании профиля возникла ошибка: ${err}`))
	}

	function handleUpdateAvatar(data) {
		api.sendAvatarData(data).then((res) => {
			setCurrentUser(res);
			closeAllPopups();
		}).catch((err) => console.log(`При редактировании аватара возникла ошибка: ${err}`))
	}

	function handleAddPlaceSubmit(data) {
		api.addNewCard(data).then((newCard) => {
			setCards([newCard, ...cards]);
			closeAllPopups();
		}).catch((err) => console.log(`При добавлении карточки возникла ошибка: ${err}`))
	}

	function handleEditProfileClick() { setEditProfilePopupOpen(true); }
	function handleEditAvatarClick() { setEditAvatarPopupOpen(true); }
	function handleAddPlaceClick() { setAddPlacePopupOpen(true); }

	function closeAllPopups() {
		setEditProfilePopupOpen(false);
		setAddPlacePopupOpen(false);
		setEditAvatarPopupOpen(false);
		setSelectedCard({
			name: '',
			img: ''
		})
	}

	React.useEffect(() => {
		api.getUserData().then((data) => {
			setCurrentUser(data);
		}).catch((err) => console.log(`При загрузке данных Пользователя возникла ошибка: ${err}`))

		api.getCards().then((data) => {
			setCards(data);
		}).catch((err) => console.log(`При загрузке карточек с сервера возникла ошибка: ${err}`))
	}, [])

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="page">
				<div className="page__container">

					<Header />
					<Main
						cards={cards}
						onEditProfile={handleEditProfileClick}
						onEditAvatar={handleEditAvatarClick}
						onAddPlace={handleAddPlaceClick}
						onCardClick={handleCardClick}
						onCardLike={handleCardLike}
						onCardDelete={handleCardDelete}
					/>
					<Footer />

				</div>

				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>

				<AddPlacePopup
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					onAddPlace={handleAddPlaceSubmit}
				/>

				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvarar={handleUpdateAvatar}
				/>

				<PopupWithForm
					name="deleteCard"
					title="Вы уверены?"
					buttonText="Да" />

				<ImagePopup
					card={selectedCard}
					onClose={closeAllPopups} />

			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
