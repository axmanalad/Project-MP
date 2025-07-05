import type React from "react";
import type { TabNavigationProps } from "../../../types";
import "../../../styles/components/games/shared/tab-navigation.css";

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <nav className="tab-navigation">
      <div className="tab-list">
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''} ${tab.available ? 'available' : 'unavailable'}`}
            onClick={() => { if (tab.available) onTabChange(tab.id); }}
            disabled={!tab.available}
          >
            {tab.label}
            {!tab.available && <span className="ml-2 text-xs text-yellow-200">Soon</span>}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default TabNavigation;