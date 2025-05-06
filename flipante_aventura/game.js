document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('start-screen').style.display = 'none';
  const music = document.getElementById('bgMusic');
  music.volume = 0.2;
  music.play();
  // Iniciar juego (por ahora muestra solo fondo)
  const canvas = document.getElementById('gameCanvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  ctx.font = "40px Comic Sans MS";
  ctx.fillText("¡Nivel tutorial pronto aquí!", 100, 100);
});
