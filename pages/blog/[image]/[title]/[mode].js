const Blogs = ({ title, image, mode }) => {
  return (
    <div className={`flex flex-row px-10 items-center justify-center h-screen w-screen ${mode === 'true' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="px-10 py-0 m-0 w-4/5 h-4/5 flex flex-col">
        <h5 className="text-2xl text-gray-500">Checkout this article</h5>
        <h1 className={`mt-2 text-4xl sm:text-6xl leading-none font-extrabold tracking-tight ${mode === 'true' ? 'text-white' : 'text-gray-900'}`}>{title}</h1>
        <div className="flex flex-row items-start mt-auto">
          <img src="https://rishi.app/static/favicon-image.jpg" className="rounded-full" style={{ width: '120px', height: '120px' }} />
          <div className="ml-5 flex flex-col">
            <h6 className={`font-bold text-4xl ${mode === 'true' ? 'text-gray-300' : 'text-gray-500'}`}>Rishi Raj Jain</h6>
            <p className="mt-3 text-2xl text-gray-500">Wanna take everyone along in this web development journey by learning and giving back async</p>
          </div>
        </div>
      </div>
      <div className="px-10 py-0 m-0 w-2/5 h-4/5">
        <img src={image} className="object-cover h-full" />
      </div>
    </div>
  )
}

export default Blogs

export async function getServerSideProps({ params }) {
  let {
    title = 'Sample Blog',
    image = 'https://images.unsplash.com/photo-1579123521334-44e68095cd7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    mode = 'false',
  } = params
  return {
    props: {
      title,
      image,
      mode,
    },
  }
}
