import React from 'react'
import EdSheranM from '../images/edSheeran.jpg'

const EdSheeran = ( { className } ) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={EdSheranM} alt="Cantautor y músico británico" className="image" />
    </div>
  )
}

export default EdSheeran