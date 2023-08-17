import styled from "styled-components";

type BackdropProps = React.HTMLProps<HTMLDivElement>;

export const Backdrop = styled.div<BackdropProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => p.theme.size.maxVW};
  height: ${(p) => p.theme.size.maxVH};
  background-color: ${(p) => p.theme.colors.backdrop};
  z-index: 10;
`;
