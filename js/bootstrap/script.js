// get the data from the API endpoint using fetch() and JSON.parse() methods

//nombre de joueurs connecter
fetch('https://api.minetools.eu/query/82.165.78.39')

.then(response => response.json())

.then(data => document.getElementById('player').innerHTML = JSON.stringify(data.Players)) // log the obtained json object to the console


//nombre de joueurs max prise en charge par le serveur
fetch('https://api.minetools.eu/query/82.165.78.39')

.then(response => response.json())

.then(data2 => document.getElementById('playermax').innerHTML = "/" + JSON.stringify(data2.MaxPlayers)) // log the obtained json object to the consol


//nom de tout les joueurs connecter 
fetch('https://api.minetools.eu/query/82.165.78.39')

.then(response => response.json())

.then(data3 => document.getElementById('playerC').innerHTML = JSON.stringify(data3.Playerlist))