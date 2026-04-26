// ==================== UTILITIES.JS ====================
// Utilidades y funciones helper

// ==================== DEBOUNCE ====================
function debounce(func, wait) {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

// ==================== THROTTLE ====================
function throttle(func, limit) {
	let inThrottle;
	return function(...args) {
		if (!inThrottle) {
			func.apply(this, args);
			inThrottle = true;
			setTimeout(() => inThrottle = false, limit);
		}
	};
}

// ==================== ANIMATION FRAME ====================
function onNextFrame(callback) {
	return requestAnimationFrame(callback);
}

// ==================== QUERY SELECTORS ====================
function qs(selector) {
	return document.querySelector(selector);
}

function qsa(selector) {
	return document.querySelectorAll(selector);
}

// ==================== CLASS MANIPULATION ====================
function addClass(element, className) {
	if (Array.isArray(element)) {
		element.forEach(el => el.classList.add(className));
	} else {
		element.classList.add(className);
	}
}

function removeClass(element, className) {
	if (Array.isArray(element)) {
		element.forEach(el => el.classList.remove(className));
	} else {
		element.classList.remove(className);
	}
}

function toggleClass(element, className) {
	if (Array.isArray(element)) {
		element.forEach(el => el.classList.toggle(className));
	} else {
		element.classList.toggle(className);
	}
}

function hasClass(element, className) {
	return element.classList.contains(className);
}

// ==================== ELEMENT CREATION ====================
function createElement(tag, className = '', innerHTML = '') {
	const el = document.createElement(tag);
	if (className) el.className = className;
	if (innerHTML) el.innerHTML = innerHTML;
	return el;
}

// ==================== GET OFFSET ====================
function getOffset(element) {
	const rect = element.getBoundingClientRect();
	return {
		top: rect.top + window.scrollY,
		left: rect.left + window.scrollX,
		width: rect.width,
		height: rect.height
	};
}

// ==================== IS ELEMENT IN VIEWPORT ====================
function isElementInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
		rect.bottom >= 0 &&
		rect.right >= 0
	);
}

// ==================== SCROLL TO ELEMENT ====================
function scrollToElement(element, offset = 0) {
	const elementOffset = getOffset(element).top;
	window.scrollTo({
		top: elementOffset - offset,
		behavior: 'smooth'
	});
}

// ==================== GET SCROLL POSITION ====================
function getScrollPosition() {
	return {
		x: window.scrollX || window.pageXOffset,
		y: window.scrollY || window.pageYOffset
	};
}

// ==================== ANIMATE VALUE ====================
function animateValue(element, start, end, duration, callback) {
	const range = end - start;
	const increment = range / (duration / 16); // 60fps
	let current = start;

	const timer = setInterval(() => {
		current += increment;
		if (current >= end) {
			element.textContent = end;
			clearInterval(timer);
			if (callback) callback();
		} else {
			element.textContent = Math.floor(current);
		}
	}, 16);
}

// ==================== STORAGE ====================
const Storage = {
	set(key, value) {
		try {
			localStorage.setItem(key, JSON.stringify(value));
			return true;
		} catch (error) {
			console.error('Error al guardar en localStorage:', error);
			return false;
		}
	},

	get(key) {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : null;
		} catch (error) {
			console.error('Error al obtener de localStorage:', error);
			return null;
		}
	},

	remove(key) {
		try {
			localStorage.removeItem(key);
			return true;
		} catch (error) {
			console.error('Error al remover de localStorage:', error);
			return false;
		}
	},

	clear() {
		try {
			localStorage.clear();
			return true;
		} catch (error) {
			console.error('Error al limpiar localStorage:', error);
			return false;
		}
	}
};

// ==================== API REQUESTS ====================
async function fetchJSON(url, options = {}) {
	try {
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				...options.headers
			},
			...options
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Error en fetch:', error);
		throw error;
	}
}

// ==================== FORM UTILITIES ====================
function serializeForm(form) {
	const formData = new FormData(form);
	const object = {};
	
	for (let [key, value] of formData.entries()) {
		object[key] = value;
	}
	
	return object;
}

function fillForm(form, data) {
	Object.keys(data).forEach(key => {
		const input = form.querySelector(`[name="${key}"]`);
		if (input) {
			if (input.type === 'checkbox' || input.type === 'radio') {
				input.checked = data[key];
			} else {
				input.value = data[key];
			}
		}
	});
}

// ==================== CLIPBOARD ====================
async function copyToClipboard(text) {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch (error) {
		console.error('Error al copiar:', error);
		return false;
	}
}

