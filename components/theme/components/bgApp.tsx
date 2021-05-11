import React from "react";

const AppBg: React.FC = ({ children }) => {
  return (
    <div className="w-screen min-h-screen dark:text-gray-50 dark:bg-gray-900 bg-gray-100">
      {children}
    </div>
  );
};

export default AppBg;
