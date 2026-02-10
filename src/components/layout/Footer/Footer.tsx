import { Container } from '@/components/ui';
import { CONTACT_INFO } from '@/constants/contact';
import { FOOTER_SECTIONS, SOCIAL_LINKS } from '@/constants/footer';
import { COMPANY_INFO } from '@/constants/app';
import { ContactSection } from './ContactSection';
import { FooterSection } from './FooterSection';
import { SocialSection } from './SocialSection';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <ContactSection contact={CONTACT_INFO} />
          
          {FOOTER_SECTIONS.map((section) => (
            <FooterSection key={section.id} section={section} />
          ))}
          
          <SocialSection links={SOCIAL_LINKS} />
        </div>

        <div className={styles.bottom}>
          <span className={styles.brand}>{COMPANY_INFO.fullName}</span>
          <span className={styles.copyright}>
            © {currentYear} - Todos os direitos reservados.
          </span>
        </div>
      </Container>
    </footer>
  );
}

