
const playPauseBtn = document.querySelector(".play-pause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");

const player = document.querySelector("video");

player.removeAttribute("controls");

playPauseBtn.addEventListener('click', () => {
 if (player.paused) {
    player.play();
    playPauseBtn.textContent = 'Pause'
    playPauseBtn.setAttribute('aria-label', 'Pause video')
 } else {
    player.pause();
    playPauseBtn.textContent = 'Play'
    playPauseBtn.setAttribute('aria-label', 'Play video')
 }
})

stopBtn.addEventListener('click', () => {
   player.pause();
   player.currentTime = 0;
   playPauseBtn.textContent = 'Play';
})

rwdBtn.addEventListener('click', () => {
   player.currentTime -= 3;
})

fwdBtn.addEventListener('click', () => {
   player.currentTime += 3;
})

player.ontimeupdate = () => {
   let minutes = Math.floor(player.currentTime / 60);
   let seconds = Math.floor(player.currentTime - minutes * 60);

   const minutesFormated = minutes < 10 ? `0${minutes}` : minutes;
   const secondsFormated = seconds < 10 ? `0${seconds}` : seconds;

   const mediaTime = `${minutesFormated}:${secondsFormated}`;
   timeLabel.textContent = mediaTime;
}