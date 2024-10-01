"use server";

import { auth, signIn, signOut } from "@/app/_lib/auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in!");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  const regex = /^[a-zA-Z0-9]{6,12}$/;
  const isValidID = regex.test(nationalID);
  if (!isValidID) throw new Error("Please provide a valid national ID");

  const updatedData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("guests")
    .update(updatedData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
