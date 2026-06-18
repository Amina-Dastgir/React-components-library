import "./Modal.css";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Welcome!</h2>

        <p>
          This is an animated reusable modal component.
        </p>

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;