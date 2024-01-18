import React from 'react'
interface props {
    children:string;
    onClose:() => void;
}

const Alert = ({children,onClose}:props) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
  {children}
  <button className="btn-close" data-bs-dismiss onClick={onClose}></button>
</div>
  )
}

export default Alert
