import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Service } from "@/lib/data/services";
import styles from "./ServiceCard.module.css";

interface Props {
  service: Service;
}

export function ServiceCard({ service }: Props) {
  return (
    <Link href={service.href} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
          style={{ objectFit: "cover" }}
        />
        <div className={styles.imageOverlay} />
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.tagline}>{service.tagline}</span>
          <div className={styles.arrow}>
            <IconArrowUpRight size={16} stroke={2} />
          </div>
        </div>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.description}>{service.description}</p>
      </div>
    </Link>
  );
}
