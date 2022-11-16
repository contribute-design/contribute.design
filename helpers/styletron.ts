import { Client, Server } from 'styletron-engine-atomic'
import { DebugEngine } from 'styletron-react'

const getHydrateClass = () =>
  document.getElementsByClassName('_styletron_hydrate_')

export const styletron =
  typeof window === 'undefined'
    ? new Server()
    : // @ts-ignore
      new Client({ hydrate: getHydrateClass() })

export const debug =
  process.env.NODE_ENV === 'production' ? 0 : new DebugEngine()
