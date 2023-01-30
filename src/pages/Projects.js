import React from "react";
import Project from "../components/Project";
import { projects } from "../data/data";
import { Heading, StyledPage, StyledDiv } from "../styles/Common";
import { ProjectPage, StyledRow } from "../styles/ProjectsStyle";


const Projects = () => {
    if (!projects.length) {
        return null;
    }
    return (
        <StyledPage>
                <StyledDiv>
                    <Heading>My projects</Heading>
                    <StyledRow>
                        {projects.map((project) => (
                            <Project project={project} />
                        ))}
                    </StyledRow>
                </StyledDiv>
        </StyledPage>


    );
}
/*<StyledPage>
      <StyledHome>
        <Wrapper>
          <Aside>
            <h1>Hello, I am</h1>
            <Heading>
              Iida Kokkonen
            </Heading>
            <StyledWriter/>
            <Link to="/contact">
              <Button>Contact me!</Button>
            </Link>  
          </Aside>
          <Aside>
            <Picture src={me} />
          </Aside>
        </Wrapper>
      </StyledHome>
    </StyledPage>*/
export default Projects