import { BasicToggleDemo } from './BasicToggleDemo';
import { DarkModeDemo } from './DarkModeDemo';
import { FeatureFlagsDemo } from './FeatureFlagsDemo';
import { AccordionDemo } from './AccordionDemo';
import { SidebarDemo } from './SidebarDemo';
import { SettingsPanelDemo } from './SettingsPanelDemo';
import { MultiToggleDemo } from './MultiToggleDemo';

export const ToggleDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            🎭 useToggle Hook (Avancé)
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
            Projet 40/100 • Toggle Pattern Advanced
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Gestion avancée d'états booléens avec actions multiples
          </p>
          <div className="mt-4 inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-bold text-lg shadow-lg">
            🎉 40% du parcours complété ! 🎉
          </div>
        </div>

        {/* Demos */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <BasicToggleDemo />
            <DarkModeDemo />
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <FeatureFlagsDemo />
            <AccordionDemo />
          </div>

          {/* Row 3 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <SidebarDemo />
            <SettingsPanelDemo />
          </div>

          {/* Row 4 */}
          <MultiToggleDemo />

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              ✨ Fonctionnalités
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Toggle</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Basculer l'état
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Set True</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Activer directement
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Set False</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Désactiver directement
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Set Value</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Définir valeur
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Dark Mode</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Thème complet
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Feature Flags</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Gestion features
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">UI Controls</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Contrôles interface
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Type-Safe</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    100% TypeScript
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              💻 Exemples d'utilisation
            </h2>

            <div className="space-y-6">
              {/* Basic Usage */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Utilisation basique :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`import { useToggle } from './hooks';

const [isOn, toggle, setTrue, setFalse, set] = useToggle(false);

// Basculer
toggle();

// Activer
setTrue();

// Désactiver
setFalse();

// Définir une valeur
set(true);`}
                </pre>
              </div>

              {/* Dark Mode */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Dark mode :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [isDark, toggleDark, enableDark, disableDark] = useToggle(false);

useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [isDark]);

return (
  <button onClick={toggleDark}>
    {isDark ? '🌙 Dark' : '☀️ Light'}
  </button>
);`}
                </pre>
              </div>

              {/* Feature Flags */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Feature flags :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [analytics, toggleAnalytics] = useToggle(false);
const [notifications, toggleNotifications] = useToggle(true);
const [betaFeatures, toggleBetaFeatures] = useToggle(false);

return (
  <div>
    {analytics && <AnalyticsProvider />}
    {notifications && <NotificationSystem />}
    {betaFeatures && <BetaFeatures />}
  </div>
);`}
                </pre>
              </div>

              {/* Sidebar */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Sidebar navigation :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [isSidebarOpen, toggleSidebar, , closeSidebar] = useToggle(false);

return (
  <>
    <button onClick={toggleSidebar}>☰</button>
    
    <div className={\`sidebar \${isSidebarOpen ? 'open' : ''}\`}>
      {/* Menu items */}
    </div>
    
    {isSidebarOpen && (
      <div className="overlay" onClick={closeSidebar} />
    )}
  </>
);`}
                </pre>
              </div>

              {/* Accordion */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Accordion :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [section1Open, toggleSection1] = useToggle(false);
const [section2Open, toggleSection2] = useToggle(false);
const [section3Open, toggleSection3] = useToggle(false);

return (
  <div>
    <button onClick={toggleSection1}>Section 1</button>
    {section1Open && <div>Contenu 1</div>}
    
    <button onClick={toggleSection2}>Section 2</button>
    {section2Open && <div>Contenu 2</div>}
    
    <button onClick={toggleSection3}>Section 3</button>
    {section3Open && <div>Contenu 3</div>}
  </div>
);`}
                </pre>
              </div>

              {/* Settings Panel */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Panneau de paramètres :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [autoSave, toggleAutoSave] = useToggle(true);
const [emailNotif, toggleEmailNotif] = useToggle(false);
const [pushNotif, togglePushNotif] = useToggle(true);

return (
  <div className="settings">
    <Toggle
      label="Auto-save"
      enabled={autoSave}
      onToggle={toggleAutoSave}
    />
    <Toggle
      label="Email Notifications"
      enabled={emailNotif}
      onToggle={toggleEmailNotif}
    />
    <Toggle
      label="Push Notifications"
      enabled={pushNotif}
      onToggle={togglePushNotif}
    />
  </div>
);`}
                </pre>
              </div>

              {/* Multiple Toggles with Logic */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Toggles interconnectés :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [wifi, , , , setWifi] = useToggle(true);
const [bluetooth, , , , setBluetooth] = useToggle(false);
const [airplane, , , , setAirplane] = useToggle(false);

const handleAirplaneModeToggle = () => {
  if (!airplane) {
    // Activer mode avion : désactiver tout
    setWifi(false);
    setBluetooth(false);
    setAirplane(true);
  } else {
    // Désactiver mode avion
    setWifi(true);
    setAirplane(false);
  }
};`}
                </pre>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">🎯 Cas d'usage courants</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>🎨</span> Interface Utilisateur
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Modals et dialogs</li>
                  <li>• Sidebars et drawers</li>
                  <li>• Accordions et dropdowns</li>
                  <li>• Tooltips et popovers</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>⚙️</span> Paramètres
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Préférences utilisateur</li>
                  <li>• Feature flags</li>
                  <li>• Options de configuration</li>
                  <li>• Permissions</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>🌓</span> Thèmes
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Dark mode / Light mode</li>
                  <li>• Contrastes élevés</li>
                  <li>• Modes de lecture</li>
                  <li>• Thèmes personnalisés</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>🔐</span> États d'Application
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Loading states</li>
                  <li>• Visibility toggles</li>
                  <li>• Edit modes</li>
                  <li>• Active/Inactive states</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Milestone Celebration */}
          <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-xl shadow-2xl p-12 text-white text-center">
            <div className="text-8xl mb-6 animate-bounce">🎉</div>
            <h2 className="text-5xl font-bold mb-4">Félicitations !</h2>
            <p className="text-2xl mb-6">40 projets terminés sur 100 !</p>
            <div className="flex justify-center gap-4 mb-6">
              <div className="text-6xl">🚀</div>
              <div className="text-6xl">💪</div>
              <div className="text-6xl">🔥</div>
            </div>
            <div className="text-xl font-semibold mb-4">
              Tu maîtrises maintenant :
            </div>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl mb-2">⚛️</div>
                <div className="font-bold">React Hooks</div>
                <div className="text-white/80">Tous les patterns</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl mb-2">📘</div>
                <div className="font-bold">TypeScript</div>
                <div className="text-white/80">100% type-safe</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl mb-2">🎨</div>
                <div className="font-bold">Tailwind</div>
                <div className="text-white/80">Design moderne</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-bold">Performance</div>
                <div className="text-white/80">Optimisations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};