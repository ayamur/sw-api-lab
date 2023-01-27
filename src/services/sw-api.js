//The API location we are making requests to:
const BaseUrl = "https://swapi.dev/api/starships/"

export async function getStarshipList() {
  const res = await fetch(`${BaseUrl}`)
  return res.json()
}

export async function getStarshipDetails(id) {
  const res = await fetch(`${BaseUrl}/${id}`)
  return res.json()
}