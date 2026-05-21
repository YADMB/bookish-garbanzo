import './LineupPanel.css';

function LineupPanel({ teamData, teamName }) {
  return (
    <div className="panel-card lineup-card">
      <h3>🏃 {teamName || 'Csapat'} felállása</h3>

      {teamData ? (
        <div className="pitch-layout">
          <div className="line forwards">
            {teamData.players.fw.map((p) => (
              <span key={p} className="player">{p}</span>
            ))}
          </div>
          <div className="line midfielders">
            {teamData.players.mf.map((p) => (
              <span key={p} className="player">{p}</span>
            ))}
          </div>
          <div className="line defenders">
            {teamData.players.df.map((p) => (
              <span key={p} className="player">{p}</span>
            ))}
          </div>
          <div className="line goalkeeper">
            <span className="player gk-special">{teamData.players.gk}</span>
          </div>
        </div>
      ) : (
        <div className="empty-placeholder">
          <p>Válassz csapatot a felálláshoz!</p>
        </div>
      )}

      <div className="pitch-action-img">
        <img
          src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=500"
          alt="Soccer Action"
        />
      </div>
    </div>
  );
}

export default LineupPanel;
