import React from 'react'

function Header(props) {
  return (
    <nav className="container-fluid navbar bg-dark px-5 header" style={{color:"white"}}>
        <h5>Weather-app  <i className="fa-solid fa-cloud"></i></h5>
        <div className="">
            <p className="px-5"><a href="/" onClick={props.change0}>Home <i className="fa-solid fa-house-chimney"></i></a></p>
            <p><a href="/weather" onClick={props.change1}>Weather <i className="fa-solid fa-cloud"></i></a></p>
        </div>
    </nav>
  )
}

export default Header;