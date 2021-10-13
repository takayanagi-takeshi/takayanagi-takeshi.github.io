
async function videoCom () {
  const media = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false

  });
  document.getElementById('video').srcObject = media;
}
videoCom();