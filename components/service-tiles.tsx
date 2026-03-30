import {
  Building2,
  FileText,
  GraduationCap,
  LayoutGrid,
  Megaphone,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    href: "#",
    label: "Територіальна громада",
    Icon: Building2,
  },
  {
    href: "#",
    label: "Адміністративні послуги",
    Icon: LayoutGrid,
  },
  {
    href: "#",
    label: "Нормативні документи",
    Icon: FileText,
  },
  {
    href: "#",
    label: "Освіта та культура",
    Icon: GraduationCap,
  },
  {
    href: "#",
    label: "Анонси та оголошення",
    Icon: Megaphone,
  },
] as const;

export function ServiceTiles() {
  return (
    <section className="bg-white py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-12">
          {services.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              className="group flex items-center gap-3 text-left sm:gap-4"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#1A6B20]/10 text-[#1A6B20] transition group-hover:bg-[#1A6B20]/15 sm:size-14 md:size-16">
                <Icon className="size-6 stroke-[1.9] sm:size-7 md:size-8" />
              </div>
              <h3 className="min-w-0 text-2xl font-semibold leading-tight text-[#1A6B20] transition group-hover:text-[#124A16] sm:text-3xl md:text-4xl">
                {label}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
