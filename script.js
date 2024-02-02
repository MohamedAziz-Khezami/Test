document.addEventListener('DOMContentLoaded', function () {
    let res = document.getElementById("res");
    let reservation_cart = document.getElementById("reservation-cart");

    res.addEventListener("click", showCart); 

    function showCart() {
        reservation_cart.style.display = reservation_cart.style.display === 'none' ? 'block' : 'none';
    }

    window.addEventListener('click', function (event) {
        if (event.target !== res && event.target !== reservation_cart && !reservation_cart.contains(event.target)) {
            closeCart();
        }
    });

    function closeCart() {
        reservation_cart.style.display = 'none';
    }

    window.addEventListener('scroll', function () {
        reservation_cart.style.position = 'fixed';
        reservation_cart.style.top = '10px'; 
        reservation_cart.style.marginRight = '10px';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const reserveButton = document.getElementById('reserve');
    const cancelButton = document.getElementById('cancel');
    const reservationList = document.getElementById('reservation-list');
    const checkoutButton = document.getElementById('checkout');

    reserveButton.addEventListener('click', function (event) {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const contact = document.getElementById('contact').value;

        // Validate inputs
        if (validateDate(date) && validateTime(time) && validateGuests(guests) && validateContact(contact)) {
            // Create a new list item with reservation details
            const reservationItem = document.createElement('li');
            reservationItem.textContent = `Date: ${date}, Time: ${time}, Guests: ${guests}, Contact: ${contact}`;

            // Create a "Cancel" button for the reservation
            const cancelButton = document.createElement('button');

            cancelButton.textContent = 'Cancel';
            cancelButton.style.marginLeft = '10px';
            cancelButton.style.marginRight = '10px';

            cancelButton.addEventListener('click', function () {
                // Remove the reservation when the "Cancel" button is clicked
                reservationList.removeChild(reservationItem);
                // Hide the checkout button if the list is empty
                checkoutButton.style.display = reservationList.children.length > 0 ? 'block' : 'none';
            });

            reservationItem.appendChild(cancelButton);

            reservationList.appendChild(reservationItem);

            // Show the checkout button
            checkoutButton.style.display = 'block';

            // Clear form fields
            clearFormFields();
        } else {
            alert('Please fill in all the fields with valid values.');
        }
    });

    checkoutButton.addEventListener('click', function () {
        alert('Reservation is completed!');
        location.reload();
    });

    function validateDate(value) {
        const currentDate = new Date();
        const selectedDate = new Date(value);
        return selectedDate >= currentDate;
    }

    function validateTime(value) {
        // Assuming the restaurant is open from 10:00 AM to 8:00 PM
        const restaurantOpeningTime = new Date('1970-01-01T10:00:00');
        const restaurantClosingTime = new Date('1970-01-01T20:00:00');
        const selectedTime = new Date(`1970-01-01T${value}`);
        return selectedTime >= restaurantOpeningTime && selectedTime <= restaurantClosingTime;
    }

    function validateGuests(value) {
        const parsedValue = parseInt(value);
        return !isNaN(parsedValue) && parsedValue > 0;
    }

    function validateContact(value) {
        // Basic validation for a Tunisian phone number
        const phoneRegex = /^(?:(?:\+|00)216)?(?:\d{8}|\d{12})$/;
        return phoneRegex.test(value);
    }

    function clearFormFields() {
        document.getElementById('date').value = '';
        document.getElementById('time').value = '';
        document.getElementById('guests').value = '';
        document.getElementById('contact').value = '';
    }
});



        window.onscroll = function () {
            showBackToTopButton();
        };
        
        function showBackToTopButton() {
            var button = document.getElementById("backToTopBtn");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        }
        
        // Smooth scroll to the top when the button is clicked
        function scrollToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }