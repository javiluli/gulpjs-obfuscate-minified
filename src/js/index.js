const img_perfil = document.getElementById('img_perfil')
const bio = document.getElementById('bio')
const login = document.getElementById('login')
const list = document.getElementById('list')

// constantes con acceso a API
const URL_GITHUB_PROFILE =
  'https://api.github.com/users/javiluli?id_client=kbnaeg8273g482hujsgfbvus'
const URL_GITHUB_PROFILE_REPOS =
  'https://api.github.com/users/javiluli/repos?sort=created&per_page=3'

// Obtencion de datos del perfil de github por usuario
function getGithubPerfil() {
  fetch(URL_GITHUB_PROFILE)
    .then((response) => response.json())
    .then((data) => {
      img_perfil.setAttribute('src', data.avatar_url)
      bio.textContent = data.bio
      login.textContent = data.login
    })
}

// Ontencion de los repositorios de un usuario de github
function getGithubPerfilRepos() {
  fetch(URL_GITHUB_PROFILE_REPOS)
    .then((response) => response.json())
    .then((data) => {
      data.map((item) => {
        list.innerHTML += `
          <li>${item.name}</li>
        `
      })
    })
}

// Funcion Init/Main
const init = () => {
  getGithubPerfil()
  getGithubPerfilRepos()
}

init()
