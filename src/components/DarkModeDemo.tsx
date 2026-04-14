import { useEffect } from 'react';
import { useToggle } from '../hooks';

export const DarkModeDemo = () => {
  const [isDark, toggleDark, enableDark, disableDark] = useToggle(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Dark Mode Toggle
      </h3>

      <div className="space-y-6">
        {/* Theme Preview */}
        <div className={`p-8 rounded-xl text-center transition-all ${
          isDark
            ? 'bg-gray-900 text-white'
            : 'bg-gray-100 text-gray-900'
        }`}>
          <div className="text-6xl mb-4">
            {isDark ? '🌙' : '☀️'}
          </div>
          <div className="text-3xl font-bold mb-2">
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </div>
          <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            Mode {isDark ? 'sombre' : 'clair'} activé
          </div>
        </div>

        {/* Theme Selector */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={disableDark}
            className={`p-6 rounded-xl transition-all ${
              !isDark
                ? 'bg-yellow-100 dark:bg-yellow-900/20 scale-105 ring-4 ring-yellow-500'
                : 'bg-gray-100 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <div className="text-5xl mb-3">☀️</div>
            <div className={`font-bold ${
              !isDark
                ? 'text-yellow-700 dark:text-yellow-400'
                : 'text-gray-700 dark:text-gray-400'
            }`}>
              Light Mode
            </div>
          </button>

          <button
            onClick={enableDark}
            className={`p-6 rounded-xl transition-all ${
              isDark
                ? 'bg-blue-100 dark:bg-blue-900/20 scale-105 ring-4 ring-blue-500'
                : 'bg-gray-100 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <div className="text-5xl mb-3">🌙</div>
            <div className={`font-bold ${
              isDark
                ? 'text-blue-700 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-400'
            }`}>
              Dark Mode
            </div>
          </button>
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleDark}
          className="w-full px-6 py-4 bg-gradient-to-r from-yellow-400 to-blue-600 hover:from-yellow-500 hover:to-blue-700 text-white rounded-lg font-bold text-lg transition-all shadow-lg"
        >
          🔄 Basculer le thème
        </button>

        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            💡 Le thème s'applique à toute l'application en temps réel !
          </p>
        </div>
      </div>
    </div>
  );
};