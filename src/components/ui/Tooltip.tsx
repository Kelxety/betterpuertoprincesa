import type { ReactNode } from 'react';

interface TooltipProps {
  label: string;
  children: ReactNode;
  className?: string;
  /** Which side of the trigger the bubble appears on. Pick one that stays inside any clipping ancestor. */
  position?: 'top' | 'left';
}

export function Tooltip({
  label,
  children,
  className = '',
  position = 'top',
}: TooltipProps) {
  const bubblePosition =
    position === 'left'
      ? 'right-full bottom-4 mr-2'
      : '-top-2 left-1/2 -translate-x-1/2 -translate-y-full';

  return (
    <div className={`group relative h-full ${className}`}>
      {children}
      <div
        role="tooltip"
        className={`pointer-events-none absolute ${bubblePosition} w-max max-w-56 rounded-md bg-gray-900 px-2.5 py-1.5 text-center text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100`}
      >
        {label}
      </div>
    </div>
  );
}
