var typed = new Typed('#typed_text', {
    // Waits 1000ms after typing "First"
    strings: [
        'IT Professional',
        'Thinker...',
        'Achiever...',
        'Gamer...',
        'Podcaster...',
        'Youtuber...',
        'Student Of Life...',
        'Myshawne Stallings'
    ],
    //backspaces the part of the sentence that isn't the same as the previous.
    smartBackspace: true, // Default value
    //measured in milliseconds
    typeSpeed: 15,
    //delay animation
    startDelay: 1000,
    //backspacing speed
    backSpeed: 2,
    cursorChar: '🔥',
});