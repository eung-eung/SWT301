// const getCity = require('./wardDistrictAndCity')
// const fetch = require("node-fetch");
// import fetch from "node-fetch";
describe.each([
    { wardName: "Long Thạnh Mỹ", city: "Hồ Chí Minh", expectValue: true },
    { wardName: "Hiệp Hòa", city: "Đồng Nai", expectValue: true },
    { wardName: "Hiệp Hòa", city: "Hồ Chí Minh", expectValue: true },
    { wardName: "Hiệp Hòa", city: "Hồ Chí Minh", expectValue: false },
    { wardName: "Vĩnh Phúc", city: "Hà Nội", expectValue: true }
])('$wardName in $city is $expectValue', ({ wardName, city, expectValue }) => {
    test(`return ${city}: ${expectValue}`, () => {
        return fetch("http://27.64.30.83:8080/EcommercePlatformm/MainController?btnAction=address&addressAction=getCityByWardName&wardName=" + wardName)
            .then(res => res.json())
            .then(cities => {
                let name = cities.map(c => {
                    return c.name
                })
                expect(name.includes(city)).toBe(expectValue)
            })
    });
})