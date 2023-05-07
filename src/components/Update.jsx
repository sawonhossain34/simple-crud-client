// import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser);

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.name.value;
        console.log(name,email);
    }


    return (
        <div>
            <h3>Update information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" defaultValue={loadedUser?.name}/><br />
                <input type="email" name="email" id="" defaultValue={loadedUser?.email} /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;