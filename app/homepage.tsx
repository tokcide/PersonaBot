import Image from 'next/image'
export default function Homepage() {
  const navbarHeight = 4;
  const availableHeight = `calc(100vh - ${navbarHeight}rem)`;
  return (
    <div className='relative flex flex-col md:flex-row' style={{ height: availableHeight }}>
      <div className='md:bg-gradient-to-r from-cyan-500 to-blue-500 absolute left-0 md:h-full md:w-[50%] items-center flex justify-center h-[50%] w-full bg-gradient-to-b from-cyan-500 to-blue-500'>
        <div className="flex items-center justify-center flex-col">
        <Image src="/logo.png" alt="Logo" width="150" height="150" className='rounded-full'/>
        <p className="text-[7rem] font-mono">
        Persona
        </p>       
        <p className="text-[7rem] font-mono">
        Bot
        </p>
        </div>
      </div>
      <div className='md:bg-gradient-to-r from-blue-500 to-indigo-500 absolute right-0 md:h-full md:w-[50%] h-[50%] w-full bottom-0 bg-gradient-to-b from-blue-500 to-indigo-500'>
      </div>
  </div>
  )
}
