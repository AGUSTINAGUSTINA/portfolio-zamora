// ==================== SOBRE-MI.JS ====================
// Animaciones e interacciones específicas de la página "Sobre Mí"

document.addEventListener('DOMContentLoaded', () => {
	initializeSkillMeters();
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

