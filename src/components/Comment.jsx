import { Avatar } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
gap: 1rem;
margin: 3rem 0rem;
`;

const Details = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
`;

const Name = styled.span`
font-size: 1.2rem;
font-weight: 500;
`;

const Date = styled.span`
font-size: 1rem;
fnont-weight: 400;
color: gray;
margin-left: 0.5rem;
`;
const Text = styled.p`
font-size: 1.2rem;
`


export default function Comment() {
  return (
    <Container>
        <Avatar src="https://www.youtube.com/embed/Znd64YGsLHU?si=oqVwesqPbZvK27z0" />
        <Details>
            <Name>Mehdi Ali<Date>1 day ago</Date></Name>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, autem fuga eligendi quia dicta magnam perferendis id, neque doloremque officia reprehenderit, tempore itaque.</Text>
        </Details>
    </Container>
  )
}
