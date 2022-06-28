import UserPermissions from "../core/userPermissions"
import "../../styles/userPermissions.css"
import React from "react";

const stepThree = ({ cancel, prev, setPermissions }) => {
    return (
        <div>
            <h2 className="animate__animated animate__fadeIn">User Permissions</h2>
            <UserPermissions setPermissions={setPermissions} />
            <div className="flex">
            <button onClick={prev}>{'<'}</button>
                <button onClick={cancel}>cancel</button>
            </div>
        </div>
    )
}

export default stepThree;