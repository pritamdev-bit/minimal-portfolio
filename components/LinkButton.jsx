import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ButtonLink({children, link}) {
  return <Link href={link} target="_blank"><Button className="text-lg cursor-pointer" variant="link" >{children}</Button></Link>
}
