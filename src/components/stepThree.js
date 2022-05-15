const stepThree = ({ next, prev }) => {
    return (
        <div>
            {/*<h1 className="animate__animated animate__fadeIn">Select your color scheme</h1>*/}
            <div className="flex">
                <button onClick={prev}>prev</button>
                <button onClick={next}>next</button>
            </div>
        </div>
    )
}

export default stepThree