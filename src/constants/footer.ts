import type { FooterSection } from '@/types/contact';

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    id: 'explore',
    title: 'Explorar',
    links: [
      { id: 'about', label: 'Sobre Nós', href: '#sobre' },
      { id: 'services', label: 'Serviços', href: '#servicos' },
      { id: 'contact', label: 'Contato', href: '#contato' },
    ],
  },
  {
    id: 'quick-links',
    title: 'Links Rápidos',
    links: [
      { id: 'reviews', label: 'Avaliações', href: '#avaliacoes' },
      { id: 'home', label: 'Início', href: '#inicio' },
      { id: 'location', label: 'Localização', href: '#localizacao' },
    ],
  },
] as const;

export const SOCIAL_LINKS = [
  { id: 'facebook', label: 'Facebook', href: 'https://facebook.com/vernetec' },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com/vernetec' },
  { id: 'x', label: 'X', href: 'https://x.com/vernetec' },
] as const;
