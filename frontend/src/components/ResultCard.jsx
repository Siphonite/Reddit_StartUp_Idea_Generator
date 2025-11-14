import "./ResultCard.css";

function ResultCard({ result }) {
  return (
    <div className="result-card">
      <h2>Generated Startup Idea</h2>

      {Object.entries(result).map(([key, value]) => (
        <div className="result-row" key={key}>
          <strong>{key}</strong>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
}

export default ResultCard;
