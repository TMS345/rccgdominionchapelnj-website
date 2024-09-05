document.addEventListener('DOMContentLoaded', function() {
    let index = 0;
    const services = document.querySelectorAll('.service');
    const total = services.length;

    function showService(index) {
        services.forEach((service, i) => {
            service.classList.remove('prev', 'active', 'next');
            if (i === index) {
                service.classList.add('active');
            } else if (i === (index - 1 + total) % total) {
                service.classList.add('prev');
            } else if (i === (index + 1) % total) {
                service.classList.add('next');
            }
        });
    }

    function nextService() {
        index = (index + 1) % total;
        showService(index);
    }

    showService(index);
    setInterval(nextService, 15000);
});
