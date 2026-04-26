// ==================== CURSOR EFFECTS ====================
// Efectos visuales personalizados en el cursor

const CursorEffects = {
	init() {
		if (window.innerWidth <= 768) return; // No en dispositivos móviles
		
		this.createCustomCursor();
		this.trackMouse();
		this.addCursorInteractions();
	},

	createCustomCursor() {
		// Crear elementos del cursor personalizado
		const cursorDot = document.createElement('div');
		cursorDot.classList.add('cursor-dot');
		
		const cursorCircle = document.createElement('div');
		cursorCircle.classList.add('cursor-circle');
		
		document.body.appendChild(cursorDot);
		document.body.appendChild(cursorCircle);

		this.cursorDot = cursorDot;
		this.cursorCircle = cursorCircle;
	},

	trackMouse() {
		document.addEventListener('mousemove', (e) => {
			const x = e.clientX;
			const y = e.clientY;

			// Actualizar posición del punto
			this.cursorDot.style.left = x + 'px';
			this.cursorDot.style.top = y + 'px';

			// Actualizar posición del círculo con delay
			setTimeout(() => {
				this.cursorCircle.style.left = x + 'px';
				this.cursorCircle.style.top = y + 'px';
			}, 5);
		});

		// Ocultar cursor al salir de la ventana
		document.addEventListener('mouseenter', () => {
			this.cursorDot.style.opacity = '1';
			this.cursorCircle.style.opacity = '1';
		});

		document.addEventListener('mouseleave', () => {
			this.cursorDot.style.opacity = '0';
			this.cursorCircle.style.opacity = '0';
		});
	},

	addCursorInteractions() {
		const hoverElements = document.querySelectorAll('a, button, .work-card, .portfolio-card, input, textarea');

		hoverElements.forEach(el => {
			el.addEventListener('mouseenter', () => {
				this.cursorCircle.classList.add('active');
				this.cursorDot.classList.add('active');
			});

			el.addEventListener('mouseleave', () => {
				this.cursorCircle.classList.remove('active');
				this.cursorDot.classList.remove('active');
			});
		});
	}
};

// ==================== PARALLAX EFFECT ====================
// Efecto parallax en scroll

const ParallaxEffect = {
	elements: [],

	init() {
		this.elements = document.querySelectorAll('[data-parallax]');
		if (this.elements.length === 0) return;

		window.addEventListener('scroll', () => this.update());
	},

	update() {
		const scrollY = window.scrollY;

		this.elements.forEach(el => {
			const parallaxValue = el.getAttribute('data-parallax');
			const offset = scrollY * parallaxValue;
			el.style.transform = `translateY(${offset}px)`;
		});
	}
};

// ==================== REVEAL ON SCROLL ====================
// Revelar elementos con animación al scrollear

const RevealOnScroll = {
	init() {
		const revealElements = document.querySelectorAll('[data-reveal]');
		if (revealElements.length === 0) return;

		const observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -100px 0px'
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('revealed');
					observer.unobserve(entry.target);
				}
			});
		}, observerOptions);

		revealElements.forEach(el => observer.observe(el));
	}
};

// ==================== SCROLL COUNT ====================
// Contador animado al scrollear

const ScrollCounter = {
	init() {
		const counters = document.querySelectorAll('[data-count]');
		if (counters.length === 0) return;

		const observerOptions = {
			threshold: 0.5
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting && !entry.target.dataset.counted) {
					this.animateCounter(entry.target);
					entry.target.dataset.counted = 'true';
					observer.unobserve(entry.target);
				}
			});
		}, observerOptions);

		counters.forEach(counter => observer.observe(counter));
	},

	animateCounter(element) {
		const target = parseInt(element.getAttribute('data-count'));
		const duration = 2000; // 2 segundos
		const increment = target / (duration / 16); // 60fps
		let current = 0;

		const timer = setInterval(() => {
			current += increment;
			if (current >= target) {
				element.textContent = target;
				clearInterval(timer);
			} else {
				element.textContent = Math.floor(current);
			}
		}, 16);
	}
};

// ==================== MORPHING BUTTONS ====================
// Botones con efectos morfológicos

const MorphingButtons = {
	init() {
		const buttons = document.querySelectorAll('[data-morph]');
		if (buttons.length === 0) return;

		buttons.forEach(btn => {
			btn.addEventListener('mouseenter', () => {
				btn.classList.add('morphing');
			});

			btn.addEventListener('mouseleave', () => {
				btn.classList.remove('morphing');
			});
		});
	}
};

// ==================== SCROLL PROGRESS BAR ====================
// Barra de progreso de scroll

