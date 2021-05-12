import React from "react";

interface SignOutProps {
  signOutFx: () => Promise<void>;
  label: string;
  className?: string;
}

const SignOut: React.FC<SignOutProps> = ({ label, signOutFx, className }) => {
  return (
    <button className={className} onClick={signOutFx}>
      {label}
    </button>
  );
};

export default SignOut;
