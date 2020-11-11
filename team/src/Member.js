import React from 'react';
import styled from 'styled-components';

export default function Member(props) {
    const { member } = props;

    return (
        <MemberDiv >
            <p>username: { member.username }</p>
            <p>email: { member.email }</p>
            <p>role: { member.role }</p>
        </MemberDiv >
    )
}

const MemberDiv = styled.div`
width: 60%;
margin: auto;
background-color: lightgrey;
border-radius: 25px;
`