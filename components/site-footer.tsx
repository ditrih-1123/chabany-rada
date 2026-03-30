import Image from "next/image";
import Link from "next/link";

import coatOfArms from "@/app/images/Coats_of_arms_of_Chabany.png";
import { SocialMediaLinks } from "@/components/social-media-links";
import { cn } from "@/lib/utils";

const footerContacts = {
  address:
    "08140, Україна, Київська обл., Фастівський р-н, смт Чабани, вул. Шевченка, 1",
  hotline1: "(04571) 3-45-67",
  hotline1Tel: "+380457134567",
  hotline2: "067-123-45-67",
  hotline2Tel: "+380671234567",
  email: "rada@chabany.gov.ua",
} as const;

const linkUnderline = "font-normal text-white transition opacity-95 hover:opacity-100";

export function SiteFooter() {
  return (
    <footer className="mt-auto w-full bg-[linear-gradient(135deg,#1A6B20_0%,#175D1D_45%,#103E13_100%)] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-6 lg:text-left">
          <div className="max-w-xl space-y-6">
            <Link
              href="#"
              className="inline-flex items-center text-[18px] font-normal leading-[22px] text-white transition hover:opacity-100"
            >
              Мапа порталу
            </Link>
            <div className="flex justify-center gap-6 lg:justify-start">
              <Image
                src={coatOfArms}
                alt="Герб Чабанівської територіальної громади"
                width={72}
                height={96}
                className="h-16 w-auto shrink-0 object-contain sm:h-[4.5rem]"
              />
              <div className="min-w-0">
                <p className="text-[20px] font-semibold leading-[24px]">
                  Чабанівська селищна рада
                </p>
                <p className="mt-2 text-[16px] text-white/80">
                  {footerContacts.address}
                </p>
              </div>
            </div>
          </div>

          <div className="grid w-full max-w-2xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-3 lg:justify-items-start">
            <div>
              <p className="text-[18px] font-semibold leading-[22px] text-white/90">
                Гаряча лінія
              </p>
              <a
                href={`tel:${footerContacts.hotline1Tel}`}
                className={cn("mt-2 inline-block text-[16px]", linkUnderline)}
              >
                {footerContacts.hotline1}
              </a>
            </div>
            <div>
              <p className="text-[18px] font-semibold leading-[22px] text-white/90">
                Гаряча лінія
              </p>
              <a
                href={`tel:${footerContacts.hotline2Tel}`}
                className={cn("mt-2 inline-block text-[16px]", linkUnderline)}
              >
                {footerContacts.hotline2}
              </a>
            </div>
            <div>
              <p className="text-[18px] font-semibold leading-[22px] text-white/90">
                Електронна пошта
              </p>
              <a
                href={`mailto:${footerContacts.email}`}
                className={cn(
                  "mt-2 inline-block break-all text-[16px]",
                  linkUnderline,
                )}
              >
                {footerContacts.email}
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-white/15" />

        <div className="space-y-6 text-[16px] text-white/85">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-[16px]">
              Власність Чабанівської селищної ради. 2021 рік
            </p>
            <SocialMediaLinks />
          </div>

          <p className="text-[16px] text-white/80">
            Якщо ви маєте зауваження або пропозиції, будь ласка, напишіть нам:{" "}
            <a
              href={`mailto:${footerContacts.email}`}
              className={cn("text-white", linkUnderline)}
            >
              {footerContacts.email}
            </a>
          </p>

          <p className="text-[16px] text-white/80">
            Весь контент доступний за ліцензією{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/deed.uk"
              className={cn("text-white", linkUnderline)}
              rel="license noopener noreferrer"
              target="_blank"
            >
              Creative Commons Attribution 4.0 International
            </a>
            , якщо не зазначено інше.
          </p>
        </div>
      </div>
    </footer>
  );
}
