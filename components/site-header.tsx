"use client";

import {
  Eye,
  History,
  Menu,
  Search,
  UserRound,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import coatOfArms from "@/app/images/Coats_of_arms_of_Chabany.png";
import { SocialMediaLinks } from "@/components/social-media-links";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#", label: "Про громаду" },
  { href: "#", label: "Управління громадою" },
  { href: "#", label: "Публічна інформація" },
  { href: "#", label: "Звернення громадян" },
  { href: "#", label: "Прес-центр" },
] as const;

function GovUaBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex max-w-[11rem] items-stretch gap-2 sm:max-w-none",
        className,
      )}
    >
      <span
        className="flex w-1 shrink-0 flex-col overflow-hidden rounded-none"
        aria-hidden
      >
        <span className="min-h-0 flex-1 bg-[#0057b7]" />
        <span className="min-h-0 flex-1 bg-[#ffd700]" />
      </span>
      <div className="min-w-0 flex flex-col leading-tight text-white">
        <span className="text-sm font-bold uppercase tracking-wide sm:text-base">
          GOV.UA
        </span>
        <span className="text-xs font-normal leading-snug sm:text-sm">
          Державні сайти України
        </span>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full min-w-0 bg-[linear-gradient(180deg,#149B19_0%,#1A6B20_48%,#145c18_100%)] text-white shadow-md sm:bg-[radial-gradient(circle_at_center,#149B19_0%,#1A6B20_28%,#124A16_100%)]">
      {/* Верхня смуга */}
      <div>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 py-3 sm:flex-row sm:justify-center sm:gap-8 sm:px-6 sm:py-3.5 lg:justify-between lg:gap-5 lg:px-8">
          <div className="flex w-full items-center justify-start sm:w-auto">
            <GovUaBadge />
          </div>
          <div className="flex max-w-md flex-col items-center gap-3 text-center sm:max-w-xl">
            <Image
              src={coatOfArms}
              alt="Герб Чабанівської територіальної громади"
              width={120}
              height={160}
              className="h-16 w-auto object-contain drop-shadow-md sm:h-20"
              priority
            />
            <h1 className="text-center text-2xl font-semibold leading-tight text-white sm:text-3xl sm:leading-snug lg:text-[32px] lg:leading-[36px]">
              <span className="block">Чабанівська територіальна</span>
              <span className="block">громада</span>
            </h1>
            <p className="text-base font-normal leading-relaxed text-white/85 sm:text-lg">
              Єдиний веб-портал селищної ради
            </p>
          </div>
          <div className="hidden w-full flex-col gap-2 lg:flex lg:w-auto lg:min-w-[12rem] lg:items-end">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white/95 transition hover:text-white sm:text-base lg:justify-end"
            >
              <UserRound className="size-4 shrink-0 opacity-95" strokeWidth={1.75} />
              Увійти в особистий кабінет
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white/95 transition hover:text-white sm:text-base lg:justify-end"
            >
              <Eye className="size-4 shrink-0 opacity-95" strokeWidth={1.75} />
              Версія для людей з вадами зору
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white/95 transition hover:text-white sm:text-base lg:justify-end"
            >
              <History className="size-4 shrink-0 opacity-95" strokeWidth={1.75} />
              Стара версія
            </Link>
          </div>
        </div>
      </div>

      {/* Головна навігація */}
      <div>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-between lg:py-0">
            <nav
              className="hidden min-w-0 flex-1 flex-wrap items-center gap-x-5 gap-y-2 text-base font-medium lg:flex xl:text-lg"
              aria-label="Головне меню"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap py-3 transition hover:text-white/85"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-between gap-4 lg:hidden">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-3 py-2 text-xs font-medium sm:text-sm"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-nav-chabanivska"
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
                Меню
              </button>
              <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-4">
                <SocialMediaLinks className="gap-3 sm:gap-4" />
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-medium sm:text-sm"
                >
                  <Search className="size-5" />
                  Пошук
                </Link>
              </div>
            </div>

            {open && (
              <nav
                id="mobile-nav-chabanivska"
                className="flex flex-col gap-3 border-t border-white/15 py-4 lg:hidden"
                aria-label="Меню та сервіси"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium sm:text-lg"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 flex flex-col gap-2 border-t border-white/15 pt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/95 transition hover:text-white sm:text-base"
                    onClick={() => setOpen(false)}
                  >
                    <UserRound className="size-4 shrink-0 opacity-95" strokeWidth={1.75} />
                    Увійти в особистий кабінет
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/95 transition hover:text-white sm:text-base"
                    onClick={() => setOpen(false)}
                  >
                    <Eye className="size-4 shrink-0 opacity-95" strokeWidth={1.75} />
                    Версія для людей з вадами зору
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/95 transition hover:text-white sm:text-base"
                    onClick={() => setOpen(false)}
                  >
                    <History className="size-4 shrink-0 opacity-95" strokeWidth={1.75} />
                    Стара версія
                  </Link>
                </div>
              </nav>
            )}

            <div className="hidden items-center gap-5 py-3 lg:flex">
              <SocialMediaLinks className="gap-3 sm:gap-4" />
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-xs font-medium transition hover:text-white/90 sm:text-sm"
              >
                <Search className="size-5" />
                Пошук
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
