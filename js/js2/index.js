    // Function to scroll the cards container vertically
    function scrollCards(direction) {
        const container = document.querySelector('#cards_section1');
        const scrollAmount = 200; // Amount to scroll by (pixels)

        if (direction === 'up') {
            container.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
        } else if (direction === 'down') {
            container.scrollBy({ top: scrollAmount, behavior: 'smooth' });
        }
    }

    // Example usage: Scroll down by clicking a button
    document.getElementById('scroll-down').addEventListener('click', () => {
        scrollCards('down');
    });

    // Example usage: Scroll up by clicking a button
    document.getElementById('scroll-up').addEventListener('click', () => {
        scrollCards('up');
    });

// click to show story----------------------------------------------------------------

