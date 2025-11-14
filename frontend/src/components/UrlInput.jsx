import "./UrlInput.css";

function UrlInput({ redditUrl, setRedditUrl, loading, handleGenerate, error }) {
  return (
    <div className="url-input-section">
      <input
        type="text"
        placeholder="Paste Reddit post URL (e.g. https://reddit.com/r/...)"
        value={redditUrl}
        onChange={(e) => setRedditUrl(e.target.value)}
        className="url-input"
      />

      <button
        className="generate-btn"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export default UrlInput;
