
require('dotenv').config();
// describe('$wardName in $city is $expectValue', ({ wardName, city, expectValue }) => {
test.each([
    { wardName: "Long Thạnh Mỹ", cityName: "Hồ Chí Minh" },
    { wardName: "Hiệp Hòa", cityName: "Đồng Nai" },
    // { wardName: "Hiệp Hòa", cityName: "Hồ Chí Minh" },
    { wardName: "Hiệp Hòa", cityName: "Quảng Nam" },
    { wardName: "Vĩnh Phúc", cityName: "Hà Nội" },
])("$wardName in $cityName", ({ wardName, cityName }) => {
    return fetch(
        process.env.HOST + "/EcommercePlatformm/MainController?btnAction=address&addressAction=getCityByWardName&wardName=" +
        wardName
    )
        .then((res) => res.json())
        .then((cities) => {
            let namesOfCities = cities.map((c) => {
                return c.name;
            });
            expect(namesOfCities).toContain(cityName);
        });
});
// })
