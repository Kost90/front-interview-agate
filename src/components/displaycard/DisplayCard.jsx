import { useState, useEffect } from "react";
import DataCountryByCap from "../../../node_modules/country-json/src/country-by-capital-city.json";
import DataCountryByLang from "../../../node_modules/country-json/src/country-by-languages.json";
import { FilterCapital } from "./utils";
import { useParams } from "react-router-dom";
import styles from "./DisplayCard.module.css";

function DisplayCard() {
  const param = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const newCountry = FilterCapital(
      param,
      DataCountryByCap,
      DataCountryByLang
    );
    setCountry(newCountry);
  }, [param]);

  return (
    <div className={styles.wrapper_container}>
      {country !== null ? (
        <div>
          <h1>Country:{param.countryname}</h1>
          <ul className={styles.list_container}>
            <h2>Capital:{country.city}</h2>
            <h3>Languages:</h3>
            {country.languages.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default DisplayCard;
