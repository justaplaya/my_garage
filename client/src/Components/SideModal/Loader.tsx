import React from 'react';
import styled from 'styled-components';

export const Loader = () => {
  return <Item className="loader"></Item>;
};
const Item = styled.span`
  // width: 48px;
  // height: 48px;
  // display: block;
  // //margin: 15px auto;
  // position: relative;
  // color: #fff;
  // box-sizing: border-box;
  // animation: rotation 1s linear infinite;
  //
  // &::after,
  // &::before {
  //   content: '';
  //   box-sizing: border-box;
  //   position: absolute;
  //   width: 24px;
  //   height: 24px;
  //   top: 0;
  //   left: 50%;
  //   background-color: ${(props) => props.theme.colors.secondary()};
  //   border-radius: 50%;
  //   animation: scale50 1s infinite ease-in-out;
  // }
  // &::before {
  //   top: auto;
  //   bottom: 0;
  //   background-color: ${(props) => props.theme.colors.secondary()};
  //   animation-delay: 0.5s;
  // }
  // position: absolute;
  // top: 0;
  // left: 0;
  // //left: 50%;
  // //transform: translateX(-50%);
  // height: inherit;
  // width: inherit;
  // @keyframes rotation {
  //   0% {
  //     transform: rotate(0deg);
  //   }
  //   100% {
  //     transform: rotate(360deg);
  //   }
  // }
  // @keyframes scale50 {
  //   0%,
  //   100% {
  //     transform: scale(0);
  //   }
  //   50% {
  //     transform: scale(1);
  //   }
  // }

  width: 60px;
  height: 40px;
  position: relative;
  display: inline-block;
  --base-color: ${(props) => props.theme.colors.primary()}; /*use your b ase color*/

  &::before {
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primaryContrast()};
    background-image: radial-gradient(circle 8px at 18px 18px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 4px at 18px 0px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 4px at 0px 18px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 4px at 36px 18px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 4px at 18px 36px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 4px at 30px 5px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 4px at 30px 5px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 4px at 30px 30px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 4px at 5px 30px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 4px at 5px 5px, var(--base-color) 100%, transparent 0);
    background-repeat: no-repeat;
    box-sizing: border-box;
    animation: rotationBack 3s linear infinite;
  }
  &::after {
    content: '';
    left: 35px;
    top: 15px;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primaryContrast()};
    background-image: radial-gradient(circle 5px at 12px 12px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 2.5px at 12px 0px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 2.5px at 0px 12px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 2.5px at 24px 12px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 2.5px at 12px 24px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 2.5px at 20px 3px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 2.5px at 20px 3px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 2.5px at 20px 20px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 2.5px at 3px 20px, var(--base-color) 100%, transparent 0),
      radial-gradient(circle 2.5px at 3px 3px, var(--base-color) 100%, transparent 0);
    background-repeat: no-repeat;
    box-sizing: border-box;
    animation: rotationBack 4s linear infinite reverse;
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
