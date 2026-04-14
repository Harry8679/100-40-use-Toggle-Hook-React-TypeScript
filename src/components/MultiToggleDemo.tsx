import { useToggle } from '../hooks';

export const MultiToggleDemo = () => {
  const [wifi, toggleWifi, , , setWifi] = useToggle(true);
  const [bluetooth, toggleBluetooth, , , setBluetooth] = useToggle(false);
  const [airplane, toggleAirplane, , , setAirplane] = useToggle(false);
  const [location, toggleLocation, , , setLocation] = useToggle(true);

  const handleAirplaneModeToggle = () => {
    if (!airplane) {
      // Activer mode avion : désactiver tout
      setWifi(false);
      setBluetooth(false);
      setLocation(false);
      setAirplane(true);
    } else {
      // Désactiver mode avion : réactiver wifi
      setWifi(true);
      setAirplane(false);
    }
  };

  const quickSettings = [
    { id: '1', name: 'WiFi', icon: '📶', enabled: wifi, toggle: toggleWifi },
    { id: '2', name: 'Bluetooth', icon: '🔷', enabled: bluetooth, toggle: toggleBluetooth },
    { id: '3', name: 'Mode Avion', icon: '✈️', enabled: airplane, toggle: handleAirplaneModeToggle },
    { id: '4', name: 'Localisation', icon: '📍', enabled: location, toggle: toggleLocation },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Paramètres Rapides
      </h3>

      <div className="space-y-6">
        {/* Quick Settings Grid */}
        <div className="grid grid-cols-2 gap-4">
          {quickSettings.map((setting) => (
            <button
              key={setting.id}
              onClick={setting.toggle}
              className={`p-6 rounded-xl transition-all ${
                setting.enabled
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white scale-105'
                  : 'bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-white'
              }`}
            >
              <div className="text-5xl mb-3">{setting.icon}</div>
              <div className="font-bold">{setting.name}</div>
              <div className="text-sm mt-1 opacity-75">
                {setting.enabled ? 'Activé' : 'Désactivé'}
              </div>
            </button>
          ))}
        </div>

        {/* Airplane Mode Warning */}
        {airplane && (
          <div className="p-4 bg-orange-100 dark:bg-orange-900/20 rounded-lg border-2 border-orange-500 animate-scale-in">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✈️</span>
              <div>
                <div className="font-bold text-orange-700 dark:text-orange-400">
                  Mode Avion Activé
                </div>
                <div className="text-sm text-orange-600 dark:text-orange-500">
                  Toutes les connexions sans fil sont désactivées
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Status Summary */}
        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
            État des connexions :
          </h4>
          <div className="flex flex-wrap gap-2">
            {quickSettings.map((setting) => (
              <span
                key={setting.id}
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  setting.enabled
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                {setting.icon} {setting.name}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-400">
            💡 Le mode avion désactive automatiquement toutes les connexions sans fil !
          </p>
        </div>
      </div>
    </div>
  );
};