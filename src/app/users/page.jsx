import React from 'react';

const UsersPage =async  () => {

    const res =await fetch('http://localhost:8000/users') ;
    const users = await res.json() ;

    // console.log(users) ;

    return (
        <div className='p-10'>
            <h2>Users: {users.length}</h2>

            <div className='grid grid-cols-3 gap-6'>
                {
                    users.map(user => <div className='border rounded-xl shadow hover:shadow-xl transition duration-200 p-4' key={user.id}>
                        <p className='font-bold text-xl'>{user.name}</p>
                        <p className='font-bold '>{user.age}</p>
                        <p className='font-bold '>{user.email}</p>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default UsersPage;