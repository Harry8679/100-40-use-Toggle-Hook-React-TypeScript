import { useToggle } from '../hooks';

export const BasicToggleDemo = () => {
  const [isOn, toggle, setTrue, setFalse] = useToggle(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Toggle Basique
      </h3>

      <div className="space-y-6">
        {/* Toggle Display */}
        <div className={`p-12 rounded-xl text-center transition-all ${
          isOn
            ? 'bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20'
            : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700/20 dark:to-gray-800/20'
        }`}>
          <div className={`text-8xl mb-4 transition-transform ${isOn ? 'scale-110' : 'scale-100'}`}>
            {isOn ? '💡' : '🌑'}
          </div>
          <div className={`text-4xl font-bold ${
            isOn
              ? 'text-green-600 dark:text-green-400'
              : 'text-gray-600 dark:text-gray-400'
          }`}>
            {isOn ? 'ON' : 'OFF'}
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={setTrue}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors"
          >
            ✓ ON
          </button>
          <button
            onClick={toggle}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
          >
            🔄 Toggle
          </button>
          <button
            onClick={setFalse}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
          >
            ✗ OFF
          </button>
        </div>

        {/* State Display */}
        <div className={`p-4 rounded-lg ${
          isOn
            ? 'bg-green-100 dark:bg-green-900/20'
            : 'bg-gray-100 dark:bg-gray-700/20'
        }`}>
          <div className="flex items-center justify-between">
            <span className={`font-semibold ${
              isOn
                ? 'text-green-700 dark:text-green-400'
                : 'text-gray-700 dark:text-gray-400'
            }`}>
              État actuel :
            </span>
            <span className={`px-4 py-2 rounded-full font-bold ${
              isOn
                ? 'bg-green-500 text-white'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
            }`}>
              {isOn ? 'Activé' : 'Désactivé'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};