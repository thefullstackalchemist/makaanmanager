import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import { SERVICES } from "@/lib/data/services";
import styles from "./Hero.module.css";

export function HeroImages() {
  return (
    <div className={styles.imageGrid}>
      {SERVICES.map((service, i) => (
        <Link
          key={service.id}
          href={service.href}
          className={`${styles.imageItem} ${i % 2 !== 0 ? styles.imageItemOffset : ""}`}
          style={{ animationDelay: `${0.3 + i * 0.1}s` }}
          aria-label={`Learn about ${service.title}`}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 1024px) 0px, 260px"
            style={{ objectFit: "cover" }}
            priority={i < 2}
          />
          <div className={styles.imageArrow}>
            <IconArrowUpRight size={16} stroke={2.5} />
          </div>
          <div className={styles.imageLabel}>{service.tagline}</div>
        </Link>
      ))}
    </div>
  );
}
