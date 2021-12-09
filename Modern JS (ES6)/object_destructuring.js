const address = {
    street: 'north',
    city: 'LA',
    country: 'US'
}

// const street = address.street;
// const city = address.city;
// const country = address.country;

const { street, city, country } = address; // this line is same as the lines from 7 to 9
console.log(street);
console.log(city);
console.log(country);

// if you want to chnage the name
const { street: st } = address;
console.log(st);