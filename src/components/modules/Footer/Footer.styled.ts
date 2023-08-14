import styled from "styled-components";

export const FooterSection = styled.footer``;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 623px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 100px;
  border-left: 1px solid #d4d4d4;
  border-right: 1px solid #d4d4d4;
`;

export const Text = styled.p`
  margin-top: 25px;
  line-height: ${(p) => p.theme.lineHeights.text};
  text-align: center;
`;

export const SocialsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 50px;
`;

export const SocialsItem = styled.li``;

export const SocialsLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: ${(p) => p.theme.colors.gbgc};
  border-radius: ${(p) => p.theme.radii.round};
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 50px;
`;

export const SectionName = styled.h4`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[4]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.mtc};
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
`;

export const ContactsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContactsType = styled.p`
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: ${(p) => p.theme.lineHeights.text};
  text-align: right;
`;

export const ContactsInfo = styled.a`
  line-height: ${(p) => p.theme.lineHeights.text};
  text-align: right;
`;

export const UtilityWrapper = styled.div`
  padding-left: 50px;
`;

export const UtilityList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
`;

export const UtilityItem = styled.li``;

export const UtilityInfo = styled.a`
  line-height: ${(p) => p.theme.lineHeights.text};
`;
