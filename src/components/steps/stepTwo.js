
const stepTwo = ({ prev, inputName }) => {
    return (
        <div>
            <h2 className="animate__animated animate__fadeIn">What's your profile name?</h2>
            <form onSubmit={(e) => inputName(e)}>
            <input spellcheck="false" type="text" class="animate__animated animate__fadeIn"></input>
            </form>
            <div className="flex">
                <button onClick={prev}>{'<'}</button>
            </div>
        </div>
    )
}

export default stepTwo;