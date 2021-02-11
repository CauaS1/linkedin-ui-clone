import styled, { css } from "styled-components";

import { GrLinkedin } from "react-icons/gr";
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from "react-icons/ai";

export const Container = styled.header`
  background-color: var(--color-header);
  padding: 0 30px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  display: none;

  @media (min-width: 1000px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  max-width: 1100px;
  margin: 0 auto;
  height: 52px;

  .left,
  .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%;

    button {
      background: none;
      border: 0;
      outline: 0;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 90px;

      color: var(--color-icons);
      cursor: pointer;

      &:hover {
        color: var(--color-white);
      }
      &.active {
        border-bottom: 2px solid var(--color-icons);
      }
    }
  }
`;

export const LinkedInIcon = styled(GrLinkedin)`
  width: 34px;
  height: 34px;

  color: var(--color-linkedin);
  background: "#fff";
`;

export const SearchInput = styled.input`
  min-width: 250px;
  margin-left: 12px;
  font-size: 14px;
  padding: 7.5px 8px;
  border-radius: 4px;
  
  background: var(--color-input);
  color: var(--color-black);
  border: none;
  outline: none;

  &:focus {
    background-color: var(--color-white);
  }
`;

const generalIconCSS = css`
  width: 24px;
  height: 24px;
`;

export const HomeIcon = styled(AiFillHome)`
  ${generalIconCSS}
`;

export const NotificationsIcon = styled(AiOutlineBell)`
  ${generalIconCSS}
`;

export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid;
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
  ${generalIconCSS}
`;
