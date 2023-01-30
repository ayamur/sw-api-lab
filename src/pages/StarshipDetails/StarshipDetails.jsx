import { useEffect, useState } from "react";
import { getStarshipDetails } from "../../services/sw-api";
import { useLocation, Link } from "react-router-dom";



const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})

  const location = useLocation()

  useEffect(()=> {
    console.log(location.state, "this one")
    const fetchStarshipDetails = async () => {
      const StarshipDetails = await getStarshipDetails
      (location.state.starship.url)
      setStarshipDetails(StarshipDetails)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])

  console.log({StarshipDetails})

  return ( 
    <>
    <h3>
      Starship Data:
    </h3>
    <h3>Name:{starshipDetails.name}</h3>
    <h4>Model:{starshipDetails.model}</h4>
    <h4><Link to="/starships/"><button>Return to Starship List</button></Link></h4>
    </>
   )
  }
 
export default StarshipDetails;