import React from 'react'
import CardCollaborator from '../CardCollaborator'
import './index.css'

const Team = (props) => {
  const css = {backgroundColor: props.secondaryColor}

  return (
    (props.collaborators.length > 0) && (
      <section className='team'style={css} >

        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>

        <div className='colaboradores'>
          {props.collaborators.map(collaborator => <CardCollaborator color={props.primaryColor} key={collaborator.name} name={collaborator.name} charge={collaborator.charge} img={collaborator.img} />)}
        </div>
        
    </section>
    )
  )
}

export default Team