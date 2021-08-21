import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const unixTimestampToDate = (timestamp) => {
  const date = new Date(timestamp * 1000)
  // Hours part from the timestamp
  const hours = date.getHours()
  // Minutes part from the timestamp
  const minutes = `0${date.getMinutes()}`
  // Seconds part from the timestamp
  const seconds = `0${date.getSeconds()}`
  const formattedTime = `${date.toLocaleDateString('pt-BR')} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`
  return formattedTime
}

const InstaSection = ({ people, posts }) => (
  <div className='bg-white'>
    <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
      <div className='space-y-12'>
        <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
          <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>Siga-nos no Instagram</h2>
          <p className='text-xl text-gray-500'>
            💚 Amor pela sua saúde 💚 Academia 💚 Projetos de Vida 👩🏼‍⚕️ Fisioterapia 🧘‍♀ Pilates 💪🏻 Personal Trainer
          </p>
        </div>
        <ul className='zspace-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
          {posts?.edges?.map(({ node: p }) => (
            <li key={p.caption}>
              <a href='https://www.instagram.com/academiacultural/' target='_blank' className='space-y-4' rel='noreferrer'>
                <div className='aspect-w-3 aspect-h-2'>
                  {p.localFile && <GatsbyImage className='object-cover shadow-lg rounded-lg' image={p.localFile.childImageSharp.gatsbyImageData} />}
                </div>

                <div className='space-y-2'>
                  <div className='leading-6 font-medium space-y-1'>
                    <h3>{p.caption ? `${p.caption?.substr(0, 80)}...` : ''}</h3>
                    <p className='text-green-600'>{unixTimestampToDate(p.timestamp)}</p>
                  </div>
                  <ul className='flex space-x-5'>
                    <li>
                      <a href='https://www.instagram.com/academiacultural/' className='flex text-red-400 hover:text-red-500'>
                        <span className='sr-only'>Likes</span>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                          <path
                            fillRule='evenodd'
                            d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='ml-2 text-gray-500'>{p.likes}</span>
                      </a>
                    </li>
                    <li>
                      <a href='https://www.instagram.com/academiacultural/' className='flex text-blue-400 hover:text-blue-500'>
                        <span className='sr-only'>Comments</span>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                          <path
                            fillRule='evenodd'
                            d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='ml-2 text-gray-500'>{p.comments}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default InstaSection
