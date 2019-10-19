// HeadshotsKillsTotal .value
// EnemiesKilledTotal .value
// CoopGlobalPlaytime
// SoloGlobalPlaytime
// iLevelPlayer

const getStatsFromName = name => window.state.stats.find(stat => stat.nameOnPlatform === name)
const getTimeplayed = playerStats => (Number(playerStats.CoopGlobalPlaytime.value) + Number(playerStats.SoloGlobalPlaytime.value)) / 3600 // timeplayed hours

function getKPHFromPlayer(name) {
    const playerStats = getStatsFromName(name)
    const totalKills = playerStats.EnemiesKilledTotal.value 
    const timeplayed = getTimeplayed(playerStats)
    return totalKills / timeplayed  
}

function getHeadshotsPercentage(name) {
    const playerStats = getStatsFromName(name)
    const totalKills = playerStats.EnemiesKilledTotal.value 
    const headshots = playerStats.HeadshotsKillsTotal.value

    return (headshots / totalKills) * 100 
}

function getGearLevelPH(name) {
    const playerStats = getStatsFromName(name)
    const gearLevel = getStat(name, 'iLevelPlayer')
    const timeplayed = getTimeplayed(playerStats)

    return gearLevel / timeplayed
}

const getStat = (name, stat) => getStatsFromName(name)[stat].value


const round = (s, length = 5) => `${s}`.substr(0, length)

function statsList(name) {
    const statsContainer = makeElement("ul", "stats-list");

    const stats = [
      {
        label: "kph",
        value: round(getKPHFromPlayer(name))
      },
      {
        label: "% headshot ",
        value: round(getHeadshotsPercentage(name))
      },
      
      {
        label: "total headshots",
        value: getStat(name, "HeadshotsKillsTotal")
      },
      {
        label: "total kills",
        value: getStat(name, "EnemiesKilledTotal")
      },
      {
        label: "longest kill",
        value: getStat(name, "LongestRangeKillsDistance")
      },
      { label: "gearlevel/hour", value: round(getGearLevelPH(name)) },
      {
        label: "minutes in prone camo",
        value: round(getStat(name, "TotalTimeInProneCamo.HiddenStateContext.0") / 60, 5)
      },
    ];
  
    stats.forEach(s => {
        const li = makeElement('li', 'stats-item', `${s.value} ${s.label}`)
        statsContainer.appendChild(li)
    })


    return statsContainer
}
