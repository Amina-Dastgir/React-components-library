import { useState } from "react";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Modal from "./Components/Modal";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <h1>React Components Library</h1>

      <div className="button-section">
        <Button text="Primary" type="primary" />
        <Button text="Success" type="success" />
        <Button text="Danger" type="danger" />
      </div>

      <div className="card-section">
        <Card
          image="https://picsum.photos/300/200"
          title="React Card"
          description="Beautiful reusable card component."
        />

        <Card
          image="https://picsum.photos/301/200"
          title="UI Design"
          description="Interactive hover effects."
        />
      </div>

      <Button
        text="Open Modal"
        type="primary"
        onClick={() => setIsOpen(true)}
      />

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export default App;