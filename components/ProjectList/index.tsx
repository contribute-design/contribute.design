import * as React from 'react'
import { useStyletron } from 'baseui'
import Project from '../Project'
import { Grid, GridItem } from '../Grid/index'

export interface ProjectListProps {
  children?: React.ReactNode
  'data-testid'?: string
}

const data = {}

const ProjectList: React.FC<ProjectListProps> = ({ children }) => {
  const [css, theme] = useStyletron()
  return (
    <Grid
      flexDirection="row"
      flexGridColumnCount={[1, 1, 2, 3, 4]}
      flexGridColumnGap="40px"
      flexGridRowGap="40px"
      paddingLeft={[0,0,'2vw','4vw','12vw']}
      paddingRight={[0,0,'2vw','4vw','12vw']}
    >
      <GridItem>
        <Project />
      </GridItem>
      <GridItem>
        <Project />
      </GridItem>
      <GridItem>
        <Project />
      </GridItem>
      <GridItem>
        <Project />
      </GridItem>
      <GridItem>
        <Project />
      </GridItem>
      <GridItem>
        <Project />
      </GridItem>
      <GridItem>
        <Project />
      </GridItem>
      <GridItem>
        <Project />
      </GridItem>
      <GridItem>
        <Project />
      </GridItem>
      <GridItem>
        <Project />
      </GridItem>
      <GridItem>
        <Project />
      </GridItem>
    </Grid>
  )
}

export default ProjectList
