import Link from 'next/link'

const Nav = () => {
  const navList = [
    {name:"Membership", link:"/membership"},
    {name:"Locations", link:"/locations"},
    {name:"Support", link:"/support"}
  ]
  return (
    <header className='w-full relative flex justify-between items-center z-10 text-background  py-6 px-5 font-extralight'>
      <h1 className='font-italiana font-extrabold text-3xl'>LASBOUQ</h1>
      <ul className='flex gap-14 text-[0.85rem] tracking-[0.1rem]'>
        {navList.map((li)=>(
          <li><Link href={li.link}>{li.name}</Link></li>
        ))}
      </ul>
      <Link className='border border-background/40 rounded-[999px] px-4 py-2 font-italiana font-bold' href={"/apply"}>Apply today</Link>
      <hr className='h-[0.05rem] w-full bg-background absolute left-0 bottom-0'/>
    </header>
  )
}

export default Nav
