import { useState } from 'react';
import './TeamTable.css';

function TeamTable({ teams, onSelectTeam }) {
  const [activeId, setActiveId] = useState(null);

  const handleSelect = (team) => {
    setActiveId(team.id);
    onSelectTeam(team.name);
  };

  return (
    <div className="table-card">
      <h2>Csoportkör állása</h2>
      <div className="scroll-container">
        <table>
          <thead>
            <tr>
              <th>Zászló</th>
              <th>Ország</th>
              <th>Pont</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr
                key={team.id}
                className={activeId === team.id ? 'active-row' : ''}
                onClick={() => handleSelect(team)}
              >
                <td className="flag-cell">
                  <img src={team.flag} alt={team.name} className="flag" />
                </td>
                <td className="name">{team.name}</td>
                <td className="pts">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-decoration">
        <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=500" alt="World Cup Stadium" />
      </div>
      <p><strong>"Éld át a győzelem ízét! A 2026-os VB minden pillanata tartogat egy újabb legendát. Kövesd élőben a csoportkör izgalmait!"</strong></p>
    </div>
  );
}

export default TeamTable;
