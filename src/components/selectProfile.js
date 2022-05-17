const selectProfile = ({createNewProfile}) => {
    if (localStorage.getItem("users") != null) {
        return (
            <div>
                <h2>Who's watching?</h2>
                <div className="media-container">
                    <div className="media-group">
                    {JSON.parse(localStorage.getItem("users")).map(user => {
                    return <div className="media-element">
                        <img src={user.profile}></img>
                        <h6>{user.permissions}</h6>
                        <h3>{user.name}</h3>
                        </div>
                })}
                <button className="new-profile" onClick={createNewProfile}>+ new profile</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Who's watching?</h2>
                <div className="media-container">
                    <div className="media-group">
                        <button className="new-profile" onClick={createNewProfile}>+ new profile</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default selectProfile;