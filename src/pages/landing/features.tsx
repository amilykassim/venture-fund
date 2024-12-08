export default function Features() {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Simple image"
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold text-[#2B3674] mb-4">01</h2>
              <h3 className="text-2xl font-bold text-[#2B3674] mb-4">
                Access to capital
              </h3>
              <p className="text-[#A3AED0]">
              There are nearly 10,000 businesses in Rwanda that need capital to grow. 
              A great idea shouldn’t fail because they can’t raise the money to develop into a profitable business.
              </p>
            </div>
          </div>
  
          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.pexels.com/photos/7414218/pexels-photo-7414218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Secure Platform"
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold text-[#2B3674] mb-4">02</h2>
              <h3 className="text-2xl font-bold text-[#2B3674] mb-4">
                Finance is Outdated
              </h3>
              <p className="text-[#A3AED0]">
              Existing financing options, such as private equity and venture capital, 
              can’t fund all of these businesses. That’s where we come in.
              </p>
            </div>
          </div>


        {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.pexels.com/photos/7414284/pexels-photo-7414284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Secure Platform"
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold text-[#2B3674] mb-4">03</h2>
              <h3 className="text-2xl font-bold text-[#2B3674] mb-4">
                Democratizing Funding
              </h3>
              <p className="text-[#A3AED0]">
                We believe that any driven entrepreneur with a great idea should be able to raise capital. 
                We’ve built a platform where they can pitch directly to the crowd.
              </p>
            </div>
          </div>

        </div>
      </section>
    );
  }
  