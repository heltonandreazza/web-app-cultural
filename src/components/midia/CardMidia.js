import React from "react"

const CardMidia = ({name, img, href}) => {

  return (
    
    <div className='mx-8 p-1 border-solid border-4 rounded-2xl flex items-center mt-16 md:mt-28 shadow-2xl mb-6 md:mb-0'>
      <a className='' href={href}>
        <div className='w-72  md:w-96 md:h-24 flex flex-row items-end p-4 rounded-2xl justify-center mx-auto '>
          <img src={img} className='absolute mb-12 md:mb-16 w-16' />
          <div className='flex justify-center'>
            <p className='font-bold font-roboto text-3xl md:text-4xl mb-2 '>{name}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default CardMidia