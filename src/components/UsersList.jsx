import React, { use } from 'react';

const UsersList = ({usersPromise}) => {

    const users = use(usersPromise) ;

    return (
        <div>

            <h1>Users inside users list : {users.length}</h1>
            
        </div>
    );
};

export default UsersList;