const ScrollProgressBar = {
	init() {
		this.createProgressBar();
		window.addEventListener('scroll', () => this.updateProgress());
	},

	createProgressBar() {
		const progressBar = document.createElement('div');
		progressBar.classList.add('scroll-progress-bar');
		document.body.appendChild(progressBar);
		this.progressBar = progressBar;
	},

	updateProgress() {
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		const progress = (scrollTop / docHeight) * 100;

		this.progressBar.style.width = progress + '%';
	}
};

// ==================== FORM FOCUS EFFECT ====================
// Efectos en inputs del formulario

const FormFocusEffect = {
	init() {
		const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');

		inputs.forEach(input => {
			input.addEventListener('focus', function() {
				this.parentElement.classList.add('focused');
			});

			input.addEventListener('blur', function() {
				if (!this.value) {
					this.parentElement.classList.remove('focused');
				}
			});

			input.addEventListener('input', function() {
				if (this.value) {
					this.parentElement.classList.add('focused');
				}
			});
		});
	}
};

// ==================== FLOATING LABELS ====================
// Labels flotantes en inputs

const FloatingLabels = {
	init() {
		const formGroups = document.querySelectorAll('.form-group');

		formGroups.forEach(group => {
			const input = group.querySelector('input, textarea');
			const label = group.querySelector('label');

			if (!input || !label) return;

			input.addEventListener('focus', () => {
				label.classList.add('floating');
			});

			input.addEventListener('blur', () => {
				if (!input.value) {
					label.classList.remove('floating');
				}
			});

			if (input.value) {
				label.classList.add('floating');
			}
		});
	}
};

// ==================== PAGE TRANSITION ====================
// Transiciones entre páginas

const PageTransition = {
	init() {
		const links = document.querySelectorAll('a:not([href^="http"]):not([href^="mailto"]):not([href^="tel"]):not([href^="#"])[href$=".html"]');

		links.forEach(link => {
			link.addEventListener('click', (e) => {
				e.preventDefault();
				this.transitionTo(link.href);
			});
		});
	},

	transitionTo(url) {
		const transitionElement = document.createElement('div');
		transitionElement.classList.add('page-transition');
		document.body.appendChild(transitionElement);

		setTimeout(() => {
			window.location.href = url;
		}, 300);
	}
};

// ==================== BACK TO TOP BUTTON ====================
// Botón flotante para volver al inicio

const BackToTopButton = {
	init() {
		this.createButton();
		window.addEventListener('scroll', () => this.toggleButton());
		this.button.addEventListener('click', () => this.scrollToTop());
	},

	createButton() {
		const btn = document.createElement('button');
		btn.classList.add('back-to-top');
		btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
		btn.setAttribute('aria-label', 'Volver al inicio');
		document.body.appendChild(btn);
		this.button = btn;
	},

	toggleButton() {
		if (window.scrollY > 300) {
			this.button.classList.add('visible');
		} else {
			this.button.classList.remove('visible');
		}
	},

	scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
};

// ==================== NOTIFICATION SYSTEM ====================
// Sistema de notificaciones

const NotificationSystem = {
	show(message, type = 'info', duration = 3000) {
		const notification = document.createElement('div');
		notification.classList.add('notification', `notification-${type}`);
		notification.textContent = message;
		
		document.body.appendChild(notification);

		// Animar entrada
		setTimeout(() => notification.classList.add('show'), 10);

		// Remover automáticamente
		setTimeout(() => {
			notification.classList.remove('show');
			setTimeout(() => notification.remove(), 300);
		}, duration);
	},

	success(message) {
		this.show(message, 'success');
	},

	error(message) {
		this.show(message, 'error');
	},

	warning(message) {
		this.show(message, 'warning');
	}
};

// ==================== INICIALIZAR TODOS LOS EFECTOS ====================

document.addEventListener('DOMContentLoaded', () => {
	CursorEffects.init();
	ParallaxEffect.init();
	RevealOnScroll.init();
	ScrollCounter.init();
	MorphingButtons.init();
	ScrollProgressBar.init();
	FormFocusEffect.init();
	FloatingLabels.init();
	PageTransition.init();
	BackToTopButton.init();
});

// Exportar para uso en otros scripts si es necesario
if (typeof module !== 'undefined' && module.exports) {
	module.exports = {
		CursorEffects,
		ParallaxEffect,
		RevealOnScroll,
		ScrollCounter,
		MorphingButtons,
		ScrollProgressBar,
		FormFocusEffect,
		FloatingLabels,
		PageTransition,
		BackToTopButton,
		NotificationSystem
	};
}
