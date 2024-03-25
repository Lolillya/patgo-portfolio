import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";

const Container = styled.div`
 margin-top: 100px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 position: relative;
 z-index: 1;
 align-items: center;
 padding: 50px 0px 80px 0px;
`;

const Wrapper = styled.div`
 position: relative;
 display: flex;
 justify-content: space-between;
 align-items: center;
 flex-direction: column;
 width: 100%;
 max-width: 1100px;
 gap: 12px;
 @media (max-width: 960px) {
  flex-direction: column;
 }
`;

const Title = styled.div`
 font-size: 52px;
 text-align: center;
 font-weight: 600;
 margin-top: 20px;
 color: ${({ theme }) => theme.text_primary};
 @media (max-width: 768px) {
  margin-top: 12px;
  font-size: 32px;
 }
`;

const Desc = styled.div`
 font-size: 18px;
 text-align: center;
 font-weight: 600;
 color: ${({ theme }) => theme.text_secondary};
 @media (max-width: 768px) {
  font-size: 16px;
 }
`;

const TimeLineSection = styled.section`
 width: 100%;
 max-width: 1000px;
 margin-top: 10px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: end;
 gap: 12px;
`;

const Education = () => {
 return (
  <Container id="education">
   <Wrapper>
    <Title>Education</Title>
    <Desc>
     My education has been a journey of self-discovery and growth. My
     educational details are as follows.
    </Desc>
    <TimeLineSection>
     <Timeline>
      {education.map((education, index) => (
       <TimelineItem key={index}>
        <TimelineContent sx={{ py: "12px", px: "2px" }}>
         <EducationCard education={education} />
        </TimelineContent>
       </TimelineItem>
      ))}
     </Timeline>
    </TimeLineSection>
   </Wrapper>
  </Container>
 );
};

export default Education;
