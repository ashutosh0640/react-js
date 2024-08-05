
function Footer() {
  return (
    <footer className=" py-2 text-center bg-slate-800 text-white">
        <div className="container">
        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer