// ==================== MAIN.JS ====================
// Archivo principal que coordina toda la interactividad

document.addEventListener('DOMContentLoaded', function() {
	initializeApp();
});

function initializeApp() {
	// Inicializar AOS (Animate On Scroll)
	AOS.init({
		duration: 800,
		easing: 'ease-in-out-quart',
		once: true,
		offset: 100
	});

	// Inicializar módulos
	SmoothScroll.init();
	MobileMenu.init();
	FilterPortfolio.init();
	FormValidation.init();
	InteractiveElements.init();
	VideoHandler.init();
	ScrollIndicator.init();
	
	// Observar cambios de tema
	observeDarkMode();
	
	// Logs de desarrollo
	console.log('Portfolio aplicación iniciada ✓');
}

// ==================== SMOOTH SCROLL ====================

const SmoothScroll = {
	init() {
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', (e) => {
				e.preventDefault();
				const target = document.querySelector(anchor.getAttribute('href'));
				if (target) {
					target.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});
					
					// Cerrar menú móvil si está abierto
					const navbarCollapse = document.querySelector('.navbar-collapse');
					if (navbarCollapse && navbarCollapse.classList.contains('show')) {
						const toggler = document.querySelector('.navbar-toggler');
						toggler.click();
					}
				}
			});
		});
	}
};

// ==================== MOBILE MENU ====================

const MobileMenu = {
	init() {
		const toggler = document.querySelector('.navbar-toggler');
		if (!toggler) return;

		toggler.addEventListener('click', () => {
			this.toggleMenu();
		});

		// Cerrar menú al hacer click en un link
		document.querySelectorAll('.navbar-collapse a').forEach(link => {
			link.addEventListener('click', () => {
				this.closeMenu();
			});
		});

		// Cerrar menú al hacer scroll
		document.addEventListener('scroll', () => {
			this.closeMenu();
		});
	},

	toggleMenu() {
		const navbar = document.querySelector('.navbar-collapse');
		navbar.classList.toggle('show');
	},

	closeMenu() {
		const navbar = document.querySelector('.navbar-collapse');
		navbar.classList.remove('show');
	}
};

// ==================== FILTER PORTFOLIO ====================

const FilterPortfolio = {
	init() {
		const filterButtons = document.querySelectorAll('.filter-btn');
		if (filterButtons.length === 0) return;

		// Solo si Isotope está disponible
		if (typeof Isotope !== 'undefined') {
			this.initIsotope();
			this.setupFilters();
		}
	},

	initIsotope() {
		const grid = document.querySelector('.portfolio-grid');
		if (!grid) return;

		this.iso = new Isotope(grid, {
			itemSelector: '.portfolio-item',
			layoutMode: 'masonry',
			percentPosition: true,
			masonry: {
				columnWidth: '.portfolio-item'
			}
		});

		// Re-layout en cambios de ventana
		window.addEventListener('resize', () => {
			this.iso.layout();
		});
	},

	setupFilters() {
		const filterButtons = document.querySelectorAll('.filter-btn');
		
		filterButtons.forEach(button => {
			button.addEventListener('click', (e) => {
				e.preventDefault();
				
				// Actualizar estado activo
				filterButtons.forEach(btn => btn.classList.remove('active'));
				button.classList.add('active');

				// Filtrar
				const filterValue = button.getAttribute('data-filter');
				this.iso.arrange({
					filter: filterValue
				});

				// Animar items
				AOS.refresh();
			});
		});
	}
};

// ==================== FORM VALIDATION ====================

const FormValidation = {
	init() {
		const form = document.querySelector('form');
		if (!form) return;

		form.addEventListener('submit', (e) => {
			if (!this.validate(form)) {
				e.preventDefault();
			}
		});

		// Validación en tiempo real
		form.querySelectorAll('input, textarea').forEach(field => {
			field.addEventListener('blur', () => {
				this.validateField(field);
			});

			field.addEventListener('input', () => {
				if (field.classList.contains('error')) {
					this.validateField(field);
				}
			});
		});
	},

	validate(form) {
		let isValid = true;
		const fields = form.querySelectorAll('input, textarea');

		fields.forEach(field => {
			if (!this.validateField(field)) {
				isValid = false;
			}
		});

		return isValid;
	},

	validateField(field) {
		const value = field.value.trim();
		const type = field.type;
		let isValid = true;

		// Validaciones
		if (!value) {
			isValid = false;
		} else if (type === 'email') {
			isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
		} else if (field.name === 'message') {
			isValid = value.length >= 10;
		}

		// Mostrar/ocultar error
		const errorElement = field.parentElement.querySelector('.error-message');
		if (!isValid) {
			field.classList.add('error');
			if (errorElement) errorElement.style.display = 'block';
		} else {
			field.classList.remove('error');
			if (errorElement) errorElement.style.display = 'none';
		}

		return isValid;
	}
};

