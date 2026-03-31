import type { LucideIcon } from "lucide-react";
import {
  ArrowRightCircle,
  Bus,
  Droplets,
  Lightbulb,
  Recycle,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

import kyivPhoto1 from "@/app/images/4.jpg";
import kyivPhoto2 from "@/app/images/5.webp";
import kyivPhoto3 from "@/app/images/6.jpg";
import kyivPhoto4 from "@/app/images/7.jpg";
import kyivPhoto5 from "@/app/images/8.jpg";
import vladaPhoto9 from "@/app/images/9.jpeg";
import vladaPhoto10 from "@/app/images/10.jpg";
import vladaPhoto11 from "@/app/images/11.png";
import vladaPhoto12 from "@/app/images/12.jpg";
import vladaPhoto13 from "@/app/images/13.jpeg";
import hromadaPhoto14 from "@/app/images/14.jpg";
import hromadaPhoto15 from "@/app/images/15.jpg";
import hromadaPhoto16 from "@/app/images/16.jpg";
import hromadaPhoto17 from "@/app/images/17.jpg";
import hromadaPhoto18 from "@/app/images/18.jpg";
import sobolevaPhoto from "@/app/images/soboleva.jpg";
import { SocialMediaLinks } from "@/components/social-media-links";
import { cn } from "@/lib/utils";
import { unsplash } from "@/lib/unsplash-images";

const kyivFeatured = {
  title:
    "Розширено перелік організацій, співробітники яких мають обов’язково щепитися проти COVID-19",
  time: "11:10, 30 листопада 2021 р.",
  imageSrc: kyivPhoto1,
} as const;

const kyivSide = [
  {
    title: "Статистика вакцинації в Київській області: оновлені дані",
    time: "09:40, 30 листопада 2021 р.",
    imageSrc: kyivPhoto2,
  },
  {
    title: "Реконструкція басейнів у закладах освіти регіону",
    time: "15:05, 29 листопада 2021 р.",
    imageSrc: kyivPhoto3,
  },
  {
    title:
      "Звернення Василя Володіна з нагоди Дня пам’яті жертв Голодоморів в Україні",
    time: "12:00, 27 листопада 2021 р.",
    imageSrc: kyivPhoto4,
  },
  {
    title: "Планування обласного бюджету: позиція Київської ОДА",
    time: "10:15, 26 листопада 2021 р.",
    imageSrc: kyivPhoto5,
  },
] as const;

const vladaHero = {
  tag: "Влада",
  title:
    "У присутності Президента України Міністерство цифрової трансформації та Apple підписали Меморандум про співпрацю у сфері цифрової трансформації",
  time: "14:20, 25 листопада 2021 р.",
  imageSrc: vladaPhoto9,
} as const;

const vladaList = [
  {
    title: "Земельна реформа: нові можливості для бізнесу на Diia.Business",
    time: "14:30, 25 листопада 2021 р.",
    imageSrc: vladaPhoto10,
  },
  {
    title: "Бета-тест онлайн-реєстрації місця проживання: як долучитися",
    time: "11:20, 24 листопада 2021 р.",
    imageSrc: vladaPhoto11,
  },
  {
    title: "Пенсії та субсидії через «Дію»: що змінюється для громадян",
    time: "09:55, 23 листопада 2021 р.",
    imageSrc: vladaPhoto12,
  },
  {
    title: "Онлайн-платформа про Чорнобиль: доступ до архівів і матеріалів",
    time: "16:10, 22 листопада 2021 р.",
    imageSrc: vladaPhoto13,
  },
] as const;

const hromadaHero = {
  tag: "Громада",
  title: "Виставка-реквієм до 88-мих роковин Голодомору в Україні",
  time: "09:15, 27 листопада 2021 р.",
  imageSrc: hromadaPhoto14,
} as const;

const hromadaList = [
  {
    title: "Відпочинок для молоді: програми дозвілля в громаді",
    time: "13:40, 28 листопада 2021 р.",
    imageSrc: hromadaPhoto15,
  },
  {
    title: "Успіхи місцевих спортсменів на обласних змаганнях",
    time: "10:05, 26 листопада 2021 р.",
    imageSrc: hromadaPhoto16,
  },
  {
    title: "Ініціатива для дівчат: здоров’я та підтримка в школах",
    time: "08:50, 25 листопада 2021 р.",
    imageSrc: hromadaPhoto17,
  },
  {
    title: "Осінній фестиваль у дитячому садку: фото та враження",
    time: "17:30, 24 листопада 2021 р.",
    imageSrc: hromadaPhoto18,
  },
] as const;

const latestFeatured = {
  tag: "Документи",
  title:
    "Правила благоустрою території смт. Чабани та с. Новосілки",
  imageSrc: unsplash.documents,
} as const;

const latestFeed = [
  {
    title:
      "У присутності Президента України Міністерство цифрової трансформації та Apple підписали Меморандум про співпрацю у сфері цифрової трансформації",
    time: "14:20, 25 листопада 2021 р.",
    imageSrc: vladaPhoto9,
  },
  {
    title: hromadaHero.title,
    time: "09:15, 27 листопада 2021 р.",
    imageSrc: hromadaPhoto14,
  },
  {
    title: "Успіхи місцевих спортсменів на обласних змаганнях",
    time: "10:05, 26 листопада 2021 р.",
    imageSrc: hromadaPhoto16,
  },
] as const;

const localPriorities = [
  {
    title: "Дороги та тротуари",
    description: "Ліквідація ямковості, безпечні переходи та доступні маршрути.",
    Icon: Wrench,
  },
  {
    title: "Водопостачання",
    description: "Стабільний тиск, оновлення мереж і контроль якості води.",
    Icon: Droplets,
  },
  {
    title: "Вуличне освітлення",
    description: "Освітлення темних ділянок і заміна світильників на LED.",
    Icon: Lightbulb,
  },
  {
    title: "Укриття та безпека",
    description: "Оновлення укриттів, навігація та інформування мешканців.",
    Icon: ShieldCheck,
  },
  {
    title: "Сортування відходів",
    description: "Нові контейнери, роздільний збір і чисті прибудинкові зони.",
    Icon: Recycle,
  },
  {
    title: "Громадський транспорт",
    description: "Зручні графіки, безпечні зупинки та контроль перевізників.",
    Icon: Bus,
  },
] as const;

const headNewsLines = [
  {
    title:
      "До Дня пам’яті жертв голодоморів: заходи в громаді та хвилина мовчання",
    time: "10:00, 27 листопада 2021 р.",
  },
  {
    title: "Чабанівській громаді — нові податкові надходження до бюджету",
    time: "16:00, 23 листопада 2021 р.",
  },
  {
    title: "Вітання з Міжнародним днем захисту дітей: соціальні програми громади",
    time: "09:00, 20 листопада 2021 р.",
  },
  {
    title: "Благоустрій території: поточні роботи та графік на тиждень",
    time: "11:45, 18 листопада 2021 р.",
  },
  {
    title: "Ремонт дороги на вулиці Веселкова: завершення першої черги",
    time: "15:30, 16 листопада 2021 р.",
  },
  {
    title: "Зустріч із підприємцями: підтримка малого бізнесу в громаді",
    time: "14:00, 12 листопада 2021 р.",
  },
] as const;

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 border-b border-zinc-300">
      <h2 className="-mb-px inline-block border-b-4 border-[#1A6B20] pb-2 font-sans text-xl font-bold leading-snug tracking-normal text-black sm:text-2xl">
        {children}
      </h2>
    </div>
  );
}

