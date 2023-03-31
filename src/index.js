import 'normalize.css'
import './styles/main.scss';

// modal

const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close')

modalBtn.forEach(item => {
	item.addEventListener('click', event => {
		let $this = event.currentTarget;
		let modalId = $this.getAttribute('data-modal');
		let modal = document.getElementById(modalId);

		modal.classList.add('show');
		body.classList.add('no-scroll');
	});
});

modalClose.forEach(item => {
	item.addEventListener('click', event => {
		let currentModal = event.currentTarget.closest('.modal');

		currentModal.classList.remove('show');
		body.classList.remove('no-scroll');
	});
});

// MOBILE BURGER

const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const page = document.getElementById('page');
// const BODY = document.body;

burger.addEventListener("click", event => {
	if (body.classList.contains('show-sidebar')) {
		closeSidebar();
	} else {
		showSidebar();
	}
});

function showSidebar() {
	let mask = document.createElement('div');
	mask.classList.add('page__mask');
	mask.addEventListener('click', closeSidebar);
	page.appendChild(mask);

	body.classList.add('show-sidebar');
}
function closeSidebar() {
	body.classList.remove('show-sidebar');
	document.querySelector('.page__mask').remove();
}