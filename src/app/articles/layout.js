import React from "react";

export default function ArticlesLayout({ children }) {

  
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <div className="flex flex-col w-full gap-2 text-center">
        <h3 className="mb-2 md:self-start lg:mx-40 text-2xl font-bold sm:mb-4 md:text-5xl">
          L&apos;art du cocktail
        </h3>
        <h3 className="mb-20 md:self-end text-wrap lg:mx-40 text-sm sm:mb-36 md:text-base lg:text-xl">
          Élevez vos sens,{" "}
          <strong className="text-serria-600">
            une connaissance à la fois
          </strong>
          ...
        </h3>
        <div>{children}</div>
      </div>
    </div>
  );
}
