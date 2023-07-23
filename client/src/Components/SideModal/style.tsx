import styled, { css } from 'styled-components';
import { blurredBack, scrollBar } from 'mixins';

export namespace InputStyle {
  export const Wrapper = styled.div<{ $disabled: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    ${blurredBack()};
    border-radius: 5px;
    height: 50px;
    border: none;
    outline: none;
    font-size: 30px;
    font-weight: 700;
    width: 100%;
    position: relative;
    ${({ $disabled }) =>
      $disabled &&
      css`
        pointer-events: none;
      `}}
  `;
  export const Input = styled.input`
    width: 100%;
    background: transparent;
    height: 100%;
    border: none;
    outline: none;
    font-size: 30px;
    font-weight: 700;
    color: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
    padding: 15px 10px;
    &::placeholder {
      color: ${(props) =>
        props.theme.theme === 'dark' ? props.theme.colors.primary(0.5) : props.theme.colors.primaryContrast(0.5)};
    }
    &::selection {
      background: ${(props) => props.theme.colors.secondary(0.75)};
    }
  `;
}
export namespace Common {
  export const Icon = styled.img`
    width: 100%;
    object-fit: contain;
    height: 250px;
    background: rgba(245, 245, 245, 0.5);
    border-radius: 5px;
  `;
  export const Wrapper = styled.div<{ $show: boolean }>`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    transition: 0.3s ease-in-out;
    opacity: ${({ $show }) => ($show ? '1' : '0')};
    pointer-events: ${({ $show }) => ($show ? 'all' : 'none')};
  `;
  export const Container = styled.div<{ $show: boolean }>`
    z-index: 2;
    height: 100%;
    width: 25vw;
    transition: 0.3s ease-in-out;
    transform: translateX(${({ $show }) => ($show ? '0%' : '100%')});
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    right: 0;
    gap: 10px;
    background: ${(props) => props.theme.colors.secondary(0.75)};
    backdrop-filter: blur(6px);
  `;
  export const Data = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 20px 10px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    ${scrollBar('light')}
  `;
}
//
