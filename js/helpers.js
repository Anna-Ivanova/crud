function createElement(tagName, attributes, handlers, content, parentElement) {
  const element = document.createElement(tagName);

  // go over attributes
  if (attributes) {
    for (let key in attributes) {
      if (key === 'className') {
        element.setAttribute('class', attributes[key]);

      }
      else if
        (key === 'data_btn') {
        element.setAttribute('data-btn', attributes[key]);

      }


      else {
        element.setAttribute(key, attributes[key]);
      }
    }
  }

  // go over handlers
  if (handlers) {
    for (let key in handlers) {
      element.addEventListener(key, handlers[key]);
    }
  }

  element.textContent = content;

  parentElement.appendChild(element);

  return element;
}