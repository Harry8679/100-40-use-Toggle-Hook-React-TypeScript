import { useToggle } from '../hooks';
import type { Setting } from '../types';

export const SettingsPanelDemo = () => {
  const [autoSave, toggleAutoSave] = useToggle(true);
  const [emailNotif, toggleEmailNotif] = useToggle(false);
  const [pushNotif, togglePushNotif] = useToggle(true);
  const [dataCollection, toggleDataCollection] = useToggle(false);
  const [betaAccess, toggleBetaAccess] = useToggle(false);

  const settings: Setting[] = [
    {
      id: '1',
      name: 'Auto-save',
      description: 'Sauvegarder automatiquement vos modifications',
      enabled: autoSave,
      category: 'advanced',
    },
    {
      id: '2',
      name: 'Notifications Email',
      description: 'Recevoir des notifications par email',
      enabled: emailNotif,
      category: 'notifications',
    },
    {
      id: '3',
      name: 'Notifications Push',
      description: 'Recevoir des notifications push',
      enabled: pushNotif,
      category: 'notifications',
    },
    {
      id: '4',
      name: 'Collecte de données',
      description: 'Autoriser la collecte de données anonymes',
      enabled: dataCollection,
      category: 'privacy',
    },
    {
      id: '5',
      name: 'Accès Beta',
      description: 'Accéder aux fonctionnalités en version beta',
      enabled: betaAccess,
      category: 'advanced',
    },
  ];

  const toggles = [
    toggleAutoSave,
    toggleEmailNotif,
    togglePushNotif,
    toggleDataCollection,
    toggleBetaAccess,
  ];

  const categories = [
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'privacy', name: 'Confidentialité', icon: '🔒' },
    { id: 'advanced', name: 'Avancé', icon: '⚙️' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Panneau de Paramètres
      </h3>

      <div className="space-y-6">
        {categories.map((category) => {
          const categorySettings = settings.filter((s) => s.category === category.id);
          
          return (
            <div key={category.id}>
              <h4 className="flex items-center gap-2 font-bold text-gray-800 dark:text-white mb-3">
                <span className="text-2xl">{category.icon}</span>
                {category.name}
              </h4>
              
              <div className="space-y-2">
                {categorySettings.map((setting) => {
                  const settingIndex = settings.findIndex((s) => s.id === setting.id);
                  
                  return (
                    <div
                      key={setting.id}
                      className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 dark:text-white">
                          {setting.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {setting.description}
                        </div>
                      </div>
                      <button
                        onClick={toggles[settingIndex]}
                        className={`relative w-14 h-8 rounded-full transition-colors ${
                          setting.enabled ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                            setting.enabled ? 'translate-x-7' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Summary */}
        <div className="p-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-800 dark:text-white">
              Paramètres actifs :
            </span>
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
              {settings.filter((s) => s.enabled).length} / {settings.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};