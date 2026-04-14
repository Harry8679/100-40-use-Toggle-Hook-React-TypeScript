import { useState } from 'react';
import { useToggle } from '../hooks';
import type { Feature } from '../types';

export const FeatureFlagsDemo = () => {
  const [analytics, toggleAnalytics] = useToggle(false);
  const [notifications, toggleNotifications] = useToggle(true);
  const [betaFeatures, toggleBetaFeatures] = useToggle(false);
  const [darkMode, toggleDarkMode] = useToggle(false);

  const features: Feature[] = [
    {
      id: '1',
      name: 'Analytics',
      description: 'Collecter des données d\'utilisation',
      enabled: analytics,
      icon: '📊',
    },
    {
      id: '2',
      name: 'Notifications',
      description: 'Recevoir des notifications push',
      enabled: notifications,
      icon: '🔔',
    },
    {
      id: '3',
      name: 'Beta Features',
      description: 'Activer les fonctionnalités expérimentales',
      enabled: betaFeatures,
      icon: '🧪',
    },
    {
      id: '4',
      name: 'Dark Mode',
      description: 'Mode sombre automatique',
      enabled: darkMode,
      icon: '🌙',
    },
  ];

  const togglers = [toggleAnalytics, toggleNotifications, toggleBetaFeatures, toggleDarkMode];

  const enabledCount = features.filter((f) => f.enabled).length;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Feature Flags
      </h3>

      <div className="space-y-6">
        {/* Stats */}
        <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-800 dark:text-white">
              Fonctionnalités activées :
            </span>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {enabledCount} / {features.length}
            </span>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`p-4 rounded-lg transition-all ${
                feature.enabled
                  ? 'bg-green-100 dark:bg-green-900/20'
                  : 'bg-gray-50 dark:bg-gray-700/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <div className={`font-bold ${
                      feature.enabled
                        ? 'text-green-700 dark:text-green-400'
                        : 'text-gray-700 dark:text-gray-400'
                    }`}>
                      {feature.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-500">
                      {feature.description}
                    </div>
                  </div>
                </div>
                <button
                  onClick={togglers[index]}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    feature.enabled ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      feature.enabled ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Active Features */}
        {enabledCount > 0 && (
          <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
              Fonctionnalités actives :
            </h4>
            <div className="flex flex-wrap gap-2">
              {features
                .filter((f) => f.enabled)
                .map((f) => (
                  <span
                    key={f.id}
                    className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold"
                  >
                    {f.icon} {f.name}
                  </span>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};