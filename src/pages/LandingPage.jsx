import React from 'react';
import styled from 'styled-components';

const LandingPageWrapper = styled.div`
    background-color: #75e6da;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    height: 130vh;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const SubHeading = styled.p`
  font-size: 1rem;
  color: #666;
`;

const BgImage = styled.div`
  background-image: url(../src/assets/images/2.jpg);
  height: 60vh;
  background-size: cover;
  background-position: center;
  width: 100%;
`;

const FeaturesSection = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const FeatureCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  max-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 10px;
`;

const CardTitle = styled.h5`
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #333;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #555;
`;

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <HeaderSection>
        <Heading>Welcome to the Convocation Seating Arrangement System!</Heading>
        <SubHeading>
          This system is designed to help you manage the seating arrangements for your university's convocation ceremony.
        </SubHeading>
      </HeaderSection>

      <BgImage></BgImage>

      <FeaturesSection>
        <FeatureCard>
          <Icon>
            <i className="fas fa-chart-line"></i>
          </Icon>
          <CardTitle>Career Path</CardTitle>
          <CardText>Chart Your Career Path with a Research-Driven Analytical Approach</CardText>
        </FeatureCard>

        <FeatureCard>
          <Icon>
            <i className="fas fa-briefcase"></i>
          </Icon>
          <CardTitle>Portfolio</CardTitle>
          <CardText>Start Your Portfolio from Ground Zero with a Capstone Project</CardText>
        </FeatureCard>

        <FeatureCard>
          <Icon>
            <i className="fas fa-headset"></i>
          </Icon>
          <CardTitle>Guidance</CardTitle>
          <CardText>Providing Guidance and Support to Propel You Toward Your Career Goals</CardText>
        </FeatureCard>
      </FeaturesSection>
    </LandingPageWrapper>
  );
};

export default LandingPage;
