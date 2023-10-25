import { useHeader } from "./modules/header.js";
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";

function app() {
  useDynamicAdapt("max");
  useHeader();

  /*
    play video
  */
  const videoPreview = document.getElementById("vimeo-video-preview");
  const playVideoButton = document.getElementById("play-button");
  if (playVideoButton) {
    playVideoButton.addEventListener("click", () => {
      const video = document.getElementById("vimeo-video");
      const videoId = video.dataset.videoId;
      const player = new Vimeo.Player("vimeo-video", {
        id: videoId,
      });
      video.style.display = "block";
      videoPreview.style.display = "none";
      player.play();
      player.setCurrentTime(0);
      player.setVolume(1);
    });
  }
}

document.addEventListener("DOMContentLoaded", app);
