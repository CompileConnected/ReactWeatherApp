import React from "react";
import styled from "styled-components";

const StyledGeolocation = styled.div`
  color: #fff;
  h1 {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 5px;
  }
  h3 {
    font-size: 1rem;
  }
`;

const Geolocation = ({ location, currentDate }) => (
  <StyledGeolocation>
    {/* <h1> Hamamatsu, JP </h1> */}
    <h1> {location.city} </h1>
    <h1>
      {" "}
      {location.state}, {location.country}{" "}
    </h1>
    <h3> {currentDate} </h3>
    {/* <h3> Thusday 10 January 2020 </h3> */}
  </StyledGeolocation>
);

export default Geolocation;
