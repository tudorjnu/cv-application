import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ModalBackground({ children, display = "none" }) {


  return (
    <div style={{
      display: display,
      position: "fixed",
      zIndex: 1,
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      overflow: "auto",
      backtroundColor: "rgb(0,0,0)",
      backgroundColor: "rgba(0,0,0,0.4)"
    }}>
      {children}
    </div>
  )
}

function CloseButton() {

  return (
    <span style={{
      color: "#aaa",
      float: "right",
      fontSize: "28px",
      fontWeight: "bold",
    }}>
      <FontAwesomeIcon icon="xmark" />
    </span>
  )
}

function ModalContent({ children }) {
  return (
    <div style={{
      backgroundColor: "#fefefe",
      margin: "15% auto",
      padding: "20px",
      border: "1px solid #888",
      width: "80%",
    }}>
      <CloseButton />
      {children}
    </div>
  )
}

function Modal({ children, display }) {

  return (
    <ModalBackground display={display}>
      <ModalContent  >
        {children}
      </ModalContent>
    </ModalBackground>
  )
}

export function AddSectionModal({ show }) {
  const display = show ? "block" : "none";

  return (
    <Modal display={display}>
      <form>
        <input placeholder="bla bla bla"></input>
        <input placeholder="bla bla bla"></input>
        <input placeholder="bla bla bla"></input>
      </form>
    </Modal>
  )
}

