import Link from 'next/link'
import Image from 'next/image'
import monogram from '@/images/logos/BE_Logo_Monogram.png'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
              </div>
              <Image src={monogram} alt={"monogram logo in the footer"} className={"w-12"}></Image>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Ben Groneman. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
