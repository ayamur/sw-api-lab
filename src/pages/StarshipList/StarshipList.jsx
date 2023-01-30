import { useEffect, useState } from "react";
import { getStarshipList } 
from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await
        getStarshipList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <>
      <h3>
        Pew Pew Vroom Vroom Starship List!
      </h3>
      {starshipList.length ?
        <>
          {starshipList.map((starship, idx) =>
            <div key={idx}>
              <Link to="/id" state={{ starship }}>
                <button className="starship-list-boxes">
                  {starship.name}
                </button>
              </Link>
            </div>
          )}
        </>
        :
        <>
          <h1>Starships flying in momentarily!</h1>
        </>
      }
    </>
  );
}





export default StarshipList;