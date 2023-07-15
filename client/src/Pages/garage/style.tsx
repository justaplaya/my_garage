import styled, { css } from 'styled-components';
import { blurredBack, scrollBar } from 'styles/mixins';
import { CountryType } from './types';
import { GetCountryBg } from 'utils/Car';
import TextureDark from '../../img/textureDark.webp';
import TextureLight from '../../img/textureLight2.webp';

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  position: relative;
  height: 50px;
  padding: 0 40px;
  gap: 20px;
`;
export const CreateButton = styled.button<{ $disabled: boolean }>`
  position: relative;
  top: 0;
  right: 0;
  border: none;
  border-radius: 5px;
  height: 50px;
  width: 12.5%;
  padding: 10px 20px;
  font-size: 25px;
  font-weight: 700;
  transition: 0.3s ease-in-out;
  color: ${(props) => props.theme.colors.primary()};
  background: ${(props) => props.theme.colors.secondary(0.75)};
  &:hover {
    transform: scale(1.025);
    cursor: pointer;
    background: ${(props) => props.theme.colors.secondary()};
  }
  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
    `}
`;
export const Container = styled.div`
  display: flex;
  height: calc(100vh - 75px);
  background: ${(props) =>
    props.theme.theme === 'dark' ? `url(${TextureDark}) no-repeat` : `url(${TextureLight}) no-repeat`};
  background-attachment: fixed;
  background-size: cover;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: flex-start;
  ${scrollBar('dark')};
  overflow: auto;
`;

