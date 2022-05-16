import UserPermissions from "./userPermissions"
import "../styles/colorSelection.css"
const stepThree = ({ saveProfile, prev }) => {
    return (
        <div>
            <h2 className="animate__animated animate__fadeIn">User Permissions</h2>
            <UserPermissions />
            <div className="flex">
            <button onClick={prev}>{'<'}</button>
                <button onClick={saveProfile}>save profile</button>
            </div>
        </div>
    )
}

export default stepThree;