"use client";
import { createContext, useContext } from "react";

export const LoaderContext = createContext<{ done: boolean }>({ done: false });
export const useLoader = () => useContext(LoaderContext);
