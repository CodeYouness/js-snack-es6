const invited = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];
const invitedInfo = []

invited.forEach((people, i) => {
    invitedInfo.push({
        tableName: 'Tavolo Vip',
        guestName: people.toUpperCase(),
        place: i + 1,
    })
})