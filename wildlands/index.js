function getData(entry) {
  return fetch(`./data/${entry}.json`)
    .then(response => response.json())
    .then(data => data.profiles)
}

const data = async () => {
  [1, 2, 3, 4, 5, 26].forEach(async (entry) => {
    const res = await getData(entry)
    // console.log(res)

    const arr = res.map(r => {
      if(r.hasOwnProperty('stats') && r.stats.hasOwnProperty('KilledEnemiesCount') ) {
        return { k: r.stats.KilledEnemiesCount.value, 
          p: r.profileId, 
          json: entry, 
          m: r.stats.CompletedMissionCount.value,
          c: r.stats.KillWithCQCCount.value }
      }
    })

    // 
    console.log(arr.filter(a => a !== undefined))
  })
}

//data()

const gs = (r, key) => {
  return r.stats[key].value
}


const ove = async () => {
  const res = await getData('olof')
  console.log(res)


  const formatted = res.map(r => {
    const timeplayed = (gs(r, 'CoopPlaytime') / 3600) + (gs(r, 'SoloPlaytime') / 3600) // hours
    const kills = gs(r, 'KilledEnemiesCount')
    const kph = kills/timeplayed

    return {
      stealthKills: gs(r, 'StealthKillPercentage'),
      cqc: gs(r, 'KillWithCQCCount'),
      kills,
      timeplayed,
      avgKillDistance: gs(r, 'AverageKillDistance'),
      kph,
      revives: gs(r, 'RevivedTeammateCount'),
      missions: gs(r, 'CompletedMissionCount'),
      ghostedMissions: gs(r, 'CompletedMissionWithNoAlertCount'),
      basejumps: gs(r, 'Basejumpcountcommunautary')
    }
  })  

  console.log(formatted)
}

ove()