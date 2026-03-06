import { createContext, useContext, useState, type ReactNode } from 'react';

interface DevisContextType {
  isOpen: boolean;
  openDevis: () => void;
  closeDevis: () => void;
}

const DevisContext = createContext<DevisContextType | undefined>(undefined);

export function DevisProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDevis = () => setIsOpen(true);
  const closeDevis = () => setIsOpen(false);

  return (
    <DevisContext.Provider value={{ isOpen, openDevis, closeDevis }}>
      {children}
    </DevisContext.Provider>
  );
}

export function useDevis() {
  const context = useContext(DevisContext);
  if (context === undefined) {
    throw new Error('useDevis must be used within a DevisProvider');
  }
  return context;
}
