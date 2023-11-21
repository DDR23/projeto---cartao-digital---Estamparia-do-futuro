import './index.scss'
import { RiCloseCircleFill } from "react-icons/ri";

export default function Modal({ isOpen, isClose, title, description, link }) {
  if (isOpen) {
    return (
      <>
        <div className="modal">
          <div className="modal__logo">
            <img src="/bg-estamparia-do-futuro.jpg" alt="" />
          </div>
          <div className="modal__content">
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={link}><button className='btnmodal'>Enviar mensagem</button></a>
            <RiCloseCircleFill size={30} onClick={() => isClose()}/>
          </div>
        </div>
      </>
    )
  } else {
    return null
  }
}



