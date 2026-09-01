// Универсальная функция обновления слайдера
function updateSlider(slider: HTMLInputElement) {
  const min = Number(slider.min) || 0;
  const max = Number(slider.max) || 100;
  const val = Number(slider.value);

  const percent = ((val - min) / (max - min)) * 100;

  slider.style.setProperty('--progress', `${percent}%`);
}

// Функция для форматирования времени в 0:00
function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const volumeSlider = document.getElementById('volume-slider') as HTMLInputElement | null;
  const progressSlider = document.getElementById('progress-slider') as HTMLInputElement | null;
  const progressTooltip = document.getElementById('progress-tooltip') as HTMLDivElement | null;

  const TOTAL_DURATION = 204;

  if (volumeSlider) {
    updateSlider(volumeSlider);
    volumeSlider.addEventListener('input', () => updateSlider(volumeSlider));
  }

  if (progressSlider) {
    const handleProgressInput = () => {
      updateSlider(progressSlider);

      if (progressTooltip) {
        const val = Number(progressSlider.value);
        const max = Number(progressSlider.max) || 100;
        const percent = (val / max) * 100;

        progressTooltip.style.left = `${percent}%`;
        progressTooltip.textContent = formatTime((val / max) * TOTAL_DURATION);
      }
    };

    handleProgressInput();
    progressSlider.addEventListener('input', handleProgressInput);
  }
});