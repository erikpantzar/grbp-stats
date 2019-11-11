window.state = {
  players: [],
  stats: [],
  labels: [],
}

async function initalizeData() {
  const players = await fetch('./data/players.json')
    .then(response => response.json())
    .then(data => {
      return data.players.map(p => {
        const { nameOnPlatform, profileId } = p
        return {
          nameOnPlatform,
          profileId,
        }
      })
    })


  const hardcoded = '411'
  const para = window.location.search.replace('?d=', '')
  const url = `./data/response${para ? para : hardcoded}.json`

  const stats = await fetch(url)
    .then(response => response.json())
    .then(data => {
      const profiles = data.profiles.map(profile => {
        return {
          nameOnPlatform: players.find(p => p.profileId === profile.profileId)
            .nameOnPlatform,
          profileId: profile.profileId,
          ...profile.stats,
        }
      })
      return profiles
    })

  const labels = await fetch('./data/labels.json')
    .then(response => response.json())
    .then(data => data)

  window.state = {
    players,
    stats,
    labels: {
      ...labels.Statscards,
    },
  }

  draw()
}

function draw() {
  const playerContainer = makeElement('ul', 'player-list')

  // setup player elements
  window.state.players.forEach(player => {
    const playerElement = makeElement('li', 'player-list-item')

    const name = player.nameOnPlatform
    playerElement.appendChild(
      makeElement(
        'h2',
        'player-title',
        `${name}(${getStat(name, 'iLevelPlayer')})`,
      ),
    )
    playerElement.appendChild(statsList(player.nameOnPlatform))
    playerContainer.appendChild(playerElement)
  })

  // draw players to DOM
  document.body.appendChild(playerContainer)
}

initalizeData()
