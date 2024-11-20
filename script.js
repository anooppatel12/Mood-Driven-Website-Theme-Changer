// Function to change the theme based on the mood
function changeMood(mood) {
    // Remove all mood classes from the body
    document.body.classList.remove('happy', 'sad', 'angry', 'relaxed');
    
    // Add the selected mood class
    document.body.classList.add(mood);

    // Change the description based on the selected mood
    let description = document.getElementById('mood-description');

    // Set the text content based on the selected mood
    if (mood === 'happy') {
        description.textContent = "You are feeling happy! Enjoy the bright and energetic theme!";
        description.style.color = "#ff9800"; // Change text color to match the theme
    } else if (mood === 'sad') {
        description.textContent = "You are feeling sad. Here's a calming and peaceful theme.";
        description.style.color = "#01579b"; // Change text color to match the theme
    } else if (mood === 'angry') {
        description.textContent = "You're angry? This bold and fiery theme suits your mood!";
        description.style.color = "white"; // Change text color to match the theme
    } else if (mood === 'relaxed') {
        description.textContent = "Feeling relaxed? Here's a soft and calming theme for you.";
        description.style.color = "#388e3c"; // Change text color to match the theme
    }
}
