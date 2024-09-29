"use client";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const ReservationContext = createContext();

function ReservationProvider({ children }) {
  const initialState = { from: undefined, to: undefined };
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");

  return context;
}

export { ReservationProvider, useReservation };
