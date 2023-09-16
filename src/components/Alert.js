import React from 'react'

function Alert(props) {
  return (
   props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible`} role="alert">
        <strong>yayy !!</strong> {props.alert.msg} : {props.alert.type}
        
</div>  
  )
}

export default Alert
