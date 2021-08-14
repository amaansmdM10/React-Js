import React from 'react'

function Data(props) {
      return (
            <div>
                  <button onClick= {()=>props.validateHandler()}>ClickMe</button>
                  
            </div>
      )
}

export default Data