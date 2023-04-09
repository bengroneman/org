import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

import { Container } from "@/components/Container"
import { ContactForm } from "@/components/ContactForm";
import {
  GitHubIcon,
  LinkedInIcon,
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
              I’m Ben Groneman. I live in Fremont County, where I design websites and provide IT consulting services.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I am an avid developer with a passion for helping my community grow with technology.
                Most recently I have built a website for a non-profit known as <a aria-label="link to almost home website" target="_blank" href="https://almosthomewyoming.org">Almost Home Wyoming</a>,
                an organization that helps folks go from homeless to hopeful with just a little help.
                Before that I was working with the Water for Wildlife foundation to build an exciting museum exhibit.
                The exhibit can be found at the Water for Wildlife museum (545 Main street, Lander Wyoming).
              </p>
              <p>
                I attended school at Central Wyoming College, and earned my Associates degree in Computer Science (2018). While in school I also worked as a Front-End Developer with Wyoming Inc.
                During my time there I learned how to build quality websites with Wordpress using a custom PHP framework
              </p>
              <p>
                I have spent over eight years working in IT, and building cool stuff on the web. Currently I work as a Lead QA Automation Engineer with Language I/O.
              </p>
              <p>
                <a aria-label="link to my current company" target="_blank" href="https://languageio.com/" >Language I/O</a> is a company providing multilingual customer support services to a global audience. I spend time automating a full suite of End-to-End tests across multiple CRM's and tools.
              </p>
              <p>With my extensive Web Development and IT service experience I am a strong candidate to build your next project - contact me for more details</p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
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
            <ContactForm></ContactForm>
          </div>
        </div>
      </Container>
    </>
  )
}
