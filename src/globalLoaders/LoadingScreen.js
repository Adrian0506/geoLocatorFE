import React from 'react'
import './css/globalLoaders.css';

const loadingScreen = () => {
    return (
        <React.Fragment>
            <div className = 'loader'>
            <div>
            <span className= 'load-logo'>L</span>
            <span className= 'load-logo'>o</span>
            <span className= 'load-logo'>a</span>
            <span className= 'load-logo'>d</span>
            <span className= 'load-logo'>i</span>
            <span className= 'load-logo'>n</span>
            <span className= 'load-logo'>g</span>
            <span className= 'load-logo'>.</span>
            <span className= 'load-logo'>.</span>
            <span className= 'load-logo'>.</span>
            </div>
            <div className="lds-ripple"><div></div><div></div></div>  </div>
      </React.Fragment>
    )
}

export default loadingScreen;