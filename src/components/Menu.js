import React, {Button} from 'react'



const NavButton = () => {
    
    const testNavButton = () => {
        console.log("NavButton pressed")
    }


  return (
    <div>
      <button className = "nav-button" onClick={testNavButton}> test </button>
    </div>
  )
}






const NavBar = () => {
  return (
    <div>
      
    </div>
  )
}




const Menu = () => {
  return (
    <div>
      
    </div>
  )
}

export {Menu, NavButton, NavBar}
