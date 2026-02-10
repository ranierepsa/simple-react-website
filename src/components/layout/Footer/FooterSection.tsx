import type { FooterSection as FooterSectionType } from '@/types/contact';
import styles from './Footer.module.css';

interface Props {
  section: FooterSectionType;
}

export function FooterSection({ section }: Props) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>{section.title}</h3>
      <nav className={styles.nav}>
        {section.links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={styles.navLink}
            {...(link.isExternal && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
