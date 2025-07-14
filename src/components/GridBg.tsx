import "../app/[locale]/index.css";

import { ReactNode } from "react";

export default function GridBackground({ children }: { children: ReactNode }) {
  return (
    <div className="div-parent h-screen w-full flex flex-col justify-between items-end text-center font-(family-name:--font-bebas)">
      {children}
    </div>
  );
}
