import { useEffect, useState } from "react";
import { getStarshipList } from "../../services/sw-api";
import { Link, } from "react-router-dom";

const StarshipList = () => {
  const [StarshipList, setStarshipList] = useState([{}])

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
      {StarshipList.length ?
        <>
          {StarshipList.map(starship =>
            <div key={starship.id}>
              <Link to='/starship' state={{ starship }}>
                <button className="starship-list-boxes">
                  {starship.name}
                </button>
              </Link>
            </div>
          )}
        </>
        :
        <>
          <h4> Starships flying in momentarily...</h4>
        </>
      }
    </>
  );
}





export default StarshipList;