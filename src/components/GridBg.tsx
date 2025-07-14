import "../app/[locale]/index.css";

import { ReactNode } from "react";

export default function GridBackground({ children }: { children: ReactNode }) {
  return (
    <div className="div-parent fixed top-0 left-0 h-screen flex flex-col justify-between items-end text-center font-(family-name:--font-bebas)">
      {children}
    </div>
  );
}
