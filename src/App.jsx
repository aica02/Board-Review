import { useState, useEffect } from "react";
import { fetchCardsFromFirebase, addCardToFirebase, deleteCardFromFirebase } from "./firebase/services";
import { INITIAL_CARDS } from "./data/initialCards";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import RecallEngine from "./components/RecallEngine";
import StrategyEngine from "./components/StrategyEngine";
import AddCardModal from "./components/AddCardModal";

export default function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard"); // dashboard | recall | strategy
  const [lowEnergyMode, setLowEnergyMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [streak] = useState(5);

  useEffect(() => {
    async function loadData() {
      const firebaseCards = await fetchCardsFromFirebase();
      if (firebaseCards.length > 0) {
        setCards(firebaseCards);
      } else {
        setCards(INITIAL_CARDS);
      }
      setLoading(false);
    }
    loadData();
  }, []);

  const handleAddCard = async (newCardData) => {
    try {
      const savedCard = await addCardToFirebase(newCardData);
      setCards((prev) => [savedCard, ...prev]);
      alert("Formula successfully added to Firebase!");
    } catch (err) {
      console.error(err);
      alert("Failed to save to Firebase.");
    }
  };

  const handleDeleteCard = async (id) => {
    const success = await deleteCardFromFirebase(id);
    if (success) {
      setCards((prev) => prev.filter((c) => c.id !== id));
    } else {
      alert("Failed to delete card.");
    }
  };

  return (
    <div className="app-shell">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        streak={streak}
        lowEnergyMode={lowEnergyMode}
        setLowEnergyMode={setLowEnergyMode}
        onOpenAdd={() => setIsAddModalOpen(true)}
      />

      <main className="app-main">
        {loading ? (
          <div className="loading-state">
            Loading Cloud Engine...
          </div>
        ) : (
          <>
            {activeTab === "dashboard" && (
              <Dashboard 
                cards={cards}
                setActiveTab={setActiveTab}
                onDeleteCard={handleDeleteCard}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                lowEnergyMode={lowEnergyMode}
              />
            )}
            {activeTab === "recall" && <RecallEngine cards={cards} />}
            {activeTab === "strategy" && <StrategyEngine />}
          </>
        )}
      </main>

      <AddCardModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onAddCard={handleAddCard}
      />
    </div>
  );
}