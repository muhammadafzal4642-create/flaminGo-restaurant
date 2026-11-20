import { useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';

interface FoodImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function FoodImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  loading = 'lazy',
}: FoodImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#24211F] via-[#311A14] to-[#181615] text-[#FAF6F0]/80 p-6 text-center"
      >
        <UtensilsCrossed className="w-8 h-8 text-[#EA580C]" aria-hidden="true" />
        <span className="text-xs font-medium tracking-wide text-[#FAF6F0]/70 max-w-[22ch]">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
