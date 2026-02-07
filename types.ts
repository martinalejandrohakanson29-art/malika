
export interface ServicePrice {
  id: string;
  name: string;
  price: string;
}

export interface Appointment {
  id: string;
  service: string;
  date: string;
  time: string;
  phone: string;
  status: 'pendiente' | 'confirmado';
}

export interface SiteSettings {
  siteName: string;
  heroTitle: string;
  heroSubtitle: string;
  services: ServicePrice[];
}

export interface AppContextType {
  settings: SiteSettings;
  updateSettings: (newSettings: SiteSettings) => void;
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, 'id' | 'status'>) => void;
  isLoggedIn: boolean;
  login: (user: string, pass: string) => boolean;
  logout: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}
