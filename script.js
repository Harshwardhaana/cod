// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic ticket price change based on seat selection (if applicable)
document.querySelectorAll('.ticket button').forEach(button => {
    button.addEventListener('click', function () {
        alert('Ticket Purchased! Thank you for your purchase.');
    });
});
