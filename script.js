document.addEventListener('DOMContentLoaded', function() {
  const previewBtn = document.getElementById('preview-cv');
  const modal = document.getElementById('cv-modal');
  const closeModal = document.getElementById('close-modal');

  previewBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
  });

  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}); 