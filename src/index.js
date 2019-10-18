window.state = {
    players: [],
    stats: []
}

async function initalizeData() {
    const players = await fetch('./data/players.json')
        .then(response => response.json())
        .then(data => {
            return data.players.map(p => {
                const { nameOnPlatform, profileId } = p
                return {
                    nameOnPlatform, profileId
                }
            })
        })

    const stats = await fetch('./data/response.json')
        .then(response => response.json())
        .then(data => data)

    const labels = await fetch('./data/labels.json')
        .then(response => response.json())
        .then(data => data)

    

    console.log(players, stats, labels)
}


initalizeData()