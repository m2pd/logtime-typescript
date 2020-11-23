import React from 'react'
import "./LoadingComponent.scss"
interface IProps{}

const LoadingComponent: React.FC<IProps> = (props) => {
  return(
    <div className="multi-ripple">
      <div className="item-ripple"></div>
      <div className="item-ripple"></div>
    </div>
  )
}

export default LoadingComponent;