// ==================== SPLIT SCREEN EFFECTS ====================
// Efectos interactivos para la sección de pantalla dividida

const SplitScreenEffects = {
	leftPanel: null,
	rightPanel: null,
	container: null,
	isHovering: false,

	init() {
		this.leftPanel = document.getElementById('uxuiPanel');
		this.rightPanel = document.getElementById('devPanel');
		this.container = document.querySelector('.split-container');

		if (!this.leftPanel || !this.rightPanel) return;

		this.setupListeners();
		this.setupTouchSupport();
	},

	setupListeners() {
		// Solo agregar listeners en desktop
		if (window.innerWidth > 991) {
			this.leftPanel.addEventListener('mouseenter', () => this.expandLeft());
			this.leftPanel.addEventListener('mouseleave', () => this.reset());

			this.rightPanel.addEventListener('mouseenter', () => this.expandRight());
			this.rightPanel.addEventListener('mouseleave', () => this.reset());

			// Escuchar cambios de tamaño de ventana
			window.addEventListener('resize', () => {
				if (window.innerWidth <= 991) {
					this.reset();
				}
			});
		}

		// Soporte para touch en mobile
		this.leftPanel.addEventListener('click', () => this.expandLeft());
		this.rightPanel.addEventListener('click', () => this.expandRight());
	},

	setupTouchSupport() {
		if (!this.isTouchDevice()) return;

		// En dispositivos touch, permitir tocar para expandir
		this.leftPanel.addEventListener('touchend', (e) => {
			e.preventDefault();
			this.expandLeft();
		});

		this.rightPanel.addEventListener('touchend', (e) => {
			e.preventDefault();
			this.expandRight();
		});
	},

	expandLeft() {
		if (window.innerWidth <= 991) return; // Solo en desktop

		this.isHovering = true;

		// Expandir izquierda
		this.leftPanel.style.flex = '1.3';
		this.leftPanel.style.zIndex = '10';
		this.leftPanel.style.opacity = '1';

		// Contraer derecha
		this.rightPanel.style.flex = '0.7';
		this.rightPanel.style.opacity = '0.7';
		this.rightPanel.style.zIndex = '1';

		// Actualizar overlay
		const leftOverlay = this.leftPanel.querySelector('.split-overlay');
		const rightOverlay = this.rightPanel.querySelector('.split-overlay');

		if (leftOverlay) {
			leftOverlay.style.background = 'transparent';
		}
		if (rightOverlay) {
			rightOverlay.style.background = 'transparent';
		}

		// Actualizar contenido
		const leftContent = this.leftPanel.querySelector('.split-content');
		const rightContent = this.rightPanel.querySelector('.split-content');

		if (leftContent) {
			leftContent.style.opacity = '1';
			leftContent.style.transform = 'scale(1)';
		}
		if (rightContent) {
			rightContent.style.opacity = '0.3';
			rightContent.style.transform = 'scale(0.8)';
		}

		// Animar background
		const leftBg = this.leftPanel.querySelector('.split-background');
		if (leftBg) {
			leftBg.style.transform = 'scale(1.05)';
		}
	},

	expandRight() {
		if (window.innerWidth <= 991) return; // Solo en desktop

		this.isHovering = true;

		// Expandir derecha
		this.rightPanel.style.flex = '1.3';
		this.rightPanel.style.zIndex = '10';
		this.rightPanel.style.opacity = '1';

		// Contraer izquierda
		this.leftPanel.style.flex = '0.7';
		this.leftPanel.style.opacity = '0.7';
		this.leftPanel.style.zIndex = '1';

		// Actualizar overlay
		const leftOverlay = this.leftPanel.querySelector('.split-overlay');
		const rightOverlay = this.rightPanel.querySelector('.split-overlay');

		if (leftOverlay) {
			leftOverlay.style.background = 'transparent';
		}
		if (rightOverlay) {
			rightOverlay.style.background = 'transparent';
		}

		// Actualizar contenido
		const leftContent = this.leftPanel.querySelector('.split-content');
		const rightContent = this.rightPanel.querySelector('.split-content');

		if (leftContent) {
			leftContent.style.opacity = '0.3';
			leftContent.style.transform = 'scale(0.8)';
		}
		if (rightContent) {
			rightContent.style.opacity = '1';
			rightContent.style.transform = 'scale(1)';
		}

		// Animar background
		const rightBg = this.rightPanel.querySelector('.split-background');
		if (rightBg) {
			rightBg.style.transform = 'scale(1.05)';
		}
	},

	reset() {
		if (window.innerWidth <= 991) return;

		this.isHovering = false;

		// Resetear flex
		this.leftPanel.style.flex = '1';
		this.rightPanel.style.flex = '1';

		this.leftPanel.style.zIndex = '1';
		this.rightPanel.style.zIndex = '1';

		// Resetear opacidad
		this.leftPanel.style.opacity = '1';
		this.rightPanel.style.opacity = '1';

		// Resetear overlays
		const leftOverlay = this.leftPanel.querySelector('.split-overlay');
		const rightOverlay = this.rightPanel.querySelector('.split-overlay');

		if (leftOverlay) {
			leftOverlay.style.background = 'transparent';
		}
		if (rightOverlay) {
			rightOverlay.style.background = 'transparent';
		}

		// Resetear contenido
		const allContent = document.querySelectorAll('.split-panel .split-content');
		allContent.forEach(content => {
			content.style.opacity = '1';
			content.style.transform = 'scale(1)';
		});

		// Resetear backgrounds
		const allBgs = document.querySelectorAll('.split-panel .split-background');
		allBgs.forEach(bg => {
			bg.style.transform = 'scale(1)';
		});
	},

	isTouchDevice() {
		return (('ontouchstart' in window) ||
				(navigator.maxTouchPoints > 0) ||
				(navigator.msMaxTouchPoints > 0));
	}
};

