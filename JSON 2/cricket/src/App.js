import './App.css';
import { stats } from './data';

function App() {

  const batsman = stats.flatMap((info, i) => {
    return info.batsman
  })
  console.log('batsman',batsman);

  const average = batsman.sort((a, b) => a.formats.test.avg - b.formats.test.avg)
  console.log('average',average)

  const bowlers = stats.flatMap((info, i) => {
    return info.bowlers
  })

  const allRounders = stats.flatMap((info, i) => {
    return info.allrounders
  })

  const allBatter = [...batsman, ...allRounders]

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Batsman Name</th>
            <th>Matches</th>
            <th>Runs</th>
            <th>Test Average</th>
          </tr>
        </thead>
        <tbody>
          {average.map(({ name, formats }, i) => {
            return (
              <tr key={i}>
                <td>{name}</td>
                <td>{formats.test.matches}</td>
                <td>{formats.test.runs}</td>
                <td>{formats.test.avg}</td>
              </tr>)
          })
          }
        </tbody>
      </table>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Bowlers Name</th>
            <th>Matches</th>
            <th>Innings</th>
            <th>Wickets</th>
            <th>Economy</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map(({ name, formats }, i) => {
            return (
              <tr key={i}>
                <td>{name}</td>
                <td>{formats.t20.matches}</td>
                <td>{formats.t20.innings}</td>
                <td>{formats.t20.wickets}</td>
                <td>{formats.t20.economy}</td>
              </tr>)
          })
          }
        </tbody>
      </table>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Batter Name</th>
            <th>Matches</th>
            <th>Innings</th>
            <th>Average</th>
            <th>Runs</th>
          </tr>
        </thead>
        <tbody>
          {allBatter.map(({ name, formats }, i) => {
            return (
              <tr key={i}>
                <td>{name}</td>
                <td>{formats.odi.matches}</td>
                <td>{formats.odi.innings}</td>
                <td>{formats.odi.avg}</td>
                <td>{formats.odi.runs}</td>
              </tr>)
          })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
