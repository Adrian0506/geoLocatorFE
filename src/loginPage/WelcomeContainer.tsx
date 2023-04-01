import React from 'react'


function WelcomeContainer(props: any) {
    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={() => {
                props.onWelcomeClick('signUp')
                }}>New User</button>
            <button onClick={() => {
                props.onWelcomeClick('login')
            }}>Existing User</button>
        </div>
    )
}


export default WelcomeContainer;
