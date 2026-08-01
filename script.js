const button = document.getElementById('actionButton');

button.addEventListener('click', () => {
  const message = document.createElement('div');
  message.className = 'toast';
  message.textContent = 'Great! Your website is ready to customize.';
  document.body.appendChild(message);

  setTimeout(() => {
    message.classList.add('visible');
  }, 10);

  setTimeout(() => {
    message.classList.remove('visible');
    setTimeout(() => {
      document.body.removeChild(message);
    }, 300);
  }, 2500);
});

// Add toast styles dynamically so the file remains simple.
const style = document.createElement('style');
style.textContent = `
.toast {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%) translateY(1rem);
  background: rgba(15, 23, 42, 0.95);
  color: white;
  padding: 0.9rem 1.4rem;
  border-radius: 999px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  z-index: 1000;
}
.toast.visible {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
`;
document.head.appendChild(style);
