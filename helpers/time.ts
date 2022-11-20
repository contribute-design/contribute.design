import { formatDistance } from 'date-fns'

export function timeAgo(date: any) {
  const time = formatDistance(new Date(date), new Date(), {
    addSuffix: true,
  })
  return time.replace('about', '')
}
