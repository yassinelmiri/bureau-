'use client';

import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'header.title': 'Workspace Manager',
    'header.language': 'Language',
    'header.admin': 'Admin Panel',
    
    // Desk
    'desk.employee': 'Employee',
    'desk.email': 'Email',
    'desk.status': 'Status',
    'desk.available': 'Available',
    'desk.occupied': 'Occupied',
    'desk.out': 'Out of Service',
    'desk.label': 'Desk',
    
    // Kitchen
    'kitchen.title': 'Kitchen',
    'kitchen.items': 'Items',
    'kitchen.add': 'Add Item',
    'kitchen.itemName': 'Item Name',
    'kitchen.quantity': 'Quantity',
    'kitchen.coffee': 'Coffee',
    'kitchen.tea': 'Tea',
    'kitchen.sugar': 'Sugar',
    'kitchen.napkins': 'Napkins',
    'kitchen.cleaning': 'Cleaning Products',
    
    // Restroom
    'restroom.title': 'Restroom',
    'restroom.available': 'Available',
    'restroom.occupied': 'Occupied',
    'restroom.cleaning': 'Cleaning',
    
    // Meeting Room
    'meeting.title': 'Meeting Room',
    'meeting.available': 'Available',
    'meeting.occupied': 'Occupied',
    
    // Buttons
    'button.close': 'Close',
    'button.edit': 'Edit',
    'button.delete': 'Delete',
    'button.add': 'Add',
    'button.save': 'Save',
    'button.cancel': 'Cancel',
    'button.remove': 'Remove',
    
    // Admin Panel
    'admin.title': 'Admin Control Panel',
    'admin.employees': 'Employees',
    'admin.rooms': 'Rooms',
    'admin.kitchen': 'Kitchen',
    'admin.employeeList': 'Employee List',
    'admin.addEmployee': 'Add Employee',
    'admin.selectDesk': 'Select Desk',
    'admin.roomStatus': 'Room Status',
    'admin.kitchenInventory': 'Kitchen Inventory',
    
    // Messages
    'message.noEmployee': 'No employee assigned to this desk',
    'message.noDesks': 'No desks available',
    'message.loading': 'Loading workspace...',
  },
  fr: {
    // Header
    'header.title': 'Gestionnaire d\'Espace',
    'header.language': 'Langue',
    'header.admin': 'Panneau Admin',
    
    // Desk
    'desk.employee': 'Employé',
    'desk.email': 'Email',
    'desk.status': 'Statut',
    'desk.available': 'Disponible',
    'desk.occupied': 'Occupé',
    'desk.out': 'Hors Service',
    'desk.label': 'Bureau',
    
    // Kitchen
    'kitchen.title': 'Cuisine',
    'kitchen.items': 'Éléments',
    'kitchen.add': 'Ajouter un élément',
    'kitchen.itemName': 'Nom de l\'élément',
    'kitchen.quantity': 'Quantité',
    'kitchen.coffee': 'Café',
    'kitchen.tea': 'Thé',
    'kitchen.sugar': 'Sucre',
    'kitchen.napkins': 'Serviettes',
    'kitchen.cleaning': 'Produits de nettoyage',
    
    // Restroom
    'restroom.title': 'Toilette',
    'restroom.available': 'Disponible',
    'restroom.occupied': 'Occupée',
    'restroom.cleaning': 'Nettoyage',
    
    // Meeting Room
    'meeting.title': 'Salle de Réunion',
    'meeting.available': 'Disponible',
    'meeting.occupied': 'Occupée',
    
    // Buttons
    'button.close': 'Fermer',
    'button.edit': 'Modifier',
    'button.delete': 'Supprimer',
    'button.add': 'Ajouter',
    'button.save': 'Enregistrer',
    'button.cancel': 'Annuler',
    'button.remove': 'Retirer',
    
    // Admin Panel
    'admin.title': 'Panneau de Contrôle Admin',
    'admin.employees': 'Employés',
    'admin.rooms': 'Salles',
    'admin.kitchen': 'Cuisine',
    'admin.employeeList': 'Liste des employés',
    'admin.addEmployee': 'Ajouter un employé',
    'admin.selectDesk': 'Sélectionner un bureau',
    'admin.roomStatus': 'Statut de la salle',
    'admin.kitchenInventory': 'Inventaire de la cuisine',
    
    // Messages
    'message.noEmployee': 'Aucun employé assigné à ce bureau',
    'message.noDesks': 'Aucun bureau disponible',
    'message.loading': 'Chargement de l\'espace...',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
