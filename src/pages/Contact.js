import React from 'react';

const Contact = () => {
	return (
		<div className='container contact-page'>
			<h1 className='contact-title'>Контакты</h1>
			<p className='contact-description'>Свяжитесь с нами:</p>
			<ul className='contact-info'>
				<li>Телефон: +7 (123) 456-78-90</li>
				<li>Email: info@example.com</li>
				<li>Адрес: ул. Примерная, д. 1, Москва, Россия</li>
			</ul>
			<form className='contact-form'>
				<div className='form-group'>
					<label htmlFor='name'>Ваше имя:</label>
					<input type='text' id='name' name='name' placeholder='Введите ваше имя' />
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Ваш email:</label>
					<input type='email' id='email' name='email' placeholder='Введите ваш email' />
				</div>
				<div className='form-group'>
					<label htmlFor='message'>Сообщение:</label>
					<textarea id='message' name='message' placeholder='Введите ваше сообщение'></textarea>
				</div>
				<button type='submit' className='contact-button'>Отправить</button>
			</form>
		</div>
	);
};

export default Contact;