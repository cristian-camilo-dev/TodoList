import React from 'react'
import '../styles/CreateTodoButtom.css'


function CreateTodoButtom(props) {
const onClickButton = () => {
  if(props.setOpenModal) {
    props.setOpenModal(prevState => !prevState)
    
    
  } else {
    props.setOpenModal(true)
  }
  
}




  return (
    <button className="app-btnAgregar"
    type="submit"
    onClick={onClickButton}
    
    >Agregar Todo</button>
  )
}

export default CreateTodoButtom