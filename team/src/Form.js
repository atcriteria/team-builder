import React from 'react';

export default function Form(props){
    const { values, update, submit } = props;

    const onChange = evt => {
        const {name, value} = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();

        submit();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Username
                    <input
                    type="text"
                    name="username"
                    onChange={onChange}
                    value={values.username}
                    placeholder="enter username"
                    maxLength="16" >

                    </input>
                </label>

                <label>Email
                    <input
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={values.email}
                    placeholder="enter email"
                    maxLength="32" >

                    </input>
                </label>

                <label>Role
                    <select
                    name="role"
                    onChange={onChange}
                    value={values.role}>
                        <option value="" >-Select A Roll-</option>
                        <option value="engineer" >Engineer</option>
                        <option value="artist" >Artist</option>
                        <option value="marketing" >Marketing</option>
                        <option value="software" >Software Eng.</option>
                        <option value="management" >Management</option>
                        <option value="relations" >Public Relations</option>
                    </select>
                </label>
                <button className="submit">Submit</button>
            </form>
        </div>
    )
}