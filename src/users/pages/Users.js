import React from "react";
import UsersList from "../components/UsersList"; 



function Users() {

    const USERS = [
                    {id: "u1", image: "https://media.licdn.com/dms/image/C4E03AQGc1hcQjy_VQA/profile-displayphoto-shrink_800_800/0/1517353110709?e=2147483647&v=beta&t=Fij2CabdqjwjE4ERFm0ATQfa0F3F_jcoRUrsz0TNXKw", name: "gaetan", places: 3}, 
                    {id: "u2", image: "https://media.licdn.com/dms/image/C4D03AQGoLmb-xKLBHA/profile-displayphoto-shrink_400_400/0/1600951027479?e=2147483647&v=beta&t=GgVkELAytBrvOcahztV3Bi77AoKdObbcHumFc6jJ2RA", name: "alice", places: 1}
                ]
    return(
    <>
        <div>
        <UsersList items={USERS}/>
       </div>
    </>
    )
}

export default Users;