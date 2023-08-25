import styled from "styled-components";

export const Section = styled.section``;

export const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 30px;
`;

export const ProjectPopUp = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  width: 401px;
  height: 375px;
  background-color: ${(p) => p.theme.colors.backdrop};
  border-radius: ${(p) => p.theme.radii.default};
  transform: translate(-50%, -50%);
  transition: all var(--transition);
  opacity: 0;

  &::after {
    content: ">";
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    font-family: ${(p) => p.theme.fonts.mtf};
    font-size: ${(p) => p.theme.fontSizes[3]};
    color: ${(p) => p.theme.colors.mbgc};
    background-color: ${(p) => p.theme.colors.atc};
    border-radius: ${(p) => p.theme.radii.round};
  }
`;

export const ProjectItem = styled.li`
  &:hover ${ProjectPopUp} {
    opacity: 1;
  }
`;

export const ProjectLink = styled.a``;

export const ProjectImageWrapper = styled.div`
  position: relative;
  width: 451px;
  height: 421px;
`;

export const ProjectImage = styled.img`
  border-radius: ${(p) => p.theme.radii.default};
`;

export const ProjectTextWrapper = styled.div``;

export const ProjectName = styled.p`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[3]};
  font-weight: ${(p) => p.theme.fontWeights.black};
  color: ${(p) => p.theme.colors.mtc};
`;

export const ProjectCategory = styled.p`
  font-family: ${(p) => p.theme.fonts.atf};
  font-size: ${(p) => p.theme.fontSizes[3]};
  color: ${(p) => p.theme.colors.atc};
`;
