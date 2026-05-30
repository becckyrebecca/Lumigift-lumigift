"use client";

import { usePathname, Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LocaleSelector } from "@/components/ui/LocaleSelector";
import styles from "./Navbar.module.css";

export function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  const navLinks = [
    { href: "/send", label: t("sendGift") },
    { href: "/dashboard", label: t("dashboard") },
  ];

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Main navigation">
        <Link href="/" className={styles.logo} aria-label="Lumigift home">
          <span className={styles.logoMark}>Z</span>
          <span className={styles.logoText}>Lumigift</span>
        </Link>

        <ul className={styles.links} role="list">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <ThemeToggle />
          </li>
          <li>
            <LocaleSelector />
          </li>
          <li>
            <Link href="/auth/login" className="btn btn--primary btn--sm">
              {t("signIn")}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
