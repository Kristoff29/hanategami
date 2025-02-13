$(document).ready(function() {
    // Open the envelope after a brief delay
    setTimeout(function() {
        // Animate the top and bottom flaps of the envelope
        $(".flap.top").css("transform", "rotateX(180deg)");  // Open top flap
        $(".flap.bottom").css("transform", "rotateX(-180deg)"); // Open bottom flap
        
        // Show the card with a fade-in effect
        $(".card").fadeIn(1000); // Make the card appear smoothly
    }, 500); // Wait 0.5 seconds before starting the animation
});