function CategoryHeroCard({
  tag,
  title,
  time,
  imageSrc,
}: {
  tag: string;
  title: string;
  time: string;
  imageSrc: string | StaticImageData;
}) {
  return (
    <article className="mb-5">
      <div className="group relative block aspect-[4/3] min-h-[200px] w-full overflow-hidden rounded-none">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-10 p-4">
          <span className="mb-2 inline-block bg-[#1A6B20] px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-white sm:text-xs">
            {tag}
          </span>
          <h3 className="text-lg font-semibold leading-snug text-white group-hover:underline sm:text-xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">
            {time}
          </p>
        </div>
      </div>
      <div className="sr-only">
        <h3>
          {title}
        </h3>
      </div>
    </article>
  );
}

function ThumbRow({
  title,
  time,
  imageSrc,
  titleClassName,
}: {
  title: string;
  time: string;
  imageSrc: string | StaticImageData;
  titleClassName?: string;
}) {
  return (
    <li>
      <div className="group flex gap-6 rounded-none">
        <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-none sm:h-[4.5rem] sm:w-24">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover transition duration-200 group-hover:scale-105"
            sizes="96px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h4
            className={cn(
              "text-base font-semibold leading-snug text-foreground group-hover:underline sm:text-lg",
              titleClassName,
            )}
          >
            {title}
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {time}
          </p>
        </div>
      </div>
    </li>
  );
}

function DocumentsFeatured({
  tag,
  title,
  imageSrc,
}: {
  tag: string;
  title: string;
  imageSrc: string;
}) {
  return (
    <div className="group relative mb-5 block min-h-[220px] overflow-hidden rounded-none lg:min-h-[260px]">
      <Image
        src={imageSrc}
        alt=""
        fill
        className="object-cover transition duration-300 group-hover:scale-[1.02]"
        sizes="(max-width: 1024px) 100vw, 400px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
      <div className="relative z-10 flex min-h-[220px] flex-col justify-end p-4 lg:min-h-[260px]">
        <span className="mb-2 inline-block w-fit bg-[#1A6B20] px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-white sm:text-xs">
          {tag}
        </span>
        <h3 className="text-lg font-semibold leading-snug text-white group-hover:underline sm:text-xl">
          {title}
        </h3>
      </div>
    </div>
  );
}

