import { cn } from '@/lib';
import React from 'react';

type Props = {
  className?: string;
};

export default function Sunrise({ className }: Props) {
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
        d="M12 2.75V3.77941M3.77778 12.25H2.75M20.2222 12.25H21.25M17.8134 6.19148L18.5401 5.46357M2.75 16.25H21.25M6.75 20.25H17.25M6.18671 6.19147L5.45996 5.46357M7.75 12.25V12.0068C7.75 9.65581 9.65279 7.75 12 7.75C14.3472 7.75 16.25 9.65581 16.25 12.0068V12.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
