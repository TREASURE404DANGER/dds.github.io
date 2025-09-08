
        // Check if user has already followed the channel
        let hasFollowed = localStorage.getItem('channelFollowed') === 'true';

        // If user has already followed, show tool directly
        if (hasFollowed) {
            showTool();
        }

        function handleChannelFollow() {
            // Mark that user has followed the channel
            localStorage.setItem('channelFollowed', 'true');
            
            // Show success message
            document.getElementById('successMessage').classList.add('show');
            
            // Show continue button after 2 seconds
            setTimeout(() => {
                document.getElementById('continueButton').style.display = 'block';
            }, 2000);
            
            // Auto-redirect to tool after 4 seconds
            setTimeout(() => {
                showTool();
            }, 4000);
        }

        function showTool() {
            document.getElementById('followState').style.display = 'none';
            document.getElementById('toolState').style.display = 'block';
        }

        function downloadScript(scriptName, url) {
            // Add visual feedback
            const clickedElement = event.currentTarget;
            clickedElement.classList.add('downloading');
            
            // Show download notification
            showDownloadNotification(`${scriptName} download started!`);
            
            // Open download link in new tab
            window.open(url, '_blank');
            
            // Remove visual feedback after 2 seconds
            setTimeout(() => {
                clickedElement.classList.remove('downloading');
            }, 2000);
        }

        function showDownloadNotification(message) {
            const notification = document.getElementById('downloadNotification');
            notification.textContent = message;
            notification.classList.add('show');
            
            // Hide notification after 3 seconds
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Add some interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            // Add hover sound effect simulation
            const scriptOptions = document.querySelectorAll('.script-option');
            scriptOptions.forEach(option => {
                option.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                });
                
                option.addEventListener('mouseleave', function() {
                    if (!this.classList.contains('downloading')) {
                        this.style.transform = 'translateY(0) scale(1)';
                    }
                });
            });
        });
    