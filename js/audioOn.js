const videoElement = document.querySelector('#myVideo');

const playPauseButton = document.querySelector('#playBtn');

document.addEventListener('DOMContentLoaded', () =>{

    playPauseButton.addEventListener('click', () => 
        {
            // Toggle volume between 0 (muted) and 1 (full volume)
            if (videoElement.muted == true) {
                videoElement.volume = 1;  // Set volume to max (1.0)
                videoElement.muted = false; 
                playPauseButton.innerHTML = '<i style="display: inline;" class="fa-solid fa-volume-high"></i> VOLUME ON';
            } else {
                videoElement.volume = 0;  // Mute the video
                videoElement.muted = true; // 
                playPauseButton.innerHTML = '<i style="display: inline;" class="fa-solid fa-volume-off"></i> VOLUME OFF';
            }
        });
        

            // Lista wideo do odtworzenia
            const videoList = [
                "../videos/2024-07-09_20-35-42.mp4",
                "../videos/0806.mp4",
                "../videos/2024-06-29_18-39-04.mp4",
                "../videos/2024-07-09_11-44-39.mp4",
                "../videos/2024-06-16_22-06-55.mp4",
                "../videos/2024-08-25_15-57-58.mp4",
                "../videos/Untitled_video_-_Made_with_Clipchamp_42.mp4"
            ];
        
                let currentVideoIndex = 0;
        
                // const videoElement = document.getElementById('videoElement');
        
                // Funkcja do załadowania wideo
                function loadVideo(index) {
                    videoElement.src = videoList[index];
                    videoElement.load();
                    videoElement.play();
                }
        
                // Nasłuchiwanie zakończenia wideo
                videoElement.addEventListener('ended', () => {
                    currentVideoIndex++;
                    if (currentVideoIndex < videoList.length) {
                        loadVideo(currentVideoIndex);
                    } else {
                        // Restart playlisty od początku
                        currentVideoIndex = 0;
                        loadVideo(currentVideoIndex);
                    }
                });


        
                // Odtwarzanie pierwszego wideo po załadowaniu strony
                loadVideo(currentVideoIndex);
})



