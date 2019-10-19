function makeElement(type = 'div', className = null, innerHTML = null) {
    const el = document.createElement(type)
    el.classList.add(className)
    el.innerHTML = innerHTML

    return el
}