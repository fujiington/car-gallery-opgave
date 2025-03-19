    const thumbnails = document.querySelectorAll('#thumbs img');
    

    const bigImage = document.getElementById('big');
    

    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {

        bigImage.src = this.src;
        
    
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        this.classList.add('active');
      });
    });