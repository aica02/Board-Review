import { Flame, Zap, Plus, Layers } from "lucide-react";

export default function Navbar({ activeTab, setActiveTab, streak, lowEnergyMode, setLowEnergyMode, onOpenAdd }) {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-icon">
          <Layers className="icon icon-large" />
        </div>
        <div>
          <h1 className="brand-title">Board Review</h1>
          <p className="brand-subtitle">ME Board Exam Prep System</p>
        </div>
      </div>

      <nav className="nav-tabs" aria-label="Main navigation">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`nav-tab ${activeTab === "dashboard" ? "is-active" : ""}`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab("recall")}
          className={`nav-tab ${activeTab === "recall" ? "is-active" : ""}`}
        >
          Recall Engine
        </button>
        
        {!lowEnergyMode && (
          <button
            onClick={() => setActiveTab("strategy")}
            className={`nav-tab ${activeTab === "strategy" ? "is-active" : ""}`}
          >
            Strategy Engine
          </button>
        )}
        <button
          onClick={() => setActiveTab("evaluation")}
          className={`nav-tab ${activeTab === "evaluation" ? "is-active" : ""}`}
        >
          Math & Eng. Sciences
        </button>
        <button
          onClick={() => setActiveTab("powerplant")}
          className={`nav-tab ${activeTab === "powerplant" ? "is-active" : ""}`}
        >
          Powerplant Engineering
        </button>
      </nav>

      <div className="topbar-actions">
        {/* <div className="streak-badge">
          <Flame className="icon icon-small icon-filled" />
          <span>{streak} Day Streak</span>
        </div> */}

        <button
          onClick={() => setLowEnergyMode(!lowEnergyMode)}
          className={`energy-toggle ${lowEnergyMode ? "is-active" : ""}`}
          title="Toggle low-energy gentle mode"
        >
          <Zap className="icon icon-small" />
          <span>Low Energy</span>
        </button>

        <button
          onClick={onOpenAdd}
          className="add-button"
          title="Add Custom Formula"
        >
          <Plus className="icon icon-small" />
        </button>
      </div>
    </header>
  );
}