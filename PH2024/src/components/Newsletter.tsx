'use client'
import React, { useRef, FormEvent, useEffect, useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

const url = `${process.env.NEXT_PUBLIC_MAILCHIMP_URL}`

interface CustomFormProps {
  onSubmitted: (formData: { EMAIL: string }) => void
  subscribeStatus: 'idle' | 'sending' | 'error' | 'success' | null
}

const CustomForm: React.FC<CustomFormProps> = ({
  onSubmitted,
  subscribeStatus,
}) => {
  const emailInput = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (emailInput.current && emailInput.current.value.includes('@')) {
      onSubmitted({
        EMAIL: emailInput.current.value,
      })
    }
  }

  let buttonText = 'Join'
  if (subscribeStatus === 'sending') {
    buttonText = 'Sending...'
  }
  if (subscribeStatus === 'success') {
    buttonText = 'Thank you!'
  } else if (subscribeStatus === 'error') {
    buttonText = 'Error :('
  }

  return (
    <form
      className="validate rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      onSubmit={handleSubmit}
      noValidate
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <input
        ref={emailInput}
        type="email"
        name="EMAIL"
        placeholder="Email address"
        aria-label="Email address"
        required
        className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
      />
      <Button type="submit" className="ml-4 flex-none">
        {buttonText}
      </Button>
    </form>
  )
}

const Newsletter: React.FC = () => {
  const router = useRouter()
  const [subscribeStatus, setSubscribeStatus] = useState<
    'idle' | 'sending' | 'error' | 'success'
  >('idle')

  useEffect(() => {
    if (subscribeStatus === 'success') {
      const timer = setTimeout(() => {
        router.push('/thank-you')
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [subscribeStatus, router])

  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => {
            // 如果状态变化，更新本地状态以触发 useEffect
            if (status !== null && status !== subscribeStatus) {
              setSubscribeStatus(status)
            }

            return (
              <>
                <CustomForm
                  onSubmitted={(formData) => subscribe(formData)}
                  subscribeStatus={subscribeStatus}
                />
                {/* {status === 'sending' && <div>sending...</div>}
                {status === 'error' && (
                  <div dangerouslySetInnerHTML={{ __html: message || '' }} />
                )}
                {status === 'success' && <div>Success!</div>} */}
              </>
            )
          }}
        />
      </div>
    </div>
  )
}

export default Newsletter
