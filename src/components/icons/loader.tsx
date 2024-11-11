import { cn } from '@/lib';
import React from 'react';

type Props = {
  className?: string;
};

export default function Loader({ className }: Props) {
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
        d="M12.0003 2.75L12 6.25M12.0003 17.75V21.25M2.75 12.0007H6.25M17.75 12.0007H21.25M5.45948 5.45905L7.93414 7.93414M16.0661 16.0656L18.541 18.5405M5.45976 18.5412L7.93463 16.0664M16.0664 7.93463L18.5412 5.45976"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
