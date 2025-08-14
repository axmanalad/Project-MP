import type React from "react";
import { useState } from "react";
import type { GenshinDashboardProps } from "../../../types";
import TabNavigation from "../shared/TabNavigation";
import WishTracker from "../shared/WishTracker";

const GenshinDashboard: React.FC<GenshinDashboardProps> = ({ game }) => {
  const [activeTab, setActiveTab] = useState('wishes');

  const tabs = [
    { id: 'wishes', label: 'Wish Tracker', available: true },
    { id: 'characters', label: 'Characters', available: false },
    { id: 'weapons', label: 'Weapons', available: false },
    { id: 'daily', label: 'Daily Commissions', available: false },
    { id: 'events', label: 'Events', available: false }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'wishes':
        return <WishTracker gameId={game.id} />;
      default:
        return (
          <div className="coming-soon">
            <h3>Coming Soon!</h3>
            <p>This feature is currently in development. Stay tuned for updates!</p>
          </div>
        );
    }
  };

  return (
    <div className="genshin-dashboard">
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <div className="dashboard-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default GenshinDashboard;