"use client";
import React, { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteBooking } from "../_lib/actions";
// @ts-expect-error typeerror
function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) =>
      // @ts-expect-error typeerror
      curBookings.filter((booking) => booking.id !== bookingId)
  );
  // @ts-expect-error typeerror
  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteBooking(bookingId);
  }

  return (
    <ul className="space-y-6">
      {
        // @ts-expect-error typeerror
        optimisticBookings.map((booking) => (
          <ReservationCard
            booking={booking}
            key={booking.id}
            onDelete={handleDelete}
          />
        ))
      }
    </ul>
  );
}

export default ReservationList;
