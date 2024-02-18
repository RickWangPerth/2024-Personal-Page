import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  WebsiteIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
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

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Rick Wang. I live in Perth, where I imagine the future and exploring destiny.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Growing up as an introverted and sensitive child, I often found
              myself hesitant to engage in conversations, fearing I would become
              the center of attention or inadvertently hurt others. This early
              experience sparked a deep interest in psychology, driven by a
              desire to understand the thoughts of others and learn how to make
              conversations more enjoyable. My curiosity was further ignited by
              Carl Jung&apos;s <em>The Secret of the Golden Flower</em> which
              drew me into the fascinating world of Chinese religion.
            </p>
            <p>
              I immersed myself in Buddhism and Taoism, explored the principles
              of Bazi and Feng Shui, and contemplated whether destiny was
              predetermined at the moment the universe was born. I pondered
              whether Wu Wei, the principle of non-action, was truly in harmony
              with fate. I came to realize that destiny is not about good or
              bad; these are merely labels imposed by societal classifications
              based on wealth and power. I believe that everyone has the
              potential to lead a rich life, sharing their insights and
              experiences in the afterlife, whether that be at the Naihe Bridge
              or before Anubis. To me, the essence of life lies in experiencing
              the unique journey that destiny lays out for us, free from any
              binary judgments. Embracing and cherishing our genuine feelings is
              what imbues life with meaning.
            </p>
            <p>
              In today&apos;s scientifically driven society, these beliefs may
              seem outdated or foolish since they cannot be empirically proven,
              and many find no depth in the recitation of Buddhist scriptures.
              However, I am convinced that there is a scientific or
              understandable method to validate these mystical
              experiences—through the exploration and exhaustion of all
              possibilities.
            </p>
            <p>
              Consider the idea of aggregating the destinies of all individuals
              on a timeline as a way to explore all the potential paths of fate.
              If our goal is to determine which life is the happiest, then
              isn&apos;t this the very experiment we should be conducting? With
              sufficient time, we could uncover the most fulfilling paradigm for
              life.
            </p>
            <p>
              The depth of understanding we can achieve depends on the
              granularity and volume of the data we explore. Theoretically, if a
              model could explore all possibilities of the world&apos;s smallest
              particles, it might unveil every potentiality in the universe,
              including all parallel universes. This could allow us to replicate
              Siddhartha Gautama&apos;s experiences, giving everyone connected
              to this model the opportunity to experience his enlightenment.
            </p>
            <p>
              The development of AI, such as ChatGPT, which is trained on vast
              datasets to achieve a level of wisdom beyond the capacity of
              ordinary humans, represents an incredible feat of creation. This
              is a testament to the power of exhaustive exploration.
            </p>
            <p>
              While exploring all particles may be impossible, the continued
              increase in computational power and the expansion of datasets mean
              that AI models will help us to better understand the world,
              creating intelligent tools that empower every aspect of life.
              Ultimately, this approach will bring us closer to a divine
              understanding.
            </p>
            <p>
              I am grateful to be alive in this era and hopeful that I can
              connect AI to as many people as possible to improve their lives.
              This has been my motivation for studying IT and for founding
              QuokkAI, as well as my enduring dream.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.instagram.com/hideinperth/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/RickWangPerth"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/xinlyuwang/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:xinlyuwang96@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              xinlyuwang96@gmail.com
            </SocialLink>
            <SocialLink
              href="https://www.quokkai.com.au/"
              icon={WebsiteIcon}
              className="mt-4"
            >
              QuokkAI Website
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
