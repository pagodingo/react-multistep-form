import "../App.css"
import ProfileSelection from './profileSelection'
const stepOne = ({ setProfile, profiles }) => {
    return (
        <div>
            <div className="tv"></div>
            <h2 className="animate__animated animate__fadeIn">Choose your avatar</h2>
            <ProfileSelection setProfile={setProfile}/>
            

            <div className="flex">
                <button onClick={profiles}>back to profiles</button>
            </div>
        </div>
    )
}

export default stepOne;