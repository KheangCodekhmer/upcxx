
import React from 'react';
import { Code, Palette, Zap, Users, Target, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { t, language } = useLanguage();

  const skills = [
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'React', level: 95, category: 'frontend' },
    { name: 'Next.js', level: 85, category: 'frontend' },
    { name: 'Node.js', level: 88, category: 'backend' },
    { name: 'Python', level: 80, category: 'backend' },
    { name: 'PostgreSQL', level: 85, category: 'database' },
    { name: 'MongoDB', level: 82, category: 'database' },
    { name: 'AWS', level: 78, category: 'cloud' },
    { name: 'Docker', level: 85, category: 'devops' },
    { name: 'Git', level: 92, category: 'tools' },
    { name: 'Figma', level: 75, category: 'design' },
  ];

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, readable, and efficient code that stands the test of time.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders to deliver exceptional results.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Embracing new technologies and creative solutions to solve complex problems.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results that align with business objectives and user needs.'
    },
  ];

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 ${
            language === 'kh' ? 'font-battambang' : ''
          }`}>
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <div className="space-y-6">
            <p className={`text-xl text-gray-600 dark:text-gray-300 leading-relaxed ${
              language === 'kh' ? 'font-battambang' : ''
            }`}>
              {t('about.intro')}
            </p>
            <p className={`text-lg text-gray-600 dark:text-gray-400 leading-relaxed ${
              language === 'kh' ? 'font-battambang' : ''
            }`}>
              {t('about.description')}
            </p>
            <p className={`text-lg text-gray-600 dark:text-gray-400 leading-relaxed ${
              language === 'kh' ? 'font-battambang' : ''
            }`}>
              {t('about.interests')}
            </p>
          </div>

          {/* About Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="bg-black/20 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-300">const developer = {`{`}</div>
                  <div className="ml-4 text-blue-300">name: <span className="text-yellow-300">"Ven Tithyaka"</span>,</div>
                  <div className="ml-4 text-blue-300">passion: <span className="text-yellow-300">"Building amazing things"</span>,</div>
                  <div className="ml-4 text-blue-300">location: <span className="text-yellow-300">"Phnom Penh"</span>,</div>
                  <div className="ml-4 text-blue-300">email: <span className="text-yellow-300">"ventithyaka@gmail.com"</span>,</div>
                  <div className="ml-4 text-blue-300">status: <span className="text-yellow-300">"Available for projects"</span></div>
                  <div className="text-green-300">{`};`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className={`text-3xl font-bold text-gray-900 dark:text-white text-center mb-12 ${
            language === 'kh' ? 'font-battambang' : ''
          }`}>
            What I Bring to the Table
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Experience Section */}
        <div className="mb-16">
          <h3 className={`text-3xl font-bold text-gray-900 dark:text-white text-center mb-12 ${
            language === 'kh' ? 'font-battambang' : ''
          }`}>
            {t('experience.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h4 className={`text-xl font-semibold text-gray-900 dark:text-white mb-6 ${
                language === 'kh' ? 'font-battambang' : ''
              }`}>
                {t('experience.education')}
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className={`font-semibold text-gray-900 dark:text-white ${
                    language === 'kh' ? 'font-battambang' : ''
                  }`}>
                    {t('experience.school')}
                  </h5>
                  <p className={`text-gray-600 dark:text-gray-400 ${
                    language === 'kh' ? 'font-battambang' : ''
                  }`}>
                    {t('experience.degree')}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {t('experience.duration')} • {t('experience.location')}
                  </p>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h4 className={`text-xl font-semibold text-gray-900 dark:text-white mb-6 ${
                language === 'kh' ? 'font-battambang' : ''
              }`}>
                {t('experience.work')}
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    Full-Stack Developer
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400">
                    Various Projects
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    2024-2025 • {t('experience.location')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className={`text-3xl font-bold text-gray-900 dark:text-white text-center mb-12 ${
            language === 'kh' ? 'font-battambang' : ''
          }`}>
            {t('about.skills')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                  {category}
                </h4>
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
