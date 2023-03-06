// const getCity = require('./wardDistrictAndCity')
// const fetch = require("node-fetch");
// import fetch from "node-fetch";
// describe.each([
//     { wardName: "Long Thạnh Mỹ", city: "Hồ Chí Minh", expectValue: true },
//     { wardName: "Hiệp Hòa", city: "Đồng Nai", expectValue: true },
//     { wardName: "Hiệp Hòa", city: "Hồ Chí Minh", expectValue: true },
//     { wardName: "Hiệp Hòa", city: "Hồ Chí Minh", expectValue: false },
//     { wardName: "Vĩnh Phúc", city: "Hà Nội", expectValue: true }
// ])('$wardName in $city is $expectValue', ({ wardName, city, expectValue }) => {
//     test(`true`, () => {
//         return fetch("http://27.64.30.83:8080/EcommercePlatformm/MainController?btnAction=address&addressAction=getCityByWardName&wardName=" + wardName)
//             .then(res => res.json())
//             .then(cities => {
//                 let name = cities.map(c => {
//                     return c.name
//                 })
//                 expect(name.includes(city)).toBe(expectValue)
//             })
//     });
// })

// describe('$wardName in $city is $expectValue', ({ wardName, city, expectValue }) => {
test.each([
    { wardName: "Long Thạnh Mỹ", city: "Hồ Chí Minh" },
    { wardName: "Hiệp Hòa", city: "Đồng Nai" },
    { wardName: "Hiệp Hòa", city: "Hồ Chí Minh" },
    { wardName: "Hiệp Hòa", city: "Quảng Nam" },
    { wardName: "Vĩnh Phúc", city: "Hà Nội" }
])
    ('$wardName in $city', ({ wardName, city }) => {
        return fetch("http://27.64.30.83:8080/EcommercePlatformm/MainController?btnAction=address&addressAction=getCityByWardName&wardName=" + wardName)
            .then(res => res.json())
            .then(cities => {
                let namesOfCities = cities.map(c => {
                    return c.name
                })
                expect(namesOfCities).toContain(city)
            })
    });
// })