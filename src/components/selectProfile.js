const selectProfile = ({createNewProfile}) => {
    return (
        <div>
            <h2>Who's watching?</h2>
            <div className="media-container">
                <div className="media-group">
                {JSON.parse(localStorage.getItem("users")).map(user => {
                return <div className="media-element">
                    <img src={user.profile}></img>
                    <p>{user.name}</p>
                    </div>
            })}
                </div>
            </div>
            <button onClick={createNewProfile}>create new profile</button>
        </div>
    )
}

export default selectProfile;