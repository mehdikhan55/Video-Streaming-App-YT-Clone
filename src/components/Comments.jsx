import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div``
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap:1rem;
`
const Input = styled.input`
border:none;
border-bottom: 1px solid gray;
background-color: transparent;
outline: none;
padding: 0.5rem;
width: 100%;
`

export default function Comments() {
    return (
        <Container>
            <NewComment>
                <Avatar src="https://www.youtube.com/embed/Znd64YGsLHU?si=oqVwesqPbZvK27z0" />
                <Input placeholder="Add a comment..."></Input>
            </NewComment>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </Container>
    )
}
