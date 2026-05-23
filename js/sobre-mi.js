// ==================== SOBRE-MI.JS ====================
// Animaciones e interacciones específicas de la página "Sobre Mí"

document.addEventListener('DOMContentLoaded', () => {
	initializeSkillMeters();
	initializeCertificateModal();
});

function initializeSkillMeters() {
	const meters = document.querySelectorAll('.skill-meter');
	if (meters.length === 0) return;

	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const animateMeter = (meter) => {
		const raw = meter.getAttribute('data-value');
		const value = Number.parseInt(raw ?? '', 10);
		if (!Number.isFinite(value)) return;

		const clamped = Math.max(0, Math.min(100, value));
		meter.style.setProperty('--value', `${clamped}%`);
		meter.dataset.animated = 'true';

		const valueLabel = meter.querySelector('.skill-meter__value');
		if (valueLabel) valueLabel.textContent = `${clamped}%`;

		const track = meter.querySelector('.skill-meter__track');
		if (track) track.setAttribute('aria-valuenow', String(clamped));
	};

	if (prefersReducedMotion) {
		meters.forEach(animateMeter);
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				animateMeter(entry.target);
				observer.unobserve(entry.target);
			});
		},
		{
			threshold: 0.35,
			rootMargin: '0px 0px -10% 0px'
		}
	);

	meters.forEach((meter) => observer.observe(meter));
}

function initializeCertificateModal() {
	const triggers = document.querySelectorAll('[data-cert-src]');
	const modal = document.getElementById('certificateModal');
	if (!modal || triggers.length === 0) return;

	const dialog = modal.querySelector('.certificate-modal__dialog');
	const titleEl = modal.querySelector('#certificateModalTitle');
	const imageEl = modal.querySelector('.certificate-modal__image');
	const closeEls = modal.querySelectorAll('[data-cert-close]');

	if (!dialog || !titleEl || !imageEl) return;

	let lastActiveElement = null;

	const openModal = ({ src, title }) => {
		lastActiveElement = document.activeElement;

		titleEl.textContent = title ?? '';
		imageEl.src = src;
		imageEl.alt = title ?? 'Certificado';

		modal.hidden = false;
		document.body.classList.add('certificate-modal-open');

		const closeButton = modal.querySelector('.certificate-modal__close');
		closeButton?.focus();
	};

	const closeModal = () => {
		modal.hidden = true;
		document.body.classList.remove('certificate-modal-open');

		imageEl.removeAttribute('src');
		imageEl.alt = '';

		if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
			lastActiveElement.focus();
		}
	};

	triggers.forEach((trigger) => {
		trigger.addEventListener('click', () => {
			const src = trigger.getAttribute('data-cert-src');
			if (!src) return;
			const title = trigger.getAttribute('data-cert-title') || trigger.textContent?.trim();
			openModal({ src, title });
		});
	});

	closeEls.forEach((el) => {
		el.addEventListener('click', closeModal);
	});

	document.addEventListener('keydown', (e) => {
		if (modal.hidden) return;
		if (e.key === 'Escape') {
			e.preventDefault();
			closeModal();
		}
	});

	// Cierra si hacen click afuera del dialog
	modal.addEventListener('click', (e) => {
		if (e.target === modal) closeModal();
	});
}
