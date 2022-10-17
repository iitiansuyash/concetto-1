import React, { useState, useEffect } from "react"
import styled from "styled-components"

const CardBody = styled.div`
    padding: 10px;
    width: 350px;
    margin: 10px !important;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    max-width: 400px;
    margin: auto;
    overflow-y: auto;
    position: relative;
    z-index: 1;
    overflow-x: hidden;
    display: flex;
    transition: 0.3s;
    flex-direction: column;
    height: 400px;
`

const CardHeader = styled.div`
    position: relative;
    display: flex;
    height: 200px;
    flex-shrink: 0;
    width: 100%;
    transition: 0.3s;
`
const CardCover = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    height: 160px;
    top: -20%;
    left: 0;
    will-change: top;
    background-size: cover;
    background-position: center;
    filter: blur(30px);
    transform: scale(1.2);
    transition: 0.5s;
`

const CardAvatar = styled.img`
    width: 100px;
    height: 100px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    object-position: center;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-64px);
`
const CardName = styled.h1`
    position: absolute;
    bottom: 0;
    color: #ccc;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    transform: translateY(-10px) translateX(-50%);
    left: 50%;
`
const CardDesignation = styled.h2`
    position: absolute;
    margin: 0;
    bottom: -4px;
    margin-top: 4px;
    font-size: 12px;
    white-space: nowrap;
    font-weight: 500;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    left: 50%;
    color: #66ffff;
    transform: translateX(-50%) translateY(-7px);
`
const CardSocial = styled.div`
    position: absolute;
    bottom: 0;
    top: 210px;
    color: #ccc;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    transform: translateY(-10px) translateX(-50%);
    left: 50%;
`
const StyledSVG = styled.svg`
    fill: white;
    color: white;
    width: 25px;
    height: 40px;
    display: block;
    transition: 0.3s;
    text-align: center;
    margin: 0 auto;
`
const CardSocialLink = styled.a`
  color: #8797a1;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    background-color: rgba(93, 133, 193, 0.05);
    border-radius: 50%;
    margin-right: 10px;
    &:hover {
      svg {
        fill: darken(rgb(165, 181, 206), 20%);
      }
    }
    &:last-child {
      margin-right: 0;
    }
`
const CardContact = styled.div`
    position: absolute;
    top: 300px;
    color: #ccc;
    font-size: 16px;
    font-weight: 700;
    white-space: nowrap;
    transform: translateY(-10px) translateX(-50%);
    left: 50%;
`


export default function Card(props) {
    const [member, setMember] = useState(props.member)

    return (
        <CardBody id={member.id}>
            <CardHeader>
                <CardCover style={{ backgroundImage: member.image }}></CardCover>
                <CardAvatar src={member.image} alt="avatar" />
                <CardName>{member.name}</CardName>
                <CardDesignation>{member.designation}</CardDesignation>
                <CardSocial>
                    <CardSocialLink href={member.linkedin}><StyledSVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />LinekdIn</StyledSVG>
                    </CardSocialLink>
                </CardSocial>
                <CardContact>
                    <StyledSVG xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></StyledSVG>{member.contact}
                </CardContact>

            </CardHeader>
        </CardBody>
    )
}