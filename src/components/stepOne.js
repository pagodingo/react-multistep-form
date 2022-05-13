import "../App.css"
import ProfileSelection from './profileSelection'
const stepOne = ({ next, prev }) => {
    return (
        <div>
            <h1>Choose your Avatar</h1>
            <ProfileSelection />
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
        </div>
    )
}

export default stepOne