"use client";

import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Service } from "@/lib/data/services";
import { captureEvent } from "@/services/posthog";
import styles from "./ServiceCard.module.css";

interface Props {
  service: Service;
  source?: string;
}

export function ServiceCard({ service, source = "services_section" }: Props) {
  return (
    <Link
      href={service.href}
      className={styles.card}
      onClick={() =>
        captureEvent("service_clicked", {
          service_id: service.id,
          service_title: service.title,
          source,
        })
      }
    >
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
