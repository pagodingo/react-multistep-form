const stepThree = ({ next, prev }) => {
    return (
        <div>
            <h1 className="animate__animated animate__fadeIn">Select your color scheme</h1>
            <input type="text" placeholder="...search colors"></input>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
        </div>
    )
}

export default stepThree