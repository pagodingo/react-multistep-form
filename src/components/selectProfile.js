const selectProfile = ({createNewProfile, deleteProfile}) => {
    if (localStorage.getItem("users") != null) {
        let users = JSON.parse(localStorage.getItem("users"))

        return (
            <div>
                <h2>Who's watching?</h2>
                <div className="media-container">
                    <div className="media-group">
                    {users.map(user => {
                    return <div className="media-element">
                        <img src={user.profile}></img>
                        {/*<h6 style={{textDecoration: "underlined"}}>{user.permissions}</h6>*/}
                        <h3>{user.name}</h3>
                        <h6 style={{color: "#3A3B3C", marginBottom: "2vh"}}><button onClick={() => deleteProfile(user.name)}>[ delete proifle ]</button></h6>
                        </div>
                })}
                <button onClick={createNewProfile} className="new-profile" >+ new profile</button>
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