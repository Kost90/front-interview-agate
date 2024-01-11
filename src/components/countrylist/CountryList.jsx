import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import DataCountryByCont from "../../../node_modules/country-json/src/country-by-continent.json";
import DataCountryByCap from "../../../node_modules/country-json/src/country-by-capital-city.json";
import { ContinentFilter } from "./utils";
import { SearchFunction } from "./utils";
import styles from "./CountryList.module.css";

let didInit = false;

function CountryList() {
  const [isShow, setIsShow] = useState(false);
  const [search, setSearch] = useState("");
  const [europe, setEurope] = useState([]);
  const [asia, setAsia] = useState([]);
  const [africa, setAfrica] = useState([]);
  const [northAmerica, setNorthAmerica] = useState([]);
  const [southAmerica, setSouthAmerica] = useState([]);
  const [oceania, setOceania] = useState([]);
  const [antarctica, setAntarctica] = useState([]);

  useEffect(() => {
    if (!didInit) {
      const {
        europeArr,
        asiaArr,
        africaArr,
        northAmericaArr,
        southAmericaArr,
        oceaniaArr,
        antarcticaArr,
      } = ContinentFilter(DataCountryByCont);
      setEurope(europeArr);
      setAsia(asiaArr);
      setAfrica(africaArr);
      setNorthAmerica(northAmericaArr);
      setSouthAmerica(southAmericaArr);
      setOceania(oceaniaArr);
      setAntarctica(antarcticaArr);
      didInit = true;
    } else if (didInit === true) {
      const serchedData = SearchFunction(search, DataCountryByCap);
      setSearch(serchedData);
      if (serchedData.length !== 0) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    }
  }, [search]);

  const handelSearch = useCallback((e) => {
    let inputValue = e.target.value;
    setSearch(inputValue);
  }, []);

  return (
    <div className={styles.container}>
      <input
        type="search"
        name="search"
        placeholder="search by country or capital"
        onChange={handelSearch}
      />
      <ul className={styles.list_container}>
        {isShow !== true ? (
          <>
            <h3>Europe:</h3>
            {europe.map((el, i) => (
              <li key={i}>
                <Link to={`country/${el.country}`}>{el.country}</Link>
              </li>
            ))}
            <h3>Asia:</h3>
            {asia.map((el, i) => (
              <li key={i}>
                <Link to={`country/${el.country}`}>{el.country}</Link>
              </li>
            ))}
            <h3>Africa:</h3>
            {africa.map((el, i) => (
              <li key={i}>
                <Link to={`country/${el.country}`}>{el.country}</Link>
              </li>
            ))}
            <h3>North America:</h3>
            {northAmerica.map((el, i) => (
              <li key={i}>
                <Link to={`country/${el.country}`}>{el.country}</Link>
              </li>
            ))}
            <h3>South America:</h3>
            {southAmerica.map((el, i) => (
              <li key={i}>
                <Link to={`country/${el.country}`}>{el.country}</Link>
              </li>
            ))}
            <h3>Oceanica:</h3>
            {oceania.map((el, i) => (
              <li key={i}>
                <Link to={`country/${el.country}`}>{el.country}</Link>
              </li>
            ))}
            <h3>Antarctica:</h3>
            {antarctica.map((el, i) => (
              <li key={i}>
                <Link to={`country/${el.country}`}>{el.country}</Link>
              </li>
            ))}
          </>
        ) : (
          <li>
            <Link to={`country/${search}`}>{search}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default CountryList;
