import { useState } from 'react';
import AppHeader from './components/AppHeader.jsx';
import AppFooter from './components/AppFooter.jsx';
import TeamTable from './components/TeamTable.jsx';
import BookingForm from './components/BookingForm.jsx';
import LineupPanel from './components/LineupPanel.jsx';

// Külső adat és a javított CSS importálása
import { teamsData } from './data/teams.js';
import './assets/main.css';

function App() {
  const [teams] = useState(teamsData);
  const [selectedTeamName, setSelectedTeamName] = useState('');
  const [selectedTeamData, setSelectedTeamData] = useState(null);

  const handleSelection = (name) => {
    setSelectedTeamName(name);
    setSelectedTeamData(teams.find((t) => t.name === name));
  };

  return (
    <div className="app-wrapper">
      <AppHeader />
      <main className="content">
        <aside className="side-panel">
          <LineupPanel teamName={selectedTeamName} teamData={selectedTeamData} />
        </aside>

        <section className="center-layout">
          <TeamTable teams={teams} onSelectTeam={handleSelection} />
        </section>

        <aside className="side-panel">
          <BookingForm selectedTeam={selectedTeamName} />
        </aside>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
