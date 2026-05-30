import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import styles from "./page.module.css";
import { HeroCTA } from "@/components/ab-testing/HeroCTA";

export const metadata: Metadata = {
  title: "Lumigift — Time-Locked Cash Gifts on Stellar",
};

export default function HomePage() {
  const t = useTranslations("Home");

  const features = [
    {
      icon: "🔒",
      title: t("features.escrow.title"),
      desc: t("features.escrow.desc"),
    },
    {
      icon: "💵",
      title: t("features.stable.title"),
      desc: t("features.stable.desc"),
    },
    {
      icon: "⚡",
      title: t("features.fees.title"),
      desc: t("features.fees.desc"),
    },
    {
      icon: "🇳🇬",
      title: t("features.ramp.title"),
      desc: t("features.ramp.desc"),
    },
  ];

  const steps = [
    {
      title: t("steps.create.title"),
      desc: t("steps.create.desc"),
    },
    {
      title: t("steps.pay.title"),
      desc: t("steps.pay.desc"),
    },
    {
      title: t("steps.notify.title"),
      desc: t("steps.notify.desc"),
    },
    {
      title: t("steps.unlock.title"),
      desc: t("steps.unlock.desc"),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container container--content ${styles.heroInner}`}>
          <div className={styles.badge}>{t("hero.badge")}</div>
          <h1 className={styles.headline}>
            {t.rich("hero.headline", {
              br: () => <br />,
              span: (chunks) => <span className={styles.highlight}>{chunks}</span>,
            })}
          </h1>
          <p className={styles.subheadline}>
            {t("hero.subheadline")}
          </p>
          <div className={styles.cta}>
            <HeroCTA />
            <Link href="/how-it-works" className="btn btn--secondary btn--lg">
              {t("hero.howItWorks")}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{t("features.title")}</h2>
          <div className={styles.grid}>
            {features.map((f) => (
              <div key={f.title} className={`card ${styles.featureCard}`}>
                <span className={styles.featureIcon} aria-hidden="true">
                  {f.icon}
                </span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={styles.steps}>
        <div className="container container--content">
          <h2 className={styles.sectionTitle}>{t("steps.title")}</h2>
          <ol className={styles.stepList}>
            {steps.map((s, i) => (
              <li key={s.title} className={styles.step}>
                <span className={styles.stepNum}>{i + 1}</span>
                <div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
