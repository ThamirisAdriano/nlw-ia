const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const videoURL = input.value

  if (!videoURL.includes("shorts")) { 
      return (content.textContent = "Esse vídeo parece não ser um short.")
  }

  const [_, params] = videoURL.split("/shorts/") // aqui usamoso split para dividir a url em antes e depois da string shorts
  const [videoId] = params.split("?si") // aqui usamos o split para tirar tudo que vier depois do id
  console.log(videoId)
})
