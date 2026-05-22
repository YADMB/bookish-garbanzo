import { useState } from 'react';
import './BookingForm.css';

function BookingForm({ selectedTeam }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const submitBooking = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert(`Sikeres foglalás!\nNév: ${formData.name}\nCsapat: ${selectedTeam}`);

    setIsLoading(false);
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="section form-box">
      <div className="form-header">
        <h2>🎟️ Meccsjegy foglalás</h2>
        {selectedTeam ? (
          <div className="selected-badge">
            Kiválasztott csapat: <span>{selectedTeam}</span>
          </div>
        ) : (
          <div className="warning-badge">
            Kérjük, válassz csapatot a táblázatban!
          </div>
        )}
      </div>

      <form onSubmit={submitBooking} className="styled-form">
        <div className="input-group">
          <label>Teljes név</label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
            placeholder="Pl.: Kovács János"
            required
          />
        </div>

        <div className="input-group">
          <label>Email cím</label>
          <input
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            type="email"
            placeholder="pelda@email.com"
            required
          />
        </div>

        <button disabled={isLoading || !selectedTeam} type="submit" className="submit-btn">
          {!isLoading ? (
            <span>Jegy igénylése</span>
          ) : (
            <span className="loader-text">
              <span className="spinner">⏳</span> Feldolgozás...
            </span>
          )}
        </button>
      </form>
      <div className="promo-image">
        <img
          src="https://www.vancouverisawesome.com/static/assets/stadium-icon.jpg"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/1165/1165187.png';
          }}
          alt="Stadium"
        />
      </div>
    </div>
  );
}

export default BookingForm;
