import { FEATURES } from '@/constants'
import Image from 'next/image'

interface FeatureProps {
  title: string,
  icon: string,
  variant: String,
  description: string
}

const Features = () => {
  return (
    <section className="border border-red-500 flex-col flexCenter bg-norepeat bg-feature-bg overflow-hidden bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className='feature-phone'
          />
        </div>

        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className="relative">
            <Image
              src="/camp.svg"
              alt='camp'
              width={50}
              height={50}  
              className='absolute left-[-5px] top-[-32px] w-10 lg:w-[50px]'
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20'>
            {FEATURES.map((feature)=> (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </ul>

        </div>
      </div>

    </section>
  )
}

const FeatureItem = ({title, description, icon, variant}:FeatureProps) => {

  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className={`rounded-full p-4 lg:p-7 bg-green-50`}>
        <Image
          src={icon}
          alt={title}
          width={28}
          height={28}
        />
      </div>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalise'>{title}</h2>
      <p className='regular-16 mt-5 bg-white/80 text-gray-30'>{description}</p>
    </li>
  )
}

export default Features