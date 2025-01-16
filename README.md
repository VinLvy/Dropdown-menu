# Dropdown Component

This project implements a reusable dropdown menu using JavaScript, CSS, and HTML. The dropdown supports multiple instances, custom trigger events (click or hover), and the ability to display a message when a dropdown item is selected.

## Features

1. **Reusable Dropdown Logic**: Supports multiple dropdown menus on the same page.
2. **Trigger Event Options**: Choose between `click` or `hover` to show/hide the dropdown menu.
3. **Customizable Message Display**: When an item in the dropdown is selected, a message can be displayed dynamically in a target element.
4. **Modern Design**: Includes a visually appealing design using CSS with animations, shadows, and hover effects.

## File Structure

```
project/
|-- src/
|   |-- index.js       # JavaScript logic for the dropdown
|   |-- style.css      # CSS for dropdown and message styling
|   |-- index.html     # HTML structure with dropdown components
```

## Usage

### HTML Structure

```html
<div class="dropdown">
  <div class="dropdown-trigger">Menu</div>
  <ul class="dropdown-menu">
    <li class="dropdown-item" data-message="Item 1 Selected">Item 1</li>
    <li class="dropdown-item" data-message="Item 2 Selected">Item 2</li>
    <li class="dropdown-item" data-message="Item 3 Selected">Item 3</li>
  </ul>
</div>
<div id="message"></div>
```

### JavaScript Initialization

Import the CSS and JavaScript modules, then initialize the dropdown:

```javascript
import './style.css';

new Dropdown('.dropdown', {
  triggerEvent: 'click', // Options: 'click' or 'hover'
  messageTarget: '#message' // Selector for the element to display messages
});
```

### CSS Styling

Customize the look and feel of the dropdown menu and message box in `style.css`. The default design includes:

- Modern button styling for the trigger.
- Smooth animations for menu visibility.
- Highlight effect for selected items.
- A card-style message box.

## JavaScript Explanation

### Class: `Dropdown`

#### Constructor
- **Parameters**:
  - `selector`: CSS selector for the dropdown elements.
  - `options`: Configuration object with:
    - `triggerEvent`: Specifies how the dropdown menu is triggered (`click` or `hover`).
    - `messageTarget`: Selector for the element where messages will be displayed.

#### Methods
- **`init`**: Adds event listeners for triggers and dropdown items.
- **`toggleMenu(menu)`**: Toggles the visibility of the dropdown menu.
- **`showMenu(menu)`**: Displays the dropdown menu.
- **`hideMenu(menu)`**: Hides the dropdown menu.
- **`showMessage(message)`**: Updates the target element with a message and makes it visible.

## Customization

1. **Adding More Dropdowns**:
   Duplicate the HTML structure and the same JavaScript logic will handle the new dropdown.

2. **Styling**:
   Modify `style.css` to customize the appearance of the dropdown menu and message box.

3. **Trigger Event**:
   Change `triggerEvent` to `hover` for a hover-triggered dropdown.

4. **Message Target**:
   Update the `messageTarget` option to display messages in a different element.

