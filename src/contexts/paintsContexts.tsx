import { createContext } from "react";
import { paintsInterface } from "./interfaces";
export const paintsContext = createContext<paintsInterface[]>([])