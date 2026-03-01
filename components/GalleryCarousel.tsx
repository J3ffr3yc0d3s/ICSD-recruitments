'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { carouselImages } from '@/config/images';

export default function GalleryCarousel() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(1);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <div className="w-full max-w-[820px] mx-auto px-4">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {carouselImages.map((src, index) => (
            <CarouselItem key={index}>
              <div className="w-full mx-auto">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover rounded-xl"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex bg-black/70 text-white border border-white/10 hover:bg-black" />
        <CarouselNext className="hidden lg:flex bg-black/70 text-white border border-white/10 hover:bg-black" />
      </Carousel>

      <div className="mt-6 flex justify-center gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              index === current - 1
                ? 'bg-[#58cce9] w-8'
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

