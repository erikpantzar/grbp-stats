console.log('hej')

fetch('./data/players.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })

fetch('./data/response.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
