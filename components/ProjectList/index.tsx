import * as React from 'react'
import { useStyletron } from 'baseui'
import Project from '../Project'
import { Grid, GridItem } from '../Grid/index'

export interface ProjectListProps {
  data?: any
  children?: React.ReactNode
  'data-testid'?: string
}

const ProjectList: React.FC<ProjectListProps> = ({ data, children }) => {
  const [css, theme] = useStyletron()
  console.log('projcets', data)
  return (
    <Grid
      flexDirection="row"
      flexGridColumnCount={[1, 1, 2, 3, 4]}
      flexGridColumnGap="40px"
      flexGridRowGap="40px"
      paddingLeft={[0, 0, '2vw', '4vw', '12vw']}
      paddingRight={[0, 0, '2vw', '4vw', '12vw']}
    >
      {data &&
        data.keys.map((project: any, i: number) => {
          return (
            <GridItem key={i}>
              <Project data={project.metadata} />
            </GridItem>
          )
        })}
    </Grid>
  )
}

export default ProjectList
