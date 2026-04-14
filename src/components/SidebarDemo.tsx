import { useToggle } from '../hooks';

export const SidebarDemo = () => {
  const [isSidebarOpen, toggleSidebar, , closeSidebar] = useToggle(false);

  const menuItems = [
    { id: '1', icon: '🏠', label: 'Accueil' },
    { id: '2', icon: '📊', label: 'Dashboard' },
    { id: '3', icon: '📁', label: 'Projets' },
    { id: '4', icon: '👥', label: 'Équipe' },
    { id: '5', icon: '⚙️', label: 'Paramètres' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Sidebar Navigation
      </h3>

      <div className="space-y-6">
        {/* Demo Area */}
        <div className="relative h-96 bg-gray-100 dark:bg-gray-700/50 rounded-xl overflow-hidden">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-between px-6">
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <span className="text-white text-2xl">☰</span>
            </button>
            <span className="text-white font-bold text-lg">Mon Application</span>
            <div className="w-10" />
          </div>

          {/* Sidebar */}
          <div
            className={`absolute top-0 left-0 bottom-0 w-64 bg-white dark:bg-gray-800 shadow-2xl transition-transform duration-300 ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="p-6 pt-20">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={closeSidebar}
                    className="w-full p-3 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold text-gray-800 dark:text-white">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Overlay */}
          {isSidebarOpen && (
            <div
              onClick={closeSidebar}
              className="absolute inset-0 bg-black/50 animate-fade-in"
            />
          )}

          {/* Content */}
          <div className="pt-24 px-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                Contenu de la page
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Cliquez sur le menu hamburger (☰) pour ouvrir/fermer la sidebar.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            💡 Sidebar avec overlay et fermeture au clic dehors grâce à useToggle !
          </p>
        </div>
      </div>
    </div>
  );
};