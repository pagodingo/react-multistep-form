import "../App.css"
import ProfileSelection from './profileSelection'
const stepOne = ({ next, prev, setProfile, displayProfile }) => {
    return (
        <div>
            <h1 className="animate__animated animate__fadeIn">Select an avatar</h1>
            <ProfileSelection setProfile={setProfile}/>
            <div className="flex">
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
            </div>
            <button onClick={displayProfile}>log profile</button>
        </div>
    )
}

export default stepOne