import './flat-button.module.scss'

export default function FlatButton({ text = "My Button" }) {
  return (
    <button>{text}</button>
  )
}
