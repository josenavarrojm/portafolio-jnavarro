"use client";
import { useEffect } from "react";

export default function MyClientComponent() {
  useEffect(() => {
    console.log("Cliente");
  }, []);

  return <div>Hola desde cliente</div>;
}
