import { type Metadata } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoDrQuokka from '@/images/logos/drQuokka.svg'
import logoPlantPal from '@/images/logos/plantPal.svg'
import logoLampLens from '@/images/logos/lumpLens.svg'
import logoEquipInsight from '@/images/logos/equipInsight.svg'
import logoSoSync from '@/images/logos/soSync.svg'
import logoEcotrack from '@/images/logos/ecotrak.svg'

const projects = [
  {
    name: 'DrQuokka',
    description:
      'An application for self-diagnosis, triage, and ED visit planning, optimizing resource allocation and reducing ED pressure.',
    skill: 'App Development',
    link: {
      href: 'https://docs.google.com/presentation/d/1Zcgg1d5jrBCUkBKX8QmKsmMxA3osNvIdzktQsivH8uM/edit#slide=id.p1',
      label: 'Presentation Keynote',
    },
    logo: logoDrQuokka,
  },
  {
    name: 'LumpLens',
    description:
      'A ML model that predicts ore characteristics to accelerate the mining investigation process and reduce emissions and costs.',
    skill: 'Data science',
    link: {
      href: 'https://docs.google.com/presentation/d/1f5BfB0tIzSqsakcSov5ZaXzAGn7zX00WADqFoax5dAY/edit?usp=sharing',
      label: 'Poster',
    },
    logo: logoLampLens,
  },
  {
    name: 'EquipInsight',
    description:
      'A dashboard tracks equipment performance data to enable managers to improve the working process.',
    skill: 'Data analysis',
    link: {
      href: 'https://github.com/23270983Ke912/CITS5206_Roborigger-Dashboard',
      label: 'GitHub Repo',
    },
    logo: logoEquipInsight,
  },
  {
    name: 'SOSync',
    description:
      'Larverage LLM and AI models to enhance the daily work of DEFS coordinators by converting audio into formatted tables.',
    skill: 'AI & LLM',
    link: {
      href: 'https://colab.research.google.com/drive/1AwsSby5EeYuT3_LnMgis7McgsPuahndL?usp=sharing',
      label: 'Colab Demo',
    },
    logo: logoSoSync,
  },
  {
    name: 'EcoTrak',
    description:
      'A greenhouse gas emission calculator estimates corporate carbon footprint based on business activities.',
    skill: 'Sustainability',
    link: {
      href: 'https://github.com/RickWangPerth/Infosys-EcoTrak-Project',
      label: 'GitHub Repo',
    },
    logo: logoEcotrack,
  },
  {
    name: 'PlantPal',
    description:
      'An IoT application that supports users to take care of their plants remotely.',
    skill: 'IoT & Cloud',
    link: {
      href: 'https://github.com/RickWangPerth/CITS5506-IoT-Plant-Watering-System',
      label: 'GitHub Repo',
    },
    logo: logoPlantPal,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to create a better world.',
}

export default function Projects() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.therick.com.au/projects" />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to create a better world."
        intro="I’ve worked on these little projects through my academic journey. Hope some of them can bring you some inspiration. Let me know if you have any questions or feedback."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <div className="flex items-center space-x-4">
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href}>{project.name}</Card.Link>
                </h2>
                <p className="relative mt-6 rounded-full bg-zinc-100/90 px-3 text-sm font-semibold text-zinc-600 ring-1 ring-zinc-900/5 backdrop-blur group-hover:text-teal-500 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                  {project.skill}
                </p>
              </div>

              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
