(function () {
    let navbar = document.querySelector('#navbar');
    let hamburger = document.querySelector('#hamburger');
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
})();

// Mostrar tooltip con la descripción de los proyectos (Accesibilidad con teclado)
(function () {
    // Obtener todos los enlaces con data-description
    const apiLinks = document.querySelectorAll('#portfolio a[data-description]');

    // Iterar sobre cada enlace
    apiLinks.forEach(apiLink => {
        // Crear el tooltip
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = apiLink.dataset.description;
        document.body.appendChild(tooltip);

        // Mostrar el tooltip al pasar el cursor (ratón)
        apiLink.addEventListener('mouseover', () => {
            const rect = apiLink.getBoundingClientRect();
            tooltip.style.display = 'block';
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = rect.bottom + 10 + 'px';
            tooltip.classList.add('show');
        });

        // Ocultar el tooltip al quitar el cursor (ratón)
        apiLink.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
            tooltip.classList.remove('show');
        });

        // Mostrar el tooltip al enfocar el enlace (teclado)
        apiLink.addEventListener('focus', () => {
            const rect = apiLink.getBoundingClientRect();
            tooltip.style.display = 'block';
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = rect.bottom + 10 + 'px';
            tooltip.classList.add('show');
        });

        // Ocultar el tooltip al desenfocar el enlace (teclado)
        apiLink.addEventListener('blur', () => {
            tooltip.style.display = 'none';
            tooltip.classList.remove('show');
        });
    });
})();

