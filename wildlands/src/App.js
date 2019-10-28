import React from 'react';
import Table from './Table';
import './App.css';

const idToName = id => {
  const ids = {
    '88cd2ba8-86ef-49db-9664-b672a6c36519': 'st4rbr34k',
    'c6f91dbf-4414-48b9-a9ac-a37d5cf8a2ab': 'BBB',
    '87d2039c-5822-4284-8ac6-37fe3f1a2277': 'Oleeeeeman',
    '16c30c5f-4e97-455b-8123-3e6743bda427': 'Teh viickee'
  };

  return ids[id]
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    }
  }

  async componentDidMount() {
    const data = await this.fetchData()

    const mang = data.profiles.map(d => {
      return {
        name: idToName(d.profileId),
        profileId: d.profileId,
        ...d.stats
      }
    })
      .map(d => {
        const gs = (p, key) => p[key].value
        const kills = Number(gs(d, 'KilledEnemiesCount'))
        const timeplayed =  gs(d, 'SoloPlaytime')/3600 + gs(d, 'CoopPlaytime') / 3600
        const kph = kills / timeplayed
        const cqc = Number(gs(d, 'KillWithCQCCount'))
        const noalert = Number(gs(d, 'CompletedMissionWithNoAlertCount'))
        const rev = gs(d, 'RevivedTeammateCount')
        const stealth = Number(gs(d, 'StealthKillPercentage'))
  
        return {
          name: d.name, 
          kph,
          timeplayed: Number(timeplayed),
          kills,
          cqc,
          rev: Number(rev),
          noalert: Number(noalert),
          stealth,
        }
      })

    window.state = mang
  
  this.setState({
    rows: mang.map(m => ({ ...m}))
  })
  
  }

  fetchData() {
    console.log(`${process.env.PUBLIC_URL}/olof.json`)
    return fetch(`${process.env.PUBLIC_URL}/olof.json`).then(res => res.json())
  }

  render() {
    const { rows } = this.state
    return (
      <div className="App">
        {rows.length > 1 && (
          <Table rows={rows} />
        )}
      </div>
    );
  }
}

export default App;