function PrioritiesGrid({
  items,
}: {
  items: ReadonlyArray<{
    title: string;
    description: string;
    Icon: LucideIcon;
  }>;
}) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, description, Icon }) => (
          <article key={title} className="flex items-start gap-6">
            <div className="mt-0.5 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[#1A6B20]/10 text-[#1A6B20] sm:size-14">
              <Icon className="size-6 sm:size-7" strokeWidth={1.9} />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-semibold leading-snug text-[#1A6B20] sm:text-lg">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#2d3a2f] sm:text-base">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function HomeMainColumns() {
  return (
    <section className="w-full bg-white py-6 lg:py-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-8">
            <SectionHeading>Київщина</SectionHeading>

            <div className="mb-6 grid gap-6 lg:grid-cols-2">
              <article>
                <div className="group relative block aspect-[4/3] min-h-[200px] w-full overflow-hidden rounded-none">
                  <Image
                    src={kyivFeatured.imageSrc}
                    alt=""
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                <div className="pt-3">
                  <h3 className="text-lg font-semibold leading-snug text-[#1A6B20] sm:text-xl">
                    {kyivFeatured.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {kyivFeatured.time}
                  </p>
                </div>
              </article>

              <ul className="space-y-6">
                {kyivSide.map((item) => (
                  <ThumbRow
                    key={item.title}
                    {...item}
                    titleClassName="text-[#1A6B20]"
                  />
                ))}
              </ul>
            </div>

            <div className="mb-6 flex justify-end pb-6">
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-[#1A6B20] px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:brightness-95 sm:px-6 sm:text-sm"
              >
                Продовження далі
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <SectionHeading>Влада</SectionHeading>
                <CategoryHeroCard {...vladaHero} />
                <ul className="space-y-6">
                  {vladaList.map((item) => (
                    <ThumbRow
                      key={item.title}
                      {...item}
                      titleClassName="text-[#1A6B20]"
                    />
                  ))}
                </ul>
              </div>

              <div>
                <SectionHeading>Громада</SectionHeading>
                <CategoryHeroCard {...hromadaHero} />
                <ul className="space-y-6">
                  {hromadaList.map((item) => (
                    <ThumbRow
                      key={item.title}
                      {...item}
                      titleClassName="text-[#1A6B20]"
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <div>
              <SectionHeading>Керівництво</SectionHeading>
              <div className="rounded-none bg-card p-6 text-center">
                <div className="relative mx-auto mb-4 size-28 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={sobolevaPhoto}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <p className="text-base font-bold leading-snug tracking-wide text-foreground sm:text-lg">
                  Олена Соболєва
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Секретар Чабанівської селищної ради.
                </p>
                <SocialMediaLinks
                  className="mt-4 justify-center gap-6"
                  limit={3}
                  colorClassName="text-zinc-500 hover:text-zinc-700"
                />
              </div>
            </div>

            <div>
              <SectionHeading>Останні новини</SectionHeading>
              <DocumentsFeatured {...latestFeatured} />
              <ul className="space-y-6">
                {latestFeed.map((item) => (
                  <ThumbRow
                    key={item.title}
                    {...item}
                    titleClassName="text-[#1A6B20]"
                  />
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading>Ми в Facebook</SectionHeading>
              <div className="mx-auto w-full max-w-full overflow-hidden rounded-none border border-border bg-white">
                <iframe
                  title="Facebook сторінка Чабанівської селищної ради"
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fchabany.rada.gov.ua&tabs=timeline&width=500&height=340&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  height={340}
                  className="h-[340px] w-full max-w-full border-0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  loading="lazy"
                />
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12 pt-12">
          <SectionHeading>Пріоритети громади</SectionHeading>
          <div className="mt-6">
            <PrioritiesGrid items={localPriorities} />
          </div>
        </div>

        <div className="mt-6 pt-6">
          <div className="mb-4 flex flex-col gap-6 border-b border-zinc-300 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="-mb-px inline-block min-w-0 border-b-4 border-[#1A6B20] pb-2 font-sans text-xl font-bold leading-snug tracking-normal text-black sm:text-2xl">
              Селищна рада
            </h2>
            <Link
              href="#"
              className="hidden items-center gap-6 text-base font-semibold text-[#1A6B20] transition hover:underline sm:inline-flex sm:text-lg"
            >
              Усі новини
              <ArrowRightCircle className="size-5 shrink-0" strokeWidth={1.75} />
            </Link>
          </div>
          <ul className="columns-1 gap-6 text-sm sm:text-base md:columns-2">
            {headNewsLines.map((line) => (
              <li key={line.title} className="break-inside-avoid py-1.5">
                <div className="group block text-[#1A6B20]">
                  <span className="mb-1 block text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {line.time}
                  </span>
                  <span className="text-base font-normal leading-snug sm:text-lg">
                    {line.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-end sm:hidden">
            <Link
              href="#"
              className="inline-flex items-center gap-6 text-base font-semibold text-[#1A6B20] transition hover:underline sm:text-lg"
            >
              Усі новини
              <ArrowRightCircle className="size-5 shrink-0" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
