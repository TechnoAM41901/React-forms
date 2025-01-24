import React from 'react';

function ReactForm(props) {
    return (
        <div>
            <form action="">
                <h1>Register</h1><br></br>
                <label htmlFor="">Email</label>
                <input type="text" name="" id="" pattern='[a-z][0-9][@]'/><br></br>
                <label htmlFor="">Password</label>
                <input type="password" required minLength={4} maxLength={8}/><br></br>
                <label htmlFor="">Confirm Password</label>
                <input type="password" /><br></br>
                <input type="reset" />
                <input type="submit" />
            </form>
        </div>
    );
}

export default ReactForm;