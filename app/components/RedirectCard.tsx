import Link from "next/link"

type RedirectCardProps = {
  thumbnailSrc: string
  name: string
  href: string
}

export const RedirectCard = ({name, thumbnailSrc, href}: RedirectCardProps) => {
  return (
    <Link href={href} className="flex items-center relative">
      <p className="bg-neutral-600 border border-neutral-800 text-xs sm:text-base p-1 px-2 sm:px-4 sm:py-2 rounded-full absolute left-1/2 -translate-x-1/2 bottom-1 translate-y-1/2" >{name}</p>
      <div className="w-full p-2 bg-neutral-600 border border-neutral-800 rounded-lg flex flex-col gap-2">
        <img src={thumbnailSrc} className="rounded-md border border-neutral-800" />
      </div>
    </Link>
  )
}
