
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'kh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hello, I\'m',
    'hero.name': 'Ven Tithyaka',
    'hero.title': 'Full-Stack Developer',
    'hero.tagline': 'Building the Future, Line by Line',
    'hero.subtitle': 'Passionate about creating elegant solutions to complex problems through clean, efficient code.',
    'hero.cta.projects': 'View My Projects',
    'hero.cta.about': 'About Me',
    'hero.cta.contact': 'Get In Touch',
    
    // About Section
    'about.title': 'About Me',
    'about.intro': 'I\'m a passionate full-stack developer with experience in building scalable web applications and solving complex technical challenges.',
    'about.description': 'My journey in programming began with curiosity and has evolved into a deep passion for creating meaningful digital experiences. I specialize in modern web technologies and enjoy working on projects that make a real impact.',
    'about.skills': 'Technical Skills',
    'about.interests': 'When I\'m not coding, you\'ll find me exploring new technologies, contributing to open-source projects, or enjoying photography and hiking.',
    'about.location': 'Phnom Penh, Chbar Aompov',
    'about.email': 'ventithyaka@gmail.com',
    
    // Experience Section
    'experience.title': 'Experience & Education',
    'experience.education': 'Education',
    'experience.work': 'Work Experience',
    'experience.school': 'IT STEP ACADEMY',
    'experience.degree': '2 Semesters',
    'experience.duration': '2024-2025',
    'experience.location': 'Phnom Penh',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.filter.all': 'All',
    'projects.filter.web': 'Web Apps',
    'projects.filter.mobile': 'Mobile',
    'projects.filter.opensource': 'Open Source',
    'projects.live': 'Live Demo',
    'projects.code': 'View Code',
    'projects.case': 'Case Study',
    
    // Contact Section
    'contact.title': 'Let\'s Work Together',
    'contact.subtitle': 'Ready to bring your ideas to life? I\'d love to hear about your project.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.placeholder.name': 'Your Name',
    'contact.form.placeholder.email': 'your.email@example.com',
    'contact.form.placeholder.subject': 'Project Inquiry',
    'contact.form.placeholder.message': 'Tell me about your project...',
    
    // Footer
    'footer.copyright': '© 2024 Ven Tithyaka. All rights reserved.',
    'footer.built': 'Built with React, TypeScript, and Tailwind CSS',
  },
  kh: {
    // Navigation
    'nav.home': 'ទំព័រដើម',
    'nav.about': 'អំពីខ្ញុំ',
    'nav.projects': 'គម្រោង',
    'nav.experience': 'បទពិសោធន៍',
    'nav.blog': 'ប្លុក',
    'nav.contact': 'ទំនាក់ទំនង',
    
    // Hero Section
    'hero.greeting': 'សួស្តី ខ្ញុំឈ្មោះ',
    'hero.name': 'វេន ទិត្យាការ',
    'hero.title': 'អ្នកអភិវឌ្ឍន៍ពេញលេញ',
    'hero.tagline': 'កសាងអនាគត តាមរយៈកូដ',
    'hero.subtitle': 'មានចំណង់ចំណូលចិត្តក្នុងការបង្កើតដំណោះស្រាយដ៏ឆើតឆាយសម្រាប់បញ្ហាស្មុគស្មាញតាមរយៈកូដស្អាត និងមានប្រសិទ្ធភាព។',
    'hero.cta.projects': 'មើលគម្រោងរបស់ខ្ញុំ',
    'hero.cta.about': 'អំពីខ្ញុំ',
    'hero.cta.contact': 'ទាក់ទងខ្ញុំ',
    
    // About Section
    'about.title': 'អំពីខ្ញុំ',
    'about.intro': 'ខ្ញុំជាអ្នកអភិវឌ្ឍន៍ពេញលេញដែលមានចំណង់ចំណូលចិត្ត ជាមួយនឹងបទពិសោធន៍ក្នុងការសាងសង់កម្មវិធីគេហទំព័រដែលអាចពង្រីកបាន និងដោះស្រាយបញ្ហាបច្ចេកទេសស្មុគស្មាញ។',
    'about.description': 'ដំណើរការរបស់ខ្ញុំក្នុងការសរសេរកម្មវិធីបានចាប់ផ្តើមពីការចង់ដឹងចង់ឃើញ ហើយបានវិវឌ្ឍទៅជាចំណង់ចំណូលចិត្តយ៉ាងជ្រាលជ្រៅសម្រាប់ការបង្កើតបទពិសោធន៍ឌីជីថលដែលមានអត្ថន័យ។ ខ្ញុំមានជំនាញពិសេសលើបច្ចេកវិទ្យាគេហទំព័រទំនើប ហើយចូលចិត្តធ្វើការលើគម្រោងដែលបង្កើតឥទ្ធិពលពិតប្រាកដ។',
    'about.skills': 'ជំនាញបច្ចេកទេស',
    'about.interests': 'នៅពេលដែលខ្ញុំមិនកំពុងសរសេរកូដ អ្នកនឹងឃើញខ្ញុំកំពុងស្វែងយល់បច្ចេកវិទ្យាថ្មី រួមចំណែកដល់គម្រោងកូដបើកចំហ ឬចូលចិត្តថតរូប និងដើរលេង។',
    'about.location': 'ភ្នំពេញ ចំការអំពៅ',
    'about.email': 'ventithyaka@gmail.com',
    
    // Experience Section
    'experience.title': 'បទពិសោធន៍ និងការអប់រំ',
    'experience.education': 'ការអប់រំ',
    'experience.work': 'បទពិសោធន៍ការងារ',
    'experience.school': 'IT STEP ACADEMY',
    'experience.degree': '២ ឆមាស',
    'experience.duration': '២០២៤-២០២៥',
    'experience.location': 'ភ្នំពេញ',
    
    // Projects Section
    'projects.title': 'គម្រោងសំខាន់ៗ',
    'projects.filter.all': 'ទាំងអស់',
    'projects.filter.web': 'កម្មវិធីគេហទំព័រ',
    'projects.filter.mobile': 'ទូរស័ព្ទ',
    'projects.filter.opensource': 'កូដបើកចំហ',
    'projects.live': 'មើលផ្ទាល់',
    'projects.code': 'មើលកូដ',
    'projects.case': 'ករណីសិក្សា',
    
    // Contact Section
    'contact.title': 'តោះធ្វើការជាមួយគ្នា',
    'contact.subtitle': 'រៀបចំក្នុងការធ្វើឱ្យគំនិតរបស់អ្នកក្លាយជាការពិត? ខ្ញុំចង់ស្តាប់អំពីគម្រោងរបស់អ្នក។',
    'contact.form.name': 'ឈ្មោះ',
    'contact.form.email': 'អ៊ីម៉ែល',
    'contact.form.subject': 'ប្រធានបទ',
    'contact.form.message': 'សារ',
    'contact.form.send': 'ផ្ញើសារ',
    'contact.form.placeholder.name': 'ឈ្មោះរបស់អ្នក',
    'contact.form.placeholder.email': 'your.email@example.com',
    'contact.form.placeholder.subject': 'សុំព័ត៌មានគម្រោង',
    'contact.form.placeholder.message': 'ប្រាប់ខ្ញុំអំពីគម្រោងរបស់អ្នក...',
    
    // Footer
    'footer.copyright': '© ២០២៤ វេន ទិត្យាការ។ រក្សាសិទ្ធិគ្រប់យ៉ាង។',
    'footer.built': 'សាងសង់ដោយ React, TypeScript, និង Tailwind CSS',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
