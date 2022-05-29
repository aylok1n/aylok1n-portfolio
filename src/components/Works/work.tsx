import React from 'react';

export const WorkContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="grid grid-cols-1 w-full min-h-screen lg:grid-cols-2">
    {children}
  </div>
);

export const WorkBackGround: React.FC = () => (
  <div className="grid sticky top-0 grid-cols-1 w-full min-h-screen lg:grid-cols-2">
    <div className="h-[30vh] bg-black lg:h-auto" />
    <div className="h-[70vh] bg-black lg:min-h-screen" />
  </div>
);

export const WorkLeft: React.FC<{
  progress: number;
  children?: React.ReactNode;
}> = ({ children, progress }) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  return (
    <div
      className="flex flex-col justify-center items-center h-[30vh] text-3xl lg:h-auto lg:text-3xl"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="leading-10">{children}</div>
    </div>
  );
};

export const WorkRight: React.FC<{
  progress: number;
  children?: React.ReactNode;
}> = ({ children, progress }) => {
  const translateY = Math.max(-50, -(progress - 0.5) * 50);

  return (
    <div
      className="flex flex-1 justify-center h-screen lg:items-center"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="px-10 pt-10 w-full max-w-md md:px-0 lg:pt-0">
        {children}
      </div>
    </div>
  );
};
