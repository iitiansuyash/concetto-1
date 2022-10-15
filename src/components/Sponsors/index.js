import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import Header from "../Header";
import './styles.css';

const SponsorsContainer = styled(Container)`
  min-height: 100%;
  margin-top: 0px;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  overflow: hidden;
  justify-content: center;
`
const Title = styled.h2`
  text-align: center;
  margin-top: 52px;
  margin-bottom: 0px;
  letter-spacing: -2px;
  color: cyan !important;
  font-size: 44px !important;
  font-family: "Montserrat", sans-serif;
`
const Subtitle = styled.h3`
  text-align: center;
  margin-top: 40px;
  letter-spacing: -2px;
  color: white;
  font-size: 36px;
  font-family: "Moneterrat", sans-serif;
`
const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 250px;
`

export default function Sponsors() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://admin.concetto.in/sponsors/", { mode: 'cors' }).then(res => res.json()).then(data => setData(data));
  }, []);


  return (
    <>
      <Header />
      <section className="sponsors">
        <Title>Sponsors</Title>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map(sponsor => {
              return <a href={sponsor.url} target="_blank">
                <StyledImg src={sponsor.logo} alt={sponsor.name} className="img-fluid cap-logo" />
              </a>
            })}
          </div>
        </SponsorsContainer>
      </section>
    </>
  )
}