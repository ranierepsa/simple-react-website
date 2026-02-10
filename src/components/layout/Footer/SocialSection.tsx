import { SOCIAL_ICONS } from './SocialIcons';
import styles from './Footer.module.css';

interface SocialLink {
  id: string;
  label: string;
  href: string;
}

interface Props {
  links: readonly SocialLink[];
}

export function SocialSection({ links }: Props) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Social</h3>
      <nav className={styles.nav}>
        {links.map((link) => {
          const Icon = SOCIAL_ICONS[link.id];
          return (
            <a
              key={link.id}
              href={link.href}
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar ${link.label}`}
            >
              {Icon && <Icon />}
              {link.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
