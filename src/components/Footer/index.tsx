import Link from "next/link";
import Image from "next/image";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import { SERVICES } from "@/lib/data/services";
import styles from "./Footer.module.css";

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>

        {/* Brand column */}
        <div className={styles.brand}>
          <Image
            src="/logo_dark.png"
            alt="Makaan Manager"
            width={140}
            height={38}
            className={styles.logo}
          />
          <p className={styles.tagline}>
            Premium care for your precious house — tenant management, home interiors, and more.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}>
              <IconBrandInstagram size={18} stroke={1.5} />
            </a>
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
              <IconBrandLinkedin size={18} stroke={1.5} />
            </a>
            <a href="#" aria-label="Twitter" className={styles.socialIcon}>
              <IconBrandTwitter size={18} stroke={1.5} />
            </a>
          </div>
        </div>

        {/* Services column */}
        <div className={styles.linkGroup}>
          <h4 className={styles.groupTitle}>Services</h4>
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href} className={styles.footerLink}>
              {s.title}
            </Link>
          ))}
        </div>

        {/* Company column */}
        <div className={styles.linkGroup}>
          <h4 className={styles.groupTitle}>Company</h4>
          {COMPANY_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.footerLink}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact column */}
        <div className={styles.linkGroup}>
          <h4 className={styles.groupTitle}>Get in Touch</h4>
          <a href="mailto:info@makaanmanager.com" className={styles.footerLink}>
            info@makaanmanager.com
          </a>
          <p className={styles.contactNote}>
            We typically respond within 24 hours.
          </p>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.subtext}>Your Journey, Simplified.</p>
      </div>
    </footer>
  );
}
