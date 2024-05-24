const bike = [
    { bikeName: "Bianchi", bikeWeight: 7.5 },
    { bikeName: "Trek", bikeWeight: 8.2 },
    { bikeName: "Cannondale", bikeWeight: 6.8 },
    { bikeName: "Specialized", bikeWeight: 7.0 },
    { bikeName: "Pinarello", bikeWeight: 7.1 },
    { bikeName: "Scott", bikeWeight: 8.0 },
    { bikeName: "Giant", bikeWeight: 7.4 },
    { bikeName: "Merida", bikeWeight: 7.6 },
    { bikeName: "Canyon", bikeWeight: 7.9 },
    { bikeName: "BMC", bikeWeight: 8.1 }
];
let lightBike = bike[0]

bike.forEach(bikeEl => {
    if (bikeEl.bikeWeight < lightBike.bikeWeight) {
        lightBike = bikeEl
    }
});

const { bikeName, bikeWeight } = lightBike

console.log(`Il modello più leggero del catagolo è la ${bikeName} e pesa ${bikeWeight}`)