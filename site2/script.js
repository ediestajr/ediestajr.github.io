document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const propertyInfos = document.querySelectorAll('.property-info');

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // Remove 'active' class from all menu items
            menuItems.forEach(i => i.classList.remove('active'));
            // Add 'active' class to the clicked menu item
            event.target.classList.add('active');

            // Hide all property information divs
            propertyInfos.forEach(info => info.classList.add('hidden'));

            // Show the corresponding property information div
            const targetId = event.target.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.classList.remove('hidden');
            }
        });
    });
});

