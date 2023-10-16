import styled, { css } from 'styled-components';
import { blurredBack } from 'mixins';

export const IncidentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
`;
export namespace IncidentCard {
  const finalStyle = css`
    padding: 5px 30px;
    height: 100px;
    margin-bottom: 10px;
    opacity: 1;
    ${blurredBack()};
  `;
  export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    animation: appear 0.5s linear;
    overflow: hidden;
    width: 100%;
    transition: 0.3s ease-in-out;
    gap: 20px;

    &:hover {
      transform: scale(1.025);
      ${blurredBack(0.75)};
      cursor: pointer;
    }

    border-radius: 5px;
    ${finalStyle};
    @keyframes appear {
      0% {
        padding: 0 30px;
        height: 0;
        margin-bottom: 0;
        opacity: 0;
      }
      50% {
        padding: 3.75px 30px;
        height: 75px;
        margin-bottom: 7.5px;
        opacity: 0.75;
      }
      100% {
        ${finalStyle}
      }
    }
  `;
  export const Icon = styled.img`
    object-fit: contain;
    height: 100%;
  `;
  export const Model = styled.p`
    transition: 0.3s ease-in-out;
    font-size: 35px;
    font-weight: 700;
    color: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
    text-transform: capitalize;
  `;
  export const IncName = styled.p`
    transition: 0.3s ease-in-out;
    font-size: 40px;
    font-weight: 700;
    color: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
    text-decoration: underline;
    text-transform: capitalize;
  `;
}
