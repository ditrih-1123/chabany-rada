import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";

import newsPhoto1 from "@/app/images/1.webp";
import newsPhoto2 from "@/app/images/2.jpg";
import newsPhoto3 from "@/app/images/3.jpg";
import { cn } from "@/lib/utils";

const mainFeature = {
  tag: "Селищний голова",
  title: "Чабанівській громаді – нові податкові надходження",
  time: "16:00, 23 листопада 2021 р.",
  href: "#",
  imageSrc: newsPhoto1,
};

const sideNews = [
  {
    tag: "Громада",
    title: "Оновлення інфраструктури: ремонт доріг у населених пунктах",
    time: "14:20, 20 листопада 2021 р.",
    href: "#",
    imageSrc: newsPhoto2,
  },
  {
    tag: "Громада",
    title: "Засідання виконавчого комітету: підсумки та рішення",
    time: "11:00, 18 листопада 2021 р.",
    href: "#",
    imageSrc: newsPhoto3,
  },
] as const;

function NewsCardOverlay({
  tag,
  title,
  time,
  href,
  className,
  imageSrc,
  sizes,
  priority,
  titleClassName,
}: {
  tag: string;
  title: string;
  time: string;
  href: string;
  className?: string;
  imageSrc: string | StaticImageData;
  sizes: string;
  priority?: boolean;
  titleClassName?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex min-h-[270px] flex-col justify-end overflow-hidden rounded-none sm:min-h-[300px]",
        className,
      )}
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        className="object-cover transition duration-300 group-hover:scale-[1.02]"
        sizes={sizes}
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
      <div className="relative z-10 p-4 sm:p-5">
        <span className="mb-2 inline-block bg-[#1A6B20] px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-white sm:text-xs">
          {tag}
        </span>
        <h3
          className={cn(
            "font-semibold text-white group-hover:underline",
            titleClassName ??
              "text-base leading-snug sm:text-lg sm:leading-snug",
          )}
        >
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
          {time}
        </p>
      </div>
    </Link>
  );
}

export function HomeHero() {
  return (
    <section className="w-full bg-white py-6 lg:py-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          <NewsCardOverlay
            {...mainFeature}
            className="lg:col-span-2 lg:min-h-[470px]"
            sizes="(max-width: 1024px) 100vw, 66vw"
            priority
            titleClassName="text-lg leading-tight sm:text-xl sm:leading-snug md:text-2xl lg:text-3xl lg:leading-tight"
          />
          <div className="flex flex-col gap-4 lg:h-[470px]">
            {sideNews.map((item) => (
              <NewsCardOverlay
                key={item.title}
                {...item}
                className="min-h-[230px] flex-1 lg:min-h-0"
                sizes="(max-width: 1024px) 100vw, 34vw"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
