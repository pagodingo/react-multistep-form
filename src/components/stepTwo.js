const stepTwo = ({ next, prev }) => {
    return (
        <div>
            <h1 className="animate__animated animate__fadeIn">What's your profile name?</h1>
            <input type="text" class="animate__animated animate__fadeIn"></input>
            <div className="flex">
                <button onClick={prev}>prev</button>
                <button onClick={next}>next</button>
            </div>
        </div>
    )
}

export default stepTwo