// ==================== PARALLAX EFFECT ON SPLIT SCREEN ====================

const SplitParallax = {
	init() {
		const panels = document.querySelectorAll('.split-panel');
		if (panels.length === 0) return;

		window.addEventListener('mousemove', (e) => {
			if (window.innerWidth <= 991) return;

			const x = (e.clientX / window.innerWidth - 0.5) * 20; // -10 a 10
			const y = (e.clientY / window.innerHeight - 0.5) * 20; // -10 a 10

			panels.forEach(panel => {
				const bg = panel.querySelector('.split-background');
				if (bg) {
					bg.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
				}
			});
		});
	}
};

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================

const SplitAnimations = {
	init() {
		const panels = document.querySelectorAll('.split-panel');
		if (panels.length === 0) return;

		const observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -100px 0px'
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const animationName = entry.target.classList.contains('split-left') ? 'slideInLeft' : 'slideInRight';
					entry.target.style.animation = `${animationName} 0.8s ease-out forwards`;
				}
			});
		}, observerOptions);

		panels.forEach(panel => observer.observe(panel));
	}
};

// ==================== KEYBOARD NAVIGATION ====================

const SplitKeyboard = {
	init() {
		document.addEventListener('keydown', (e) => {
			const leftPanel = document.getElementById('uxuiPanel');
			const rightPanel = document.getElementById('devPanel');

			if (!leftPanel || !rightPanel) return;

			if (e.key === 'ArrowLeft') {
				SplitScreenEffects.expandLeft();
			} else if (e.key === 'ArrowRight') {
				SplitScreenEffects.expandRight();
			} else if (e.key === 'Escape') {
				SplitScreenEffects.reset();
			}
		});
	}
};

// ==================== CLICK OUTSIDE TO RESET ====================

document.addEventListener('DOMContentLoaded', () => {
	const container = document.querySelector('.split-container');
	if (!container) return;

	document.addEventListener('click', (e) => {
		// Si hace click fuera de los paneles, resetear
		if (!container.contains(e.target) && window.innerWidth > 991) {
			SplitScreenEffects.reset();
		}
	});
});

// ==================== INICIALIZAR TODO ====================

document.addEventListener('DOMContentLoaded', () => {
	SplitScreenEffects.init();
	SplitParallax.init();
	SplitAnimations.init();
	SplitKeyboard.init();

	console.log('Split Screen Effects iniciado ✓');
});

// Exportar para otros scripts
if (typeof module !== 'undefined' && module.exports) {
	module.exports = {
		SplitScreenEffects,
		SplitParallax,
		SplitAnimations,
		SplitKeyboard
	};
}