// ==================== READABLE TIME ====================
function formatDate(date, format = 'DD/MM/YYYY') {
	const d = new Date(date);
	const day = String(d.getDate()).padStart(2, '0');
	const month = String(d.getMonth() + 1).padStart(2, '0');
	const year = d.getFullYear();

	return format
		.replace('DD', day)
		.replace('MM', month)
		.replace('YYYY', year);
}

function timeAgo(date) {
	const now = new Date();
	const diff = now - new Date(date);
	const seconds = Math.floor(diff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);

	if (seconds < 60) return 'hace unos segundos';
	if (minutes < 60) return `hace ${minutes} minuto${minutes > 1 ? 's' : ''}`;
	if (hours < 24) return `hace ${hours} hora${hours > 1 ? 's' : ''}`;
	if (days < 30) return `hace ${days} día${days > 1 ? 's' : ''}`;

	return formatDate(date);
}

// ==================== ANIMATIONS ====================
function fadeIn(element, duration = 300) {
	element.style.opacity = '0';
	element.style.transition = `opacity ${duration}ms`;
	
	setTimeout(() => {
		element.style.opacity = '1';
	}, 10);
}

function fadeOut(element, duration = 300) {
	element.style.transition = `opacity ${duration}ms`;
	element.style.opacity = '0';

	setTimeout(() => {
		element.style.display = 'none';
	}, duration);
}

function slideUp(element, duration = 300) {
	element.style.transition = `max-height ${duration}ms`;
	element.style.maxHeight = element.scrollHeight + 'px';
}

function slideDown(element, duration = 300) {
	element.style.transition = `max-height ${duration}ms`;
	element.style.maxHeight = '0';
}

// ==================== DEVICE DETECTION ====================
const Device = {
	isMobile() {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	},

	isTablet() {
		return /iPad|Android(?!.*Mobile)|Tablet/i.test(navigator.userAgent);
	},

	isDesktop() {
		return !this.isMobile() && !this.isTablet();
	},

	isTouchDevice() {
		return (('ontouchstart' in window) ||
				(navigator.maxTouchPoints > 0) ||
				(navigator.msMaxTouchPoints > 0));
	}
};

// ==================== BROWSER DETECTION ====================
const Browser = {
	getName() {
		const ua = navigator.userAgent;
		
		if (ua.indexOf('Firefox') > -1) return 'Firefox';
		if (ua.indexOf('Chrome') > -1) return 'Chrome';
		if (ua.indexOf('Safari') > -1) return 'Safari';
		if (ua.indexOf('Edge') > -1) return 'Edge';
		if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1) return 'IE';
		
		return 'Unknown';
	},

	getVersion() {
		const ua = navigator.userAgent;
		const match = ua.match(/(?:firefox|chrome|Safari|Edge|MSIE|Trident)[\/\s](\d+)/i);
		return match ? parseInt(match[1]) : 'Unknown';
	}
};

// ==================== OBJECT UTILITIES ====================
function deepClone(obj) {
	return JSON.parse(JSON.stringify(obj));
}

function mergeObjects(target, source) {
	return { ...target, ...source };
}

function isEmpty(obj) {
	return Object.keys(obj).length === 0;
}

// ==================== STRING UTILITIES ====================
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function slugify(str) {
	return str
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9-]/g, '')
		.replace(/-+/g, '-');
}

function camelCase(str) {
	return str.replace(/[-_\s](.)/g, (_, char) => char.toUpperCase());
}

// ==================== VALIDATORS ====================
const Validators = {
	isEmail(email) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	},

	isURL(url) {
		try {
			new URL(url);
			return true;
		} catch {
			return false;
		}
	},

	isPhoneNumber(phone) {
		return /^\+?[\d\s\-()]{7,}$/.test(phone);
	},

	isStrongPassword(password) {
		return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
	}
};

// ==================== EXPORT ====================
if (typeof module !== 'undefined' && module.exports) {
	module.exports = {
		debounce,
		throttle,
		qs,
		qsa,
		addClass,
		removeClass,
		toggleClass,
		hasClass,
		createElement,
		getOffset,
		isElementInViewport,
		scrollToElement,
		getScrollPosition,
		animateValue,
		Storage,
		fetchJSON,
		serializeForm,
		fillForm,
		copyToClipboard,
		formatDate,
		timeAgo,
		fadeIn,
		fadeOut,
		slideUp,
		slideDown,
		Device,
		Browser,
		deepClone,
		mergeObjects,
		isEmpty,
		capitalize,
		slugify,
		camelCase,
		Validators
	};
}
