import React from 'react'
import './index.css'

const CardCollaborator = (props) => {
  return (
    <div className='colaborador'>
        <div className='cabecalho'style={{backgroundColor: props.color}} >
            <img src={props.img} alt="Imagem do colaborador " />
        </div>
        <div className='rodape'>
            <h4>{props.name}</h4>
            <h5>{props.charge}</h5>
        </div>
    </div>
  )
}

export default CardCollaborator