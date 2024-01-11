export function ContinentFilter(data) {
    const europeArr = [];
    const asiaArr = [];
    const africaArr = [];
    const northAmericaArr = [];
    const southAmericaArr = [];
    const oceaniaArr = [];
    const antarcticaArr = [];
    // or can do it with switch case
    data.forEach((element) => {
      if (element.continent === "Europe") {
        europeArr.push(element);
      } else if (element.continent === "Asia") {
        asiaArr.push(element);
      } else if (element.continent === "Africa") {
        africaArr.push(element);
      } else if (element.continent === "North America") {
        northAmericaArr.push(element);
      } else if (element.continent === "South America") {
        southAmericaArr.push(element);
      } else if (element.continent === "Oceania") {
        oceaniaArr.push(element);
      } else if (element.continent === "Antarctica") {
        antarcticaArr.push(element);
      } else return;
    });
    return {
      europeArr,
      asiaArr,
      africaArr,
      northAmericaArr,
      southAmericaArr,
      oceaniaArr,
      antarcticaArr,
    };
  }

  export const SearchFunction = (inputdata, capitaldata) =>{
    let country = '';
    if(inputdata.length >= 3){
      capitaldata.forEach(el => {
        if(el.country === inputdata || el.city === inputdata){
          country = el.country;
          return country
        } else return
      })
    }
    return country
  }