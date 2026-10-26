import { Brain, BookOpen, Zap, Trash2, Search } from "lucide-react";
import MathView from "./MathView";

export default function Dashboard({ cards, setActiveTab, onDeleteCard, searchQuery, setSearchQuery, lowEnergyMode }) {
  const query = searchQuery.toLowerCase();
  const filteredCards = cards.filter((card) =>
    [card.title, card.topic, card.subject].some((value) =>
      String(value ?? "").toLowerCase().includes(query)
    )
  );

  return (
    <div className="dashboard">
      {lowEnergyMode && (
        <div className="energy-notice">
          <Zap className="icon energy-notice-icon" />
          <div>
            <strong>Low-Energy Mode Active:</strong> Heavy word problems are hidden. Focus gently on light formula flashcards today!
          </div>
        </div>
      )}

      <div className="feature-grid">
        <div 
          onClick={() => setActiveTab("recall")}
          className="feature-card feature-card-recall"
        >
          <div className="feature-icon feature-icon-cyan">
            <BookOpen className="icon" />
          </div>
          <h3 className="feature-title">Quick Recall (5 min)</h3>
          <p className="feature-description">Formula flashcards with variable masking and audio explanations.</p>
        </div>

        {!lowEnergyMode && (
          <div 
            onClick={() => setActiveTab("strategy")}
            className="feature-card feature-card-strategy"
          >
            <div className="feature-icon feature-icon-green">
              <Brain className="icon" />
            </div>
            <h3 className="feature-title">First Step Strategy (10 min)</h3>
            <p className="feature-description">PRC-style word problems focusing on first-step governing equations.</p>
          </div>
        )}
      </div>

      <section className="vault-panel">
        <div className="vault-header">
          <div>
            <h3 className="vault-title">Formula &amp; Challenge Vault</h3>
            <p className="vault-count">Total cards synchronized: {cards.length}</p>
          </div>
          <div className="search-field">
            <Search className="icon search-icon" />
            <input 
              type="text"
              placeholder="Search vault..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="card-list">
          {filteredCards.map((card) => (
            <article key={card.id} className="vault-card">
              <div className="vault-card-content">
                <div className="vault-card-meta">
                  <span className="subject-tag">
                    {card.subject}
                  </span>
                  <span className="topic-label">{card.topic}</span>
                  <span className="source-tag">
                    {card.source || "Built-in"}
                  </span>
                </div>
                <h4 className="vault-card-title">{card.title}</h4>
                <div className="formula-preview" title="Masked formula">
                  {card.latexMasked || card.maskedDisplay ? (
                    <MathView math={card.latexMasked || card.maskedDisplay} />
                  ) : (
                    <span className="formula-unavailable">No formula preview</span>
                  )}
                </div>
              </div>
              <button 
                onClick={() => onDeleteCard(card.id)}
                className="delete-card-button"
                title="Delete card"
                aria-label={`Delete ${card.title}`}
              >
                <Trash2 className="icon icon-small" />
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}