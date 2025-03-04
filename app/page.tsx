// import { RedirectCard } from "./components/RedirectCard";

// export default function Home() {
//   return (
//     <div className="h-screen w-full flex flex-col gap-2 p-4">
//       <RedirectCard href="/handsfree" thumbnailSrc="handsfree.png" />
//     </div>
//   );
// }

import { redirect } from "next/navigation";

export default async function Handsfree() {
  const { node: {value: ipAddress} }: {node: {key: string, value: string}} = await (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ip`, {
    cache: "no-store", // Ensure fresh data on every request
  })).json();

  redirect(`http://${ipAddress}:1013`);
}