import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

import { Container } from "@/components/Container"
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/SocialIcons"
import portraitImage from "@/images/avatar.jpg"

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ben Groneman</title>
        <meta
          name="description"
          content="I’m Ben Groneman. I live in Lander Wyoming, where I design the end user experience."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Ben Groneman. I live in Fremont County, where I design websites and provid IT consulting services.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I have been a computer Enthusiast since a young age,
                with my enthusiasm of Computers I have focused soley on improving the end user experience.
              </p>
              <p>
                During school I first worked with Wyoming Inc.,
                during my time there I learned about buildng websites with Wordpress on a custom PHP framework
              </p>
              <p>
                After my time with Wyoming Inc. I began building frontend features with NOLS,
                the National Outdoor Leadership School. Shortly after my internship with NOLS,
                I was leading digital marketing campaigns to improve outward bound messaging,
                and brought a strong focus on automation.
              </p>
              <p>
                Since then I have spent time working in IT consulting for the Fremont County area,
                I most recently just wrapped up a website for the Almost Home Wyoming Organization: 
                <a href="https://almosthomewyoming.org" alt="almost home wyoming website" class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">Almost Home Wyoming</a>
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.comg/maygately" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://github.com/bengroneman/" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/ben-groneman" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:create@blueengineering.dev"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                create@blueengineering.dev
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
