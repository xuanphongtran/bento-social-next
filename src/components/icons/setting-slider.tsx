import { cn } from '@/lib/utils'

export default function SettingSlider({ className }: { className?: string }) {
  return (
    <svg
      className={cn('w-6 h-6', className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <path
          d="M13.75 7H3.75M13.75 7C13.75 5.20437 15.2044 3.75 17 3.75C18.7956 3.75 20.25 5.20437 20.25 7C20.25 8.79563 18.7956 10.25 17 10.25C15.2044 10.25 13.75 8.79563 13.75 7ZM20.25 17H12.25M12.25 17C12.25 18.7956 10.7956 20.25 9 20.25C7.20438 20.25 5.75 18.7956 5.75 17M12.25 17C12.25 15.2044 10.7956 13.75 9 13.75C7.20438 13.75 5.75 15.2044 5.75 17M5.75 17H3.75"
          stroke="#F8F8F8"
          strokeOpacity="0.7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
