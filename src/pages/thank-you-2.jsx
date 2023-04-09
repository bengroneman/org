import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYouTwo() {
  return (
    <>
      <Head>
        <title>You’re subscribed - Ben Groneman</title>
        <meta
          name="description"
          content="Thank you for reaching out."
        />
      </Head>
      <SimpleLayout
        title="Thanks for reaching out."
        intro="I'll send you an email soon to follow up on your request. I look forward to chatting with you."
      />
    </>
  )
}
