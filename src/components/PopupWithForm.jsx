import React from "react";

export const PopupWithForm = (props) => {
	return (
		<>
			{/* Общая разметка */}
			<div className={props.isOpen ? `popup popup_opened popup_type_${props.name}` : `popup popup_type_${props.name}`}>
				<div className="popup__container">
					<button
						className="popup__button-close button"
						type="button"
						aria-label="Закрыть"
						onClick={props.onClose}>
					</button>

					<form name={props.name} className="popup__form" noValidate>
						<h3 className="popup__title">{props.title}</h3>
						{props.children}
						<button className="popup__button-submit button" type="submit"
							aria-label="Подтвердить">{props.buttonText}</button>
					</form>
				</div>
			</div >


			{/* Попап Редактирования Профиля */}
			{/* <div className="popup popup_type_edit">
				<div className="popup__container">
					<button className="popup__button-close button" type="button" aria-label="Закрыть"></button>
					<form name="editProfile" className="popup__form" noValidate>
						<h3 className="popup__title">Редактировать профиль</h3>
						<input id="input-name" name="profileName" className="popup__input popup__input_type_name" type="text"
							placeholder="Имя" required minLength="2" maxLength="40" />
						<span id="input-name-error" className="popup__input-error"></span>
						<input id="input-job" name="profileJob" className="popup__input popup__input_type_job" type="text"
							placeholder="О себе" required minLength="2" maxLength="200" />
						<span id="input-job-error" className="popup__input-error"></span>
						<button className="popup__button-submit button" type="submit"
							aria-label="Сохранить изменения">Сохранить</button>
					</form>
				</div>
			</div> */}

			{/* Попап Добавления Новой Карточки */}
			{/* <div className="popup popup_type_new-card">
				<div className="popup__container">
					<button className="popup__button-close button" type="button" aria-label="Закрыть"></button>
					<form name="addCards" className="popup__form" noValidate>
						<h3 className="popup__title">Новое место</h3>
						<input id="input-title" name="imageName" className="popup__input popup__input_type_title" type="text"
							placeholder="Название" required minLength="2" maxLength="30" />
						<span id="input-title-error" className="popup__input-error"></span>
						<input id="input-img" name="imageLink" className="popup__input popup__input_type_src" type="url"
							placeholder="Ссылка на картинку" required />
						<span id="input-img-error" className="popup__input-error"></span>
						<button className="popup__button-submit button" type="submit" aria-label="Создать карточку">Создать</button>
					</form>
				</div>
			</div> */}

			{/* Попап Смены Аватарки */}
			{/* <div className="popup popup_type_edit-avatar">
				<div className="popup__container">
					<button className="popup__button-close button" type="button" aria-label="Закрыть"></button>
					<form name="editAvatar" className="popup__form" noValidate>
						<h3 className="popup__title">Обновить аватар</h3>
						<input id="input-src" name="imageAvatar" className="popup__input popup__input_type_avatar" type="url"
							placeholder="Ссылка на картинку" required />
						<span id="input-src-error" className="popup__input-error"></span>
						<button className="popup__button-submit button" type="submit"
							aria-label="Сохранить изменения">Сохранить</button>
					</form>
				</div>
			</div> */}

			{/* <!-- Попап Подтверждения Удаления Карточки --> */}
			{/* <div className="popup popup_type_delete-card">
				<div className="popup__container">
					<button className="popup__button-close button" type="button" aria-label="Закрыть"></button>
					<h3 className="popup__title popup__title_type_delete-card">Вы уверены?</h3>
					<button className="popup__button-submit button" type="submit" aria-label="Подтверждение удаления">Да</button>
				</div>
			</div> */}

		</>
	)
}