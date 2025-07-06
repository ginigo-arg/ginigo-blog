"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    label: "About",
    path: "/",
  },
  {
    label: "Writing",
    path: "/writing",
  },
  {
    label: "Background",
    path: "/background",
  },
];
export default function Menu() {
  const path = usePathname();

  return (
    <ul className="flex flex-col gap-2">
      {menu.map((item) => (
        <Link href={item.path} key={item.path}>
          <li
            className={`${
              path === item.path
                ? "text-slate-500 dark:text-white"
                : "dark:text-slate-500"
            } hover:underline hover:underline-offset-8`}
          >
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );
}
