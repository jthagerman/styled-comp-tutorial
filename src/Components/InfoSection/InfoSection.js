import React from "react";
import { InfoSec,InfoRow,InfoColumn, TextWrapper } from "./InfoSection.elements";
import { Container } from "../../globalStyles";


const InfoSection = ({ lightBg, imgStart }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>h1</InfoSec>
      <Container>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>Home Page</TextWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
    </>
  );
};

export default InfoSection;
