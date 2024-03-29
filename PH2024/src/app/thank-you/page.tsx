import { type Metadata } from 'next'
import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: "You're subscribed",
  description: 'Thanks for subscribing to my newsletter.',
}

export default function ThankYou() {
  const intro = (
    <>
      <Head>
        <link rel="canonical" href="https://www.therick.com.au/thank-you" />
      </Head>
      <p>
        I&apos;ll send you an email any time I publish a new blog post, release
        a new project, or have anything interesting to share that I think
        you&apos;d want to hear about. You can{' '}
        <a
          href={process.env.NEXT_PUBLIC_MAILCHIMP_UNSUBSCRIBE_URL}
          className="text-[#14B8A6] hover:underline"
          target="_blank"
        >
          unsubscribe
        </a>{' '}
        at any time, no hard feelings.
      </p>
    </>
  )

  return <SimpleLayout title="Thanks for subscribing." intro={intro} />
}
