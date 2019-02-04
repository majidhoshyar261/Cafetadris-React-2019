import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.json';

const TableRow = props => (
  <tr>
    <td>{props.name}</td>
    <td>{props.games}</td>
    <td>{props.wins}</td>
    <td>{props.deals}</td>
    <td>{props.loses}</td>
  </tr>
);

const Table = () => (
  <table id="asia-cup">
    <tr>
      <th>Club</th>
      <th>MP</th>
      <th>W</th>
      <th>D</th>
      <th>L</th>
    </tr>
    {data.map(d => (
      <TableRow
        name={d.name}
        games={d.games}
        wins={d.wins}
        deals={d.deals}
        loses={d.loses}
      />
    ))}
  </table>
);

const root = document.getElementById('root');
ReactDOM.render(<Table />, root);
