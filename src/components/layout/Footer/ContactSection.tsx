import type { ContactInfo } from '@/types/contact';
import styles from './Footer.module.css';

interface Props {
  contact: ContactInfo;
}

export function ContactSection({ contact }: Props) {
  const formatPhoneForTel = (phone: string) => phone.replace(/\D/g, '');

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Contate-Nos Agora</h3>
      
      <div className={styles.contactItem}>
        <span className={styles.contactLabel}>Telefone</span>
        <a 
          href={`tel:${formatPhoneForTel(contact.phone)}`} 
          className={styles.contactValue}
        >
          {contact.phone}
        </a>
      </div>
      
      <div className={styles.contactItem}>
        <span className={styles.contactLabel}>Email</span>
        <a 
          href={`mailto:${contact.email}`} 
          className={styles.contactValue}
        >
          {contact.email}
        </a>
      </div>
      
      {contact.address && (
        <div className={styles.contactItem}>
          <span className={styles.contactLabel}>Endereço</span>
          <span className={styles.contactValue}>{contact.address}</span>
        </div>
      )}
    </div>
  );
}
