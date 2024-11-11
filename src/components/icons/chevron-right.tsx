import { cn } from '@/lib/utils';

export default function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={cn('h-6 w-6 fill-secondary', className)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L15.409 9.34833C16.8735 10.8128 16.8735 13.1872 15.409 14.6516L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L14.3484 13.591C15.227 12.7123 15.227 11.2877 14.3483 10.409L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z"
      />
    </svg>
  );
}
