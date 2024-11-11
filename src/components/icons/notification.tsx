import { cn } from '@/lib/utils';

export default function NotificationIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      className={cn('h-6 w-6 stroke-secondary', className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="heart 2, like, health, life, fav" opacity="0.8">
        <path
          id="notification-icon"
          className="stroke-inherit"
          d="M12 5.57193C18.3331 -0.86765 29.1898 11.0916 12 20.75C-5.18982 11.0916 5.66687 -0.867651 12 5.57193Z"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
