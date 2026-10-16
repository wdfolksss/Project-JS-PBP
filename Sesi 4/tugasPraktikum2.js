var motoGP = [
    {
        Circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        Circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Cruthlow',
            country: 'UK'
        }
    },
    {
        Circuit: 'De Jeres',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rosii',
            country: 'Italy'
        }
    },
    {
        Circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

var hasil = {};

motoGP.forEach(function(race){
    var country = race.winner.country;

    if(!hasil[country]) {
        hasil[country] = {
            winningCircuit: [],
            totalwin: 0
        };
    }

    hasil[country].winningCircuit.push({
        name: race.winner.firstName + ' ' + race.winner.lastName,
        winLocation: race.Circuit + ', ' + race.location
    });

    hasil[country].totalwin++;
});


function tampilkanHasil(data){
    for (var country in data) {
        console.log(country + ':');

        data[country].winningCircuit.forEach(function(winner){
            console.log('name: ' + winner.name);
            console.log('winLocation: ' + winner.winLocation);
        });

        console.log(' totalwin: ' + data[country].totalwin);
        console.log('');
    }
}
tampilkanHasil(hasil);