export namespace List {
  export const Container = styled.div<{ $centerItems: boolean }>`
    padding: 20px 40px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: fit-content;
    gap: 20px;
    align-items: flex-start;
    ${({ $centerItems }) =>
      $centerItems &&
      css`
        justify-content: center;
      `};
  `;
  export const Card = styled.div`
    position: relative;
    height: fit-content;
    width: calc(calc(100% - calc(20px * 5)) / 6); // 20px - gap
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px 5px;
    overflow: hidden;
    transition: 0.3s ease-in-out;
    gap: 10px;
    ${blurredBack()};
    &:hover {
      transform: scale(1.025);
      ${blurredBack(0.75)};
      cursor: pointer;
    }
  `;
}
export namespace Sort {
  export const Container = styled.div`
    position: relative;
    top: 0;
    left: 0;
    border: none;
    border-radius: 5px;
    height: 50px;
    width: 30%;
    max-width: 30%;
    text-align: center;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 700;
    transition: 0.3s ease-in-out;
    color: ${(props) => props.theme.colors.primary()};
    background: ${(props) => props.theme.colors.secondary(0.75)};
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.colors.secondary()};
    }
  `;
  export const SortOptionsWrapper = styled.div<{ $show: boolean }>`
    cursor: pointer;
    z-index: 3;
    height: fit-content;
    top: calc(100% + 10px);
    border-radius: 5px;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    pointer-events: none;
    opacity: 0;
    max-height: 400px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    overflow-y: auto;
    ${scrollBar('dark')}
    ${({ $show }) =>
      $show &&
      css`
        pointer-events: all;
        opacity: 1;
      `}
  `;
  export const PlaceholderOption = styled.div`
    position: relative;
    color: ${(props) => props.theme.colors.primary()};
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 100%;
    font-size: 20px;
  `;
  export const SortOption = styled.div<{ $fontSize: string | null }>`
    font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : '20px')};
    width: 100%;
    height: 100%;
    padding: 15px 10px;
    color: ${(props) => props.theme.colors.secondary()};
    background: ${(props) => props.theme.colors.primary()};
    &:hover {
      background: ${(props) => props.theme.colors.primaryLight6()};
    }
  `;
}
export namespace Search {
  export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 0;
    width: 100%;
    backdrop-filter: blur(4px);
    ${blurredBack()};
    border-radius: 5px;
    height: 50px;
    border: none;
    outline: none;
    font-size: 30px;
    font-weight: 700;
  `;
  export const Icon = styled.img`
    height: 100%;
    object-fit: contain;
    padding: 10px 20px;
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
    &::placeholder {
      color: ${(props) =>
        props.theme.theme === 'dark' ? props.theme.colors.primary(0.5) : props.theme.colors.primaryContrast(0.5)};
    }
    &::selection {
      background: ${(props) => props.theme.colors.secondary(0.75)};
    }
  `;
}
export namespace Card {
  export const Icon = styled.img`
    width: 100%;
    object-fit: contain;
  `;
  export const Brand = styled.p`
    width: 100%;
    color: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
    font-size: 30px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
  `;
  export const Model = styled.p`
    width: 100%;
    color: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
    font-size: 25px;
    font-weight: 700;
    text-transform: capitalize;
    display: -webkit-box;
    overflow: hidden;
    height: 58px;
    max-height: 58px;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  `;
  export const Separator = styled.div`
    content: '';
    width: 100%;
    height: 2px;
    background: ${(props) =>
      `linear-gradient(to right, transparent 0%, ${props.theme.colors.secondary()} 50%, transparent 100%)`};
  `;
}
//         /
export namespace Car {
  export const Container = styled.div<{ $country: CountryType | null }>`
    position: relative;
    min-height: calc(100vh - 75px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: ${({ $country, ...props }) =>
      $country ? `url(${GetCountryBg($country)})` : `${props.theme.colors.primary()}`};
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    background-attachment: fixed;
    background-position: top;
    ${scrollBar('dark')};
    overflow: auto;
    height: calc(100vh - 75px);
    padding: 10px 20px;
    gap: 10px;
  `;
  // /
  export const Header = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    gap: 10px;
  `;
  export const HeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    height: 50px;
    gap: 10px;
  `;
  export const BackButton = styled.button`
    top: 0;
    right: 0;
    border: none;
    border-radius: 5px;
    height: 50px;
    padding: 10px 20px;
    font-size: 25px;
    font-weight: 700;
    transition: 0.3s ease-in-out;
    color: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
    background: rgba(245, 245, 245, 0.5);
    cursor: pointer;
  `;
  export const HeaderTopRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 50px;
    gap: 10px;
  `;
  export const EditButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 50px;
    padding: 10px 20px;
    font-size: 25px;
    font-weight: 700;
    transition: 0.3s ease-in-out;
    color: ${(props) => props.theme.colors.primary()};
    background: ${(props) => props.theme.colors.secondary()};
    cursor: pointer;
  `;
  export const DeleteButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 50px;
    padding: 10px 20px;
    font-size: 25px;
    font-weight: 700;
    transition: 0.3s ease-in-out;
    color: ${(props) => props.theme.colors.secondary()};
    background: ${(props) => props.theme.colors.primary()};
    cursor: pointer;
  `;
  export const HeaderBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    ${blurredBack()};
    border-radius: 5px;
    padding: 10px;
  `;
  export const Icon = styled.img`
    object-fit: contain;
    height: 250px;
  `;
  export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;
  `;
  //  /
  export const Brand = styled.p`
    width: 100%;
    color: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
    font-size: 50px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
    user-select: all;
  `;
  export const XSeparator = styled.div`
    content: '';
    width: 100%;
    height: 2px;
    background: ${(props) =>
      `linear-gradient(to right, transparent 0%, ${props.theme.colors.secondary()} 50%, transparent 100%)`};
    transition: background 0.3s ease-in-out;
  `;
  export const YSeparator = styled.div`
    content: '';
    height: 100%;
    width: 2px;
    background: ${(props) =>
      `linear-gradient(to bottom, transparent 0%, ${props.theme.colors.secondary()} 50%, transparent 100%)`};
    transition: background 0.3s ease-in-out;
  `;
  export const Model = styled.p`
    width: 100%;
    color: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
    font-size: 25px;
    font-weight: 700;
    text-transform: capitalize;
    display: -webkit-box;
    overflow: hidden;
    //height: 58px;
    max-height: 58px;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    user-select: all;
  `;
  export const InfoText = styled.p`
    width: 100%;
    color: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
    font-size: 20px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: all;
  `;
  const BodyRadius = `5px`;
  export const BodyWrapper = styled.div`
    width: 100%;
    //margin: 0 20px 10px;
    border-radius: ${BodyRadius};
    background-attachment: fixed;
    ${blurredBack()};
    background-size: cover;
    position: relative;
    height: fit-content;
    padding: 20px;
  `;
  export const Body = styled.div`
    width: 100%;
    ${blurredBack()};
    border-radius: ${BodyRadius};
    min-height: 50vh;
    max-height: 50vh;
    height: 40vh;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `;
  export const BodyTxt = styled.p`
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
  `;
}
