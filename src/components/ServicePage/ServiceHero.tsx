import Image from "next/image";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { Service } from "@/lib/data/services";
import styles from "./ServicePage.module.css";

interface Props {
  service: Service;
}

export function ServiceHero({ service }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className={styles.heroOverlay} />
      </div>

      <div className={`container ${styles.heroContent}`}>
        <Link href="/#services" className={styles.backLink}>
          <IconArrowLeft size={16} stroke={2} />
          All Services
        </Link>
        <div className={styles.heroBadge}>{service.tagline}</div>
        <h1 className={styles.heroTitle}>{service.title}</h1>
        <p className={styles.heroSubtitle}>{service.description}</p>
      </div>
    </section>
  );
}
