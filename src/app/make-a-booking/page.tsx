import { redirect } from "next/navigation";

export default function MakeABookingRedirect() {
  redirect("/visit/book");
}
