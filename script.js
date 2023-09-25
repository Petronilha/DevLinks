function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const nickname = document.querySelector("#profile #nickname")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Perfil image Daniel Petronilha in light mode")
    nickname.setAttribute(
      "src",
      "https://img.shields.io/badge/-@danielpetronilha-7300FD?style=plastic&logoColor=white"
    )
    nickname.setAttribute("alt", "Nickname in light mode")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Perfil image Daniel Petronilha in dark mode")
    nickname.setAttribute(
      "src",
      "https://img.shields.io/badge/-@danielpetronilha-EBEBEB?style=plastic&logoColor=white"
    )
    nickname.setAttribute("alt", "Nickname in dark mode")
  }
}
