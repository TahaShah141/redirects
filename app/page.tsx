import { RedirectCard } from "./components/RedirectCard";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col gap-2 p-4">
      <RedirectCard href="/handsfree" thumbnailSrc="handsfree.png" />
    </div>
  );
}
