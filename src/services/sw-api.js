import StarshipList from "../pages/StarshipList/StarshipList"

//The API location we are making requests to:
const baseUrl = "https://swapi.dev/api/"

export async function getStarshipList() {
  const res = await fetch(`${baseUrl}starships`)
  return res.json()
}

export async function getStarshipDetails(apiUrl) {
  const res = await fetch(`${apiUrl}`)
  return res.json()
}

//^ no easy way to grab ID, so in this case, we had to add entire URL 

