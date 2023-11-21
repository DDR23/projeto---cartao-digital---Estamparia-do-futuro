import { useState } from 'react'
import './index.scss'
import Modal from './modal/modal'

export default function App() {
  const [mostrarModal, setMostrarModal] = useState({isOpen: false, title: "", description: "", link: ""})

  return (
    <>
      <div className="app stripe">
        <div className="app__background">
          <img src="/bg-estamparia-do-futuro.jpg" alt="" />
        </div>
        <div className="app__navbar">
          <div className="app__navbar--btns">
            <button className='btnapp' onClick={() => setMostrarModal({isOpen: true, title: 'Curso de Pino', description: 'aqui precisa conter uma breve explicação do que se trata o curso', link: 'https://wa.me/5581992430922?text=%20Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20pino'})}>cursos</button>
            <button className='btnapp' onClick={() => setMostrarModal({isOpen: true, title: 'Faça um orçamento Agora', description: '81 99243-0922 - (Gyleno)', link: 'https://wa.me/5581992430922'})}>contato</button>
          </div>
          {
            mostrarModal.isOpen &&
            <Modal
            isOpen={mostrarModal.isOpen}
            isClose={() => setMostrarModal({...mostrarModal, isOpen: false})} 
            title={mostrarModal.title}
            description={mostrarModal.description}
            link={mostrarModal.link}
            />
          }
        </div>
      </div>
    </>
  )
}