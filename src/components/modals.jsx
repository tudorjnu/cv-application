import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-container">
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          <FontAwesomeIcon icon="xmark" />
        </button>
        {children}
      </div>
    </div>
  );
}
