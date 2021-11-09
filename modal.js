const modal = document.querySelectorAll('.modal');
const modalOpenBtn = document.querySelectorAll('[data-modal]');
const modalCloseBtn = document.querySelectorAll('.modal__close');


const openModal = function (modal) {
	modal.classList.add('show-modal');
	let modalContent = modal.querySelector('.modal__content')
	setTimeout(() => {
		modalContent.style.transform = 'none';
		modalContent.style.opacity = '1';
	}, 1);
}

const closeModal = function (modal) {
	let modalContent = modal.querySelector('.modal__content')
	modalContent.removeAttribute('style');
	setTimeout(() => {
		modal.classList.remove('show-modal');
	}, 200)
}

modalOpenBtn.forEach(el => {
	el.addEventListener('click', event => {
		let modalId = el.getAttribute('data-modal');
		let currentModal = document.getElementById(modalId);
		openModal(currentModal);
	});
});

modalCloseBtn.forEach(el => {
	el.addEventListener('click', event => {
		let currentModal = event.target.closest('.modal');
		closeModal(currentModal);
	});
});

modal.forEach(el => {
	el.addEventListener('click', event => {
		let modalContent = event.target.closest('.modal__content');
		if (!modalContent) {
			closeModal(el);
		}
	})
})

