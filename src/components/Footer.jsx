import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #05445e;
  color: #ffffff;
  padding: 40px 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const Section = styled.div`
  flex: 1;
  min-width: 150px;

  h4 {
    margin-bottom: 10px;
    font-size: 18px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 5px 0;
      font-size: 16px;
    }

    a {
      color: #ffffff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const FeaturedLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;

  img {
    height: 40px;
    object-fit: contain;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  a {
    color: #ffffff;
    font-size: 24px;

    &:hover {
      color: #00bcd4;
    }
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid #ffffff;
  margin-top: 20px;
  padding-top: 10px;
  font-size: 14px;

  a {
    color: #ffffff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <h4>Explore</h4>
          <ul>
            <li><a href="#">Interns</a></li>
            <li><a href="#">Universities</a></li>
            <li><a href="#">Governments</a></li>
            <li><a href="#">Companies</a></li>
            <li><a href="#">Affiliates</a></li>
          </ul>
        </Section>
        <Section>
          <h4>About Us</h4>
          <ul>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Join Us</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </Section>
        <Section>
          <h4>Follow Us</h4>
          <SocialLinks>
            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </SocialLinks>
        </Section>
      </FooterContent>
      <BottomBar>
        © 2024 . All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;