// ==================== INTERACTIVE ELEMENTS ====================

const InteractiveElements = {
	init() {
		this.addHoverEffects();
		this.addScrollAnimations();
		this.addButtonInteractions();
	},

	addHoverEffects() {
		const cards = document.querySelectorAll('.work-card, .portfolio-card, .specialty-card');
		
		cards.forEach(card => {
			card.addEventListener('mouseenter', () => {
				card.style.transform = 'translateY(-8px)';
			});

			card.addEventListener('mouseleave', () => {
				card.style.transform = 'translateY(0)';
			});
		});
	},

	addScrollAnimations() {
		window.addEventListener('scroll', () => {
			this.updateNavbarOnScroll();
			this.updateScrollProgress();
		});
	},

	updateNavbarOnScroll() {
		const navbar = document.querySelector('.navbar-minimal');
		if (!navbar) return;

		if (window.scrollY > 50) {
			navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
		} else {
			navbar.style.boxShadow = 'none';
		}
	},

	updateScrollProgress() {
		const navbar = document.querySelector('.navbar-minimal');
		if (!navbar) return;

		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		const scrollPercent = scrollTop / docHeight;

		// Puede usarse para indicador visual
	},

	addButtonInteractions() {
		const buttons = document.querySelectorAll('.btn');
		
		buttons.forEach(btn => {
			btn.addEventListener('click', function(e) {
				// Efecto ripple
				const ripple = document.createElement('span');
				const rect = this.getBoundingClientRect();
				const size = Math.max(rect.width, rect.height);
				const x = e.clientX - rect.left - size / 2;
				const y = e.clientY - rect.top - size / 2;

				ripple.style.width = ripple.style.height = size + 'px';
				ripple.style.left = x + 'px';
				ripple.style.top = y + 'px';
				ripple.classList.add('ripple');

				// Limpiar ripples antiguos
				const oldRipples = this.querySelectorAll('.ripple');
				oldRipples.forEach(r => r.remove());

				this.appendChild(ripple);
			});
		});
	}
};

// ==================== VIDEO HANDLER ====================

const VideoHandler = {
	init() {
		const videos = document.querySelectorAll('.hero-video');
		if (videos.length === 0) return;

		videos.forEach(video => {
			const getPlaybackRate = () => {
				const raw = video.getAttribute('data-playback-rate') ?? video.dataset.playbackRate;
				const parsed = Number.parseFloat(raw ?? '');
				if (!Number.isFinite(parsed)) return null;
				return Math.max(0.1, Math.min(2, parsed));
			};

			const applyPlaybackRate = () => {
				const rate = getPlaybackRate();
				if (rate == null) return;
				video.defaultPlaybackRate = rate;
				video.playbackRate = rate;
			};

			video.addEventListener('loadedmetadata', () => {
				applyPlaybackRate();
				// Video cargado correctamente
				console.log('Video cargado');
			});

			// Algunos navegadores reestablecen playbackRate al iniciar el play
			video.addEventListener('play', () => {
				applyPlaybackRate();
			});

			video.addEventListener('error', () => {
				// Fallback si el video no carga
				this.showFallback(video);
			});
		});
	},

	showFallback(video) {
		const fallback = video.nextElementSibling;
		if (fallback && fallback.classList.contains('hero-fallback')) {
			fallback.style.display = 'block';
		}
	}
};

// ==================== SCROLL INDICATOR ====================

const ScrollIndicator = {
	init() {
		const indicator = document.querySelector('.scroll-indicator');
		if (!indicator) return;

		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				indicator.style.opacity = '0';
				indicator.style.pointerEvents = 'none';
			} else {
				indicator.style.opacity = '1';
				indicator.style.pointerEvents = 'auto';
			}
		});
	}
};

// ==================== DARK MODE / THEME ====================

function observeDarkMode() {
	// Detectar preferencia del sistema
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		// El usuario prefiere modo oscuro
		// Aquí puedes agregar lógica para modo oscuro
	}

	// Escuchar cambios
	window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
		if (e.matches) {
			// Cambiar a modo oscuro
		} else {
			// Cambiar a modo claro
		}
	});
}

// ==================== PERFORMANCE ====================

// Lazy loading de imágenes
if ('IntersectionObserver' in window) {
	const imageObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const img = entry.target;
				img.src = img.dataset.src;
				img.classList.add('loaded');
				observer.unobserve(img);
			}
		});
	});

	document.querySelectorAll('img[data-src]').forEach(img => {
		imageObserver.observe(img);
	});
}

// Gestión de memoria
window.addEventListener('beforeunload', () => {
	// Limpiar event listeners si es necesario
	SmoothScroll = null;
	MobileMenu = null;
	FilterPortfolio = null;
});
