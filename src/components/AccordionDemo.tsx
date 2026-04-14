import { useToggle } from '../hooks';
import type { AccordionItem } from '../types';

export const AccordionDemo = () => {
  const [item1Open, toggleItem1] = useToggle(false);
  const [item2Open, toggleItem2] = useToggle(false);
  const [item3Open, toggleItem3] = useToggle(false);
  const [item4Open, toggleItem4] = useToggle(false);

  const items: AccordionItem[] = [
    {
      id: '1',
      title: 'Qu\'est-ce que React ?',
      content: 'React est une bibliothèque JavaScript pour créer des interfaces utilisateur. Elle permet de construire des composants réutilisables et de gérer l\'état de l\'application de manière efficace.',
      icon: '⚛️',
    },
    {
      id: '2',
      title: 'Pourquoi utiliser TypeScript ?',
      content: 'TypeScript ajoute un typage statique à JavaScript, ce qui permet de détecter les erreurs plus tôt, d\'améliorer l\'autocomplete et de rendre le code plus maintenable.',
      icon: '📘',
    },
    {
      id: '3',
      title: 'Qu\'est-ce qu\'un hook ?',
      content: 'Les hooks sont des fonctions qui permettent d\'utiliser l\'état et d\'autres fonctionnalités React dans des composants fonctionnels. useState, useEffect et useToggle sont des exemples de hooks.',
      icon: '🪝',
    },
    {
      id: '4',
      title: 'Comment fonctionne useToggle ?',
      content: 'useToggle est un hook personnalisé qui simplifie la gestion d\'un état booléen. Il fournit des fonctions pour basculer, activer ou désactiver l\'état facilement.',
      icon: '🔄',
    },
  ];

  const toggles = [toggleItem1, toggleItem2, toggleItem3, toggleItem4];
  const isOpenArray = [item1Open, item2Open, item3Open, item4Open];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Accordion avec Toggle
      </h3>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={toggles[index]}
              className="w-full p-4 flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-bold text-gray-800 dark:text-white text-left">
                  {item.title}
                </span>
              </div>
              <span className={`text-2xl transition-transform ${
                isOpenArray[index] ? 'rotate-180' : 'rotate-0'
              }`}>
                ▼
              </span>
            </button>
            
            {isOpenArray[index] && (
              <div className="p-4 bg-white dark:bg-gray-800 animate-scale-in">
                <p className="text-gray-600 dark:text-gray-400">
                  {item.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
        <p className="text-sm text-green-700 dark:text-green-400">
          💡 Cliquez sur les sections pour les ouvrir/fermer avec useToggle !
        </p>
      </div>
    </div>
  );
};