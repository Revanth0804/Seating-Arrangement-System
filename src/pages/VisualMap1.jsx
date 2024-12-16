import React from "react";
// import { FaChair } from "react-icons/fa";
import { PiArmchairDuotone } from "react-icons/pi";
import { LuRectangleHorizontal } from "react-icons/lu";
import styled, { keyframes, css } from "styled-components";

// Blinking animation
const blink = keyframes`
  50% {
    opacity: 0.5;
    background-color: green;
    border: 1px solid black
  }
`;

const SeatingLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  gap: 5px;
`;

const Seat = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: black;
  animation: ${({ isHighlighted }) =>
    isHighlighted ? css`${blink} 1s infinite` : "none"};

  &:hover {
    background-color: #d1e7ff;
    border-color: #007bff;
  }
`;

const SeatLabel = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
`;

const VisualMap1 = ({ highlightedSeat }) => {
  const rowLabels = "ABCDEFGHIJK";

  // Generate seating layout
  const rows = Array.from({ length: 11 }, (_, rowIndex) => (
    <Row key={rowIndex}>
      {Array.from({ length: 20 }, (_, seatIndex) => {
        const seat_number = `${rowLabels[rowIndex]}${seatIndex + 1}`;

        // Check if the current seat matches the highlightedSeat
        const isHighlighted = seat_number === highlightedSeat;

        return (
          <>
            <Seat key={seat_number} isHighlighted={isHighlighted}>
              <SeatLabel>{seat_number}</SeatLabel>
              <PiArmchairDuotone id="chair"/>
            </Seat>
          </>

          

        );
      })}
    </Row>
  ));

  return <SeatingLayoutContainer>{rows}<img src="../src/assets/images/screen.png" width="50%"></img></SeatingLayoutContainer>;
};

export default VisualMap1;
