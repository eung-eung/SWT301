// var existCity = true

function getCity(wardName, cityName) {
    
    fetch(
        `http://27.64.30.83:8080/EcommercePlatformm/MainController?btnAction=address&addressAction=getCityByWardName&wardName=${wardName}`
    )
        .then((res) => res.json())
        .then((cities) => {
            let namesOfCities = cities.map((c) => {
                return c.name;
            });
            console.log(namesOfCities.includes(cityName));
            // return name
        });
}

console.log(getCity("Hiệp Hòa", "Đồng Nai"));
// module.exports = getCity
