function Footer() {
  return (
    <div className="bg-black text-white">
      <div className=" grid grid-cols-4 gap-10 p-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl">NEXORA</h3>
          <p className="text-zinc-300">
            Building digital experiences that move businesses forward through
            technology, design, and innovation.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="bg-gray-800 px-4 py-2 rounded-xl">Twiter</span>
            <span className="bg-gray-800 px-4 py-2 rounded-xl">Linkdln</span>
            <span className="bg-gray-800 px-4 py-2 rounded-xl">Instagram</span>
            <span className="bg-gray-800 px-4 py-2 rounded-xl">Tiktok</span>
          </div>
        </div>
        <div className="flex flex-wrap flex-col text-zinc-300 gap-4">
          <h3 className="text-xl text-white">COMPANY</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Our Teams</p>
          <p>Blog</p>
        </div>
        <div className="flex flex-wrap flex-col text-zinc-300 gap-4">
          <h3 className="text-xl text-white">SERVICES</h3>
          <p>Web Development</p>
          <p>Mobile Development</p>
          <p>UI/UX Design</p>
          <p>Cloud Solution</p>
          <p>Digital Strategy</p>
        </div>
        <div className="flex flex-wrap flex-col text-zinc-300 gap-4">
          <h3 className="text-xl text-white">Contact</h3>
          <p>hello@nexora.io</p>
          <p>Sanfrancisco,CA</p>
          <p>+1 234 567 890</p>
        </div>
      </div>
      <hr className=" border-gray-800 py-4 " />
      <div className="pt-2 pb-10 px-10 flex justify-between text-zinc-500">
        <div>
          <p> &copy; {new Date().getFullYear()}NEXORA. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
