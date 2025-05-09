import { cn } from '@/lib'
import React from 'react'

type Props = {
  className?: string
}

export default function Sun({ className }: Props) {
  return (
    <svg
      className={cn('h-6 w-6 stroke-secondary', className)}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0002 3.29083V1.76758M5.8418 18.1586L4.7647 19.2357M12.0002 22.2327V20.7094M19.2353 4.76468L18.1582 5.84179M20.709 12.0001H22.2322M18.1582 18.1586L19.2353 19.2357M1.76758 12.0001H3.29083M4.76462 4.76462L5.84173 5.84173M15.7123 8.28781C17.7626 10.3381 17.7626 13.6622 15.7123 15.7124C13.6621 17.7627 10.3379 17.7627 8.28769 15.7124C6.23744 13.6622 6.23744 10.3381 8.28769 8.28781C10.3379 6.23756 13.6621 6.23756 15.7123 8.28781Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
