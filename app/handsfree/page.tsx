import { redirect } from "next/navigation";

export default async function Handsfree() {
  const { node: {value: ipAddress} }: {node: {key: string, value: string}} = await (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ip`, {
    cache: "no-store", // Ensure fresh data on every request
  })).json();

  redirect(`http://${ipAddress}:1013`);
}