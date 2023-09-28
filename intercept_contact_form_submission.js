document.getElementById('contact_form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Create a new FormData object from the form
    const formData = new FormData(this);
    //stop spaces from being encoded as +
    window.location.href = `${this.action}?subject=${formData.get('subject')}&body=${formData.get('body')}`;
});