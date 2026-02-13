'use client';

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel = 'Antes', 
  afterLabel = 'Depois' 
}: BeforeAfterProps) {
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-[#E5E0D8]">
      {beforeImage && afterImage ? (
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={beforeImage}
              alt={beforeLabel}
              style={{ objectFit: 'cover' }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={afterImage}
              alt={afterLabel}
              style={{ objectFit: 'cover' }}
            />
          }
          position={50}
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center gap-8 text-gray-400">
          <div className="text-center">
            <span className="block text-xs tracking-widest uppercase mb-1">{beforeLabel}</span>
            <div className="w-24 h-16 bg-neutral-300 rounded-sm"></div>
          </div>
          <div className="w-[1px] h-16 bg-editorial-orange/40"></div>
          <div className="text-center">
            <span className="block text-xs tracking-widest uppercase mb-1">{afterLabel}</span>
            <div className="w-24 h-16 bg-neutral-200 rounded-sm"></div>
          </div>
        </div>
      )}

      {/* Labels */}
      {beforeImage && afterImage && (
        <>
          <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-sm z-10">
            {beforeLabel}
          </div>
          <div className="absolute top-3 right-3 bg-editorial-orange/90 text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-sm z-10">
            {afterLabel}
          </div>
        </>
      )}
    </div>
  );
}
