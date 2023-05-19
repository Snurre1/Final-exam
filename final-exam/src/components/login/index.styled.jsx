import styled from "styled-components";

export const registerStraight = styled.div`
  text-align: center;
`;

export const widthForm = styled.div`
  max-width: 150px;
`;

export const buttonStyling = styled.button`
  align-items: center;
    appearance: none;
    background-color: #3eb2fd;
    background-image: linear-gradient(340deg, rgb(235 48 34), rgb(255 255 255) 99%);
    background-size: calc(100% + 20px) calc(100% + 20px);
    border-radius: 100px;
    border-width: 0;
    box-shadow: none;
    box-sizing: border-box;
    color: blue;
    cursor: pointer;
    display: inline-flex;
    font-family: CircularStd, sans-serif;
    font-size: 1rem;
    height: auto;
    justify-content: center;
    line-height: 1.5;
    padding: 6px 20px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.2s, background-position 0.2s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
  }

  :active,
  :focus {
    outline: none;
  }

  :hover {
    background-position: -20px -20px;
  }

 :focus:not(:active) {
    box-shadow: rgba(40, 170, 255, 0.25) 0 0 0 0.125em;
  }`;