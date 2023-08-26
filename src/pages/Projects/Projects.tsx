import React from "react";
import { Container } from "src/components/global/Container";
import { PageBanner } from "src/components/global/PageBanner";
import { Subscription } from "src/components/modules/Subscription";
import {
  Section,
  ProjectList,
  ProjectItem,
  ProjectLink,
  ProjectImageWrapper,
  ProjectImage,
  ProjectPopUp,
  ProjectTextWrapper,
  ProjectName,
  ProjectCategory,
} from "./Projects.styled";
import projectsBgImg from "src/images/projects-banner.webp";
import lemonImg from "src/images/tasty-lemon.webp";
import carrotImg from "src/images/organic-carrot.webp";
import leafImg from "src/images/betel-leaf.webp";
import tomatoImg from "src/images/natural-tomato.webp";
import raspberryImg from "src/images/black-raspberry.webp";
import orangeImg from "src/images/honey-orange.webp";

const Projects = () => {
  return (
    <>
      <PageBanner backgroundImage={projectsBgImg} backgroundColor="#fafbfd">
        Projects
      </PageBanner>
      <Section>
        <Container py={90}>
          <ProjectList>
            <ProjectItem>
              <ProjectLink href="#">
                <ProjectImageWrapper>
                  <ProjectImage src={lemonImg} />
                  <ProjectPopUp></ProjectPopUp>
                </ProjectImageWrapper>
                <ProjectTextWrapper>
                  <ProjectName>Green & Tasty Lemon</ProjectName>
                  <ProjectCategory>Fruits</ProjectCategory>
                </ProjectTextWrapper>
              </ProjectLink>
            </ProjectItem>
            <ProjectItem>
              <ProjectLink href="#">
                <ProjectImageWrapper>
                  <ProjectImage src={carrotImg} />
                  <ProjectPopUp></ProjectPopUp>
                </ProjectImageWrapper>
                <ProjectTextWrapper>
                  <ProjectName>Organic Carrot</ProjectName>
                  <ProjectCategory>Farmer</ProjectCategory>
                </ProjectTextWrapper>
              </ProjectLink>
            </ProjectItem>
            <ProjectItem>
              <ProjectLink href="#">
                <ProjectImageWrapper>
                  <ProjectImage src={leafImg} />
                  <ProjectPopUp></ProjectPopUp>
                </ProjectImageWrapper>
                <ProjectTextWrapper>
                  <ProjectName>Organic Betel Leaf</ProjectName>
                  <ProjectCategory>Leaf</ProjectCategory>
                </ProjectTextWrapper>
              </ProjectLink>
            </ProjectItem>
            <ProjectItem>
              <ProjectLink href="#">
                <ProjectImageWrapper>
                  <ProjectImage src={tomatoImg} />
                  <ProjectPopUp></ProjectPopUp>
                </ProjectImageWrapper>
                <ProjectTextWrapper>
                  <ProjectName>Natural Tomato</ProjectName>
                  <ProjectCategory>Vegetables</ProjectCategory>
                </ProjectTextWrapper>
              </ProjectLink>
            </ProjectItem>
            <ProjectItem>
              <ProjectLink href="#">
                <ProjectImageWrapper>
                  <ProjectImage src={raspberryImg} />
                  <ProjectPopUp></ProjectPopUp>
                </ProjectImageWrapper>
                <ProjectTextWrapper>
                  <ProjectName>Black Raspberry</ProjectName>
                  <ProjectCategory>Berries</ProjectCategory>
                </ProjectTextWrapper>
              </ProjectLink>
            </ProjectItem>
            <ProjectItem>
              <ProjectLink href="#">
                <ProjectImageWrapper>
                  <ProjectImage src={orangeImg} />
                  <ProjectPopUp></ProjectPopUp>
                </ProjectImageWrapper>
                <ProjectTextWrapper>
                  <ProjectName>Honey Orange</ProjectName>
                  <ProjectCategory>Farmer</ProjectCategory>
                </ProjectTextWrapper>
              </ProjectLink>
            </ProjectItem>
          </ProjectList>
        </Container>
      </Section>
      <Subscription />
    </>
  );
};

export default Projects;
