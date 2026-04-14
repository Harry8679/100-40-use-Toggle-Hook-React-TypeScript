// Types pour toggle - AUCUN ANY

export interface Feature {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  icon: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  icon: string;
}

export interface Setting {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  category: 'privacy' | 'notifications' | 'appearance' | 'advanced';
}