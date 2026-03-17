"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

interface NavLink {
  href: string;
  label: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export function MobileMenu({ isOpen, onClose, links }: Props) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`}
        onClick={onClose}
      />
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}>
        <nav className={styles.mobileNav}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn btn-primary" onClick={onClose}>
            Get Started
          </Link>
        </nav>
      </div>
    </>
  );
}
