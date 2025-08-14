import type React from "react";
import type { EmptyWishStateProps } from "../../../../types";

const EmptyWishState: React.FC<EmptyWishStateProps> = ({ message= "No wishes recorded yet.", showIcon = true}) => {
  return (
    <div className="empty-state">
      {showIcon && <div className="text-6xl mb-4">🎭</div>}
      <p>{message}</p>
      <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
        Start tracking your wishes to see your pull history and statistics!
      </p>
    </div>
  );
};

export default EmptyWishState;