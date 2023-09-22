

const Navbar = () => {
  return (
    <div className="h-[48px] w-full bg-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]  ">
    <ul className="flex justify-center space-x-10 items-center text-[#313338] font-semibold text-xl p-3 flex-wrap">
      <li><a className="text-xl font-extrabold" >Home</a></li>
      <li><a className="text-xl font-extrabold">Works</a></li>
      <li><a className="text-xl font-extrabold">About</a></li>
      <li><a className="text-xl font-extrabold">Contact</a></li>
    </ul>
    <div className="flex flex-col ml-5 -mt-11">
        <h1 className="font-extrabold text-3xl font-sans">Slayer.dev</h1>
    </div>
</div>
  )
}

export default Navbar