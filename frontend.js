document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(event.target); // Get form data

    try {
        const response = await fetch('/api/users', { // Update the endpoint URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)), // Convert form data to JSON
        });

        if (!response.ok) {
            throw new Error('Failed to submit form');
        }

        alert('Form submitted successfully!');
        event.target.reset(); // Reset the form
    } catch (error) {
        console.error('Form submission error:', error);
        alert('Failed to submit form. Please try again.');
    }
});
