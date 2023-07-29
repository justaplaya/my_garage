import { HTMLProps } from 'react';
import styled from 'styled-components';

interface Props extends HTMLProps<HTMLButtonElement> {}

export const Button = styled.button<Props>``;
