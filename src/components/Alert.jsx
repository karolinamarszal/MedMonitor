import React, { useEffect } from "react"

const Alert = ({type, msg, removeAlert, appointments}) => {
  useEffect(()=> {
    const timeout = setTimeout(()=> {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [appointments])

  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}


export default Alert