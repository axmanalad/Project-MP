import type React from "react";
import type { StepCardProps } from "../../../types";

const StepCard: React.FC<StepCardProps> = ({ step, instruction, instructionList }) => {
  return (
    <div>
      <h3>
        {step}
      </h3>
      {instruction && (
        <p>{instruction}</p>
      )}
      <div className="instruction-list">
      {instructionList && instructionList.length > 0 && (
        <ol>
          {instructionList.map((item) => (
            <li className="instruction-item" key={item}>{item}</li>
          ))}
        </ol>
      )}
      </div>
    </div>
  );
};

export default StepCard;