
const stepTwo = ({ next, prev }) => {
    return (
        <div>
            <h2 className="animate__animated animate__fadeIn">What's your profile name?</h2>
            <input type="text" class="animate__animated animate__fadeIn"></input>
            <div className="flex">
                <button onClick={prev}>{'<'}</button>
                <button onClick={next}>{'>'}</button>
            </div>
        </div>
    )
}

export default stepTwo;