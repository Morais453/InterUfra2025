document.querySelectorAll('.video-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const videoId = thumb.getAttribute('data-video');
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');

    iframe.src = `https://drive.google.com/file/d/${videoId}/preview`;
    modal.style.display = 'flex';
  });
});

document.getElementById('closeModal').addEventListener('click', () => {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoFrame');

  iframe.src = '';
  modal.style.display = 'none';
});
