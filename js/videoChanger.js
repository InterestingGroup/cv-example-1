const videoElement = document.querySelector('#myVideo');
const playPauseButton = document.querySelector('#playBtn');
const nextButton = document.querySelector('#nextBtn');  // Add button for next video
const prevButton = document.querySelector('#prevBtn');  // Add button for previous video
const videoNameDisplay = document.querySelector('#videoNameDisplay');  // Element to display video name

document.addEventListener('DOMContentLoaded', () => {

    playPauseButton.addEventListener('click', () => {
        // Toggle volume between 0 (muted) and 1 (full volume)
        if (videoElement.muted) {
            videoElement.volume = 1;  // Set volume to max (1.0)
            videoElement.muted = false;
            playPauseButton.innerHTML = '<i style="display: inline;" class="fa-solid fa-volume-high"></i> VOLUME ON';
        } else {
            videoElement.volume = 0;  // Mute the video
            videoElement.muted = true;
            playPauseButton.innerHTML = '<i style="display: inline;" class="fa-solid fa-volume-off"></i> VOLUME OFF';
        }
    });

    // List of videos to play
    const videoList = [
        "../videos/2024-07-09_20-35-42.mp4",
        "../videos/0806.mp4",
        "../videos/2024-06-29_18-39-04.mp4",
        "../videos/2024-07-09_11-44-39.mp4",
        "../videos/2024-06-16_22-06-55.mp4",
        "../videos/2024-08-25_15-57-58.mp4",
        "../videos/Untitled_video_-_Made_with_Clipchamp_42.mp4",
        "../videos/2024-08-22_16-23-27.mp4"
    ];

    // List of video names
    const videoNameList = [
        'COOL <span style="color: #d0311d;">INTRO</span>',
        'SCYTHE <span style="color: #d0311d;">FINISHER</span>',
        'FIGHT <span style="color: #d0311d;">ANIMATION</span>',
        'SWORD <span style="color: #d0311d;">FINISHER</span>',
        'ASSASINATE',
        'COOL <span style="color: #d0311d;">STUFF</span>',
        'COMBAT <span style="color: #d0311d;">ANIMATION</span>',
        'SPIN'
    ];

    let currentVideoIndex = 0;

    // Function to load a video and update the name display
    function loadVideo(index) {
        videoElement.src = videoList[index];
        videoElement.load();
        videoElement.play();
        videoNameDisplay.innerHTML = ` ${videoNameList[index]}`;
    }

    // Event listener for the "next" button
    nextButton.addEventListener('click', () => {
        currentVideoIndex++;
        if (currentVideoIndex >= videoList.length) {
            currentVideoIndex = 0;  // Restart from the first video if at the end
        }
        loadVideo(currentVideoIndex);
    });

    // Event listener for the "previous" button
    prevButton.addEventListener('click', () => {
        if (currentVideoIndex <= 0) {
            currentVideoIndex = videoList.length - 1;  // Go to the last video if at the start
        } else {
            currentVideoIndex--;
        }
        loadVideo(currentVideoIndex);
    });


    // Play the first video when the page loads
    loadVideo(currentVideoIndex);
});
