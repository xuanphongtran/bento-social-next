import { cn } from '@/lib/utils'

export default function BookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('h-6 w-6 stroke-secondary', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g opacity="0.8">
        <path
          d="M19.25 20.2515V5.75C19.25 4.09315 17.9069 2.75 16.25 2.75H7.75C6.09315 2.75 4.75 4.09315 4.75 5.75V20.2515C4.75 21.0522 5.64414 21.5281 6.30839 21.081L10.3248 18.3776C11.3376 17.6959 12.6624 17.6959 13.6752 18.3776L17.6916 21.081C18.3559 21.5282 19.25 21.0522 19.25 20.2515Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
