import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Dialogs.module.css'

const Dialog = (props) => {
  return <div>
    <NavLink to={'/Dialogs/' + props.id}>{props.name}</NavLink>
  </div>
}

const Message = (props) => {
  return <div className={c.message}>
    {props.content}
  </div>

}


const Dialogs = (props) => {
  let dialogsDataNew=props.dialogsData.map(e => {
  console.log(props)
    return (<Dialog name={e.name} id={e.id} />)
  })
  let messageDataNew=props.messageData.map(e => {
    return (<Message content={e.content}/>)
  })

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
         {dialogsDataNew} 

      </div>
      <div className={c.messages}>
        {messageDataNew}
      </div>
    </div>
  )
}

export default Dialogs;