import React from 'react';
import type { ComingSoonDashboardProps } from '../../../types/components';
import "../../../styles/components/games/shared/coming-soon-dashboard.css";

const ComingSoonDashboard: React.FC<ComingSoonDashboardProps> = ({ gameName }) => {
  return (
    <div className="coming-soon-dashboard">
      <div className="coming-soon-content">
        <div className="coming-soon-icon">
          🚧
        </div>
        <p>Support for {gameName} is coming soon!</p>
        
        <div className="planned-features">
          <h3>Planned Features:</h3>
          <ul>
            <li>✨ Wish/Pull Tracking</li>
            <li>👥 Character Collection</li>
            <li>📋 Daily Task Manager</li>
            <li>🎪 Event Tracker</li>
            <li>📊 Statistics & Analytics</li>
          </ul>
        </div>
        
        <div className="development-status">
          <p>🎯 <strong>Current Focus:</strong> Genshin Impact features</p>
          <p>📅 <strong>Next:</strong> Expanding to other games</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonDashboard;

