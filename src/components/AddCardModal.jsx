import { useState } from "react";
import { X } from "lucide-react";

export default function AddCardModal({ isOpen, onClose, onAddCard }) {
  const [formData, setFormData] = useState({
    subject: "PIPE",
    topic: "",
    title: "",
    maskedDisplay: "",
    rawFormula: "",
    answerVariable: "",
    units: "",
    constants: "",
    audioNote: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCard(formData);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-panel">
        <button onClick={onClose} className="modal-close-button" aria-label="Close">
          <X className="icon" />
        </button>

        <h3 className="modal-title">Add Custom Formula to Vault</h3>

        <form onSubmit={handleSubmit} className="formula-form">
          <div className="form-grid">
            <div>
              <label className="form-label">Subject</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="form-control"
              >
                <option value="Math">Math</option>
                <option value="PIPE">PIPE</option>
                <option value="Machine Design">Machine Design</option>
              </select>
            </div>
            <div>
              <label className="form-label">Sub-topic</label>
              <input
                type="text"
                required
                placeholder="e.g. Thermodynamics"
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="form-control"
              />
            </div>
          </div>

          <div>
            <label className="form-label">Formula Title</label>
            <input
              type="text"
              required
              placeholder="e.g. Carnot Efficiency"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="form-control"
            />
          </div>

          <div>
            <label className="form-label">Masked Display (Use [ ? ])</label>
            <input
              type="text"
              required
              placeholder="e.g. eta = 1 - (T_L / [ ? ])"
              value={formData.maskedDisplay}
              onChange={(e) => setFormData({ ...formData, maskedDisplay: e.target.value })}
              className="form-control formula-input"
            />
          </div>

          <div>
            <label className="form-label">Full Raw Formula</label>
            <input
              type="text"
              required
              placeholder="e.g. eta = 1 - (T_L / T_H)"
              value={formData.rawFormula}
              onChange={(e) => setFormData({ ...formData, rawFormula: e.target.value })}
              className="form-control formula-input"
            />
          </div>

          <div className="form-grid">
            <div>
              <label className="form-label">Answer Variable</label>
              <input
                type="text"
                required
                placeholder="e.g. T_H"
                value={formData.answerVariable}
                onChange={(e) => setFormData({ ...formData, answerVariable: e.target.value })}
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label">Units</label>
              <input
                type="text"
                placeholder="e.g. T_L, T_H in Kelvin"
                value={formData.units}
                onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                className="form-control"
              />
            </div>
          </div>

          <div>
            <label className="form-label">Audio Note Transcript</label>
            <textarea
              rows="2"
              placeholder="Transcript for speech synthesis..."
              value={formData.audioNote}
              onChange={(e) => setFormData({ ...formData, audioNote: e.target.value })}
              className="form-control"
            />
          </div>

          <button
            type="submit"
            className="form-submit"
          >
            Save to Database
          </button>
        </form>
      </div>
    </div>
  );
}