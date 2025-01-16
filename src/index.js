import './style.css';

class Dropdown {
  constructor(selector, options = {}) {
    this.dropdownElements = document.querySelectorAll(selector);
    this.triggerEvent = options.triggerEvent || 'click'; // Default to click
    this.messageTarget = options.messageTarget || '#message'; // Target element to display messages
    this.init();
  }

  init() {
    this.dropdownElements.forEach((dropdown) => {
      const trigger = dropdown.querySelector('.dropdown-trigger');
      const menu = dropdown.querySelector('.dropdown-menu');
      const items = menu.querySelectorAll('.dropdown-item');

      if (this.triggerEvent === 'click') {
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggleMenu(menu);
        });
        document.addEventListener('click', () => {
          this.hideMenu(menu);
        });
      } else if (this.triggerEvent === 'hover') {
        trigger.addEventListener('mouseenter', () => this.showMenu(menu));
        trigger.addEventListener('mouseleave', () => this.hideMenu(menu));
        menu.addEventListener('mouseenter', () => this.showMenu(menu));
        menu.addEventListener('mouseleave', () => this.hideMenu(menu));
      }

      // Add event listener to dropdown items
      items.forEach((item) => {
        item.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent menu from closing immediately
          this.showMessage(item.dataset.message || item.textContent);
          this.hideMenu(menu);
        });
      });
    });
  }

  toggleMenu(menu) {
    menu.classList.toggle('visible');
  }

  showMenu(menu) {
    menu.classList.add('visible');
  }

  hideMenu(menu) {
    menu.classList.remove('visible');
  }

  showMessage(message) {
    const targetElement = document.querySelector(this.messageTarget);
    if (targetElement) {
      targetElement.textContent = message;
      targetElement.classList.add('visible');
    }
  }
}

// Initialize Dropdown
new Dropdown('.dropdown', { 
  triggerEvent: 'click', 
  messageTarget: '#message' // Target element to show messages
});
