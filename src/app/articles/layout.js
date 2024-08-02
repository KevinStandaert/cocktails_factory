import React from "react";

export default function ArticlesLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="mb-2 self-start text-nowrap text-2xl font-bold sm:mb-4 md:text-5xl">
          L&apos;art du cocktail
        </h1>
        <h2 className="mb-20 self-end text-nowrap text-sm sm:mb-36 md:text-base lg:text-xl">
          Élevez vos sens,{" "}
          <strong className="text-serria-500">
            une connaissance à la fois
          </strong>
          ...
        </h2>
        <div>{children}</div>
      </div>
    </div>
  );
}
