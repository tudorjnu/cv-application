/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal } from "./modals";

function AddSectionButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        justifySelf: "center",
        alignSelf: "center",
      }}
    >
      add section
    </button>
  );
}

export default function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalOpen() {
    setIsModalOpen(true);
  }
  function handleModalClose() {
    setIsModalOpen(false);
  }

  return (
    <main className="container-1 resume-wrapper">
      <AddSectionButton onClick={handleModalOpen} />
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        Banana
      </Modal>
    </main>
  );
}
