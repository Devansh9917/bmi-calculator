import { useState } from 'react';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState('');

  const calcBmi = (event) => {
    event.preventDefault();

    const parsedWeight = Number(weight);
    const parsedHeight = Number(height);

    if (!parsedWeight || !parsedHeight || parsedWeight <= 0 || parsedHeight <= 0) {
      alert('Please enter a valid weight and height');
      return;
    }

    const bmiValue = parsedWeight / (parsedHeight * parsedHeight);
    const roundedBmi = bmiValue.toFixed(1);

    setBmi(roundedBmi);

    if (bmiValue < 18.5) {
      setMessage('You are underweight');
    } else if (bmiValue < 25) {
      setMessage('You are healthy');
    } else {
      setMessage('You are overweight');
    }
  };

  const reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi(0);
    setMessage('');
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div>
            <label>Height (m)</label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" type="button" onClick={reload}>
              Reload
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}