import {Button} from "@/components/Button";

export function ContactForm() {
  return (
     <form
      action="/thank-you-2"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-12"
      name="contact-form"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span>Reach out about your next project</span>
      </h2>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          name="email"
          id="email"
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />

      </div>
      <div className="mt-6 flex">
        <textarea
          placeholder="Message"
          aria-label="Message"
          name="message"
          id="message"
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
      </div>
      <Button type="submit" className="mt-4 flex-none">
        Say Hi
      </Button>
    </form>
  )
}
