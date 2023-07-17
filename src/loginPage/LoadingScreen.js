import React, {useState} from 'react'
import '../global.css';

const LoadingScreen = () => {
    const [hideLoadingScreen, setHideLoadingScreen] = useState(false);

    const onAnimationEnd = () => {
      setHideLoadingScreen(true);
    };
    return (
        <div
        className={`${hideLoadingScreen ? 'hide' : ''}`}
        >
            <div className = 'loading-screen' onAnimationEnd={onAnimationEnd}>
            <div>
            <span className= 'load-logo'>A</span>
            <span className= 'load-logo'>d</span>
            <span className= 'load-logo'>v</span>
            <span className= 'load-logo'>e</span>
            <span className= 'load-logo'>n</span>
            <span className= 'load-logo'>t</span>
            <span className= 'load-logo'>u</span>
            <span className= 'load-logo'>r</span>
            <span className= 'load-logo'>e</span>
            <span className= 'load-logo'>.</span>
            <span className= 'load-logo'>i</span>
            <span className= 'load-logo'>o</span>
            </div>
            <div className="lds-ripple"><div></div><div></div></div>  </div>
      </div>
    )
}

export default LoadingScreen;