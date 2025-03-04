import Link from "next/link"

type RedirectCardProps = {
  thumbnailSrc: string
  href: string
}

export const RedirectCard = ({thumbnailSrc, href}: RedirectCardProps) => {
  return (
    <Link href={href} className="w-full p-2 bg-sky-600 border-white border rounded-lg flex flex-col gap-2">
      <img src={thumbnailSrc} className="rounded-md border-white border" />
    </Link>
  )
}
