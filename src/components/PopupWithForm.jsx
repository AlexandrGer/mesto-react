import React from "react";

export const PopupWithForm = ({ name, title, buttonText, isOpen, onClose, children, onSubmit }) => {
	return (
		<div className={isOpen ? `popup popup_opened popup_type_${name}` : `popup popup_type_${name}`}>
			<div className="popup__container">
				<button
					className="popup__button-close button"
					type="button"
					aria-label="Закрыть"
					onClick={onClose}>
				</button>

				<form name={name} className="popup__form" noValidate onSubmit={onSubmit}>
					<h3 className="popup__title">{title}</h3>
					{children}
					<button
						className="popup__button-submit button"
						type="submit"
						aria-label="Подтвердить">
						{buttonText}
					</button>
				</form>
			</div>
		</div >
	)
}