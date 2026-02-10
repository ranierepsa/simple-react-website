export interface ContactInfo {
  phone: string;
  email: string;
  address?: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType;
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}
