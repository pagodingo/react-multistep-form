const stepTwo = ({ next, prev }) => {
    return (
        <div>
            <h1>What's your profile name?</h1>
            <input type="text" placeholder=""></input>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
        </div>
    )
}

export default stepTwo