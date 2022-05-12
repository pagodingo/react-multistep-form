const stepThree = ({ next, prev }) => {
    return (
        <div>
            <h1>Enter your email address</h1>
            <input type="text"></input>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
        </div>
    )
}

export default stepThree