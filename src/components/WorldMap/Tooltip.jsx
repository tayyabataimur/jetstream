import React, { useState } from 'react';
import { Tooltip, TooltipRefProps } from "react-tooltip";

const ToolTipWrapper = ({ officeName, address, phoneNumber, isVisible }) => {
  return (
    <Tooltip
    ref={tooltip}
    id={id}
    float
    className={`!p-0 !rounded-lg !bg-white !text-inherit ${shadow_custom_world_map} select-none z-10`}
    opacity={1}
  >
    <div className="flex gap-x-5">
      <div className="flex justify-center items-center">
        <p className="font-primary-Regular font-bold ">Brazil</p>
      </div>
      <div>
        <small className=" font-primary-Regular  ">Online Revenue</small>
        <p className="text-sm font-primary-Regular">$13,450,000</p>
      </div>
    </div>
  </Tooltip>
  );
};

export default ToolTipWrapper;
