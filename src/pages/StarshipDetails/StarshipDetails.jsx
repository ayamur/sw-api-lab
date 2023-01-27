import { useEffect, useState } from "react";
import { getStarshipDetails } from "../../services/sw-api";
import { Link, useLocation } from "react-router-dom";


const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})

  const location = useLocation()

  useEffect(()=> {
    const fetchStarshipDetails = async () => {
      const StarshipData = await getStarshipDetails
      (location.state.starship.url)
      setStarshipDetails(StarshipData)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])

  return ( 
    <div>
      Starship Details Component!
    </div>
   );
}
 
export default StarshipDetails;