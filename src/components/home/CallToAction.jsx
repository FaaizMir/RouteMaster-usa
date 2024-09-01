import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
              Your team of Experts in Transportation and Warehousing
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We are committed to delivering exceptional service and optimizing seamless deliveries of products through continuous technological innovation. It’s natural for disruptions to arise in today’s world, and you can count on our team to adapt, pivot, and find creative solutions to ensure products get delivered on time every time.
            </p>
            <div>
            <Link to={'/privacy-and-policy'} className='inline-block mt-6 px-4 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full border-white border-2'>
              View Privacy and Policy
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CallToAction
