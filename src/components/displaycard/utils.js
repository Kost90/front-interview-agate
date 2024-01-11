export function FilterCapital(param, dataCapital, dataLang) {
  let country = {};
  dataCapital.forEach((element) => {
    if (param.countryname === element.country) {
      country = {
        city: element.city,
      };
    }
  });
  dataLang.forEach((element) => {
    if (param.countryname === element.country) {
      country = {
        ...country,
        languages: element.languages,
      };
    }
  });
  return country;
}
