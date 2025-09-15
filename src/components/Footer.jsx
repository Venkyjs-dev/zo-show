function Footer() {
  return (
    <div className="bg-blue-950 text-white p-4 lg:px-[5%] pt-[5%] relative">
      <div className="flex-col lg:flex flex-row justify-between">
        <div className="w-full lg:w-[45%]">
          <h1 className="text-5xl font-bold my-2">
            Let's get your brand to the big screens !
          </h1>
          <p className="text-gray-400 text-[18px] my-2">
            To lead your brand with India's premier Digital Screen Network? Get
            in touch with our team of experts to start your urban advertising
            journey.
          </p>
          <div>hello</div>
        </div>
        <div className="w-[100%] lg:w-[50%]">
          <form className=" my-4">
            <div className="flex">
              <div className="my-2 w-[50%]">
                <label htmlFor="name">Full Name*</label>
                <br />
                <input
                  className="bg-blue-500 text-block p-2 rounded w-[100%]"
                  id="name"
                  type="text"
                  placeholder="eg. Oliver Sharma"
                />
              </div>
              <div className="my-2 mx-4 w-[50%]">
                <label htmlFor="email">Email*</label>
                <br />
                <input
                  className="bg-blue-500 text-block p-2 rounded w-[100%]"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex">
              <div className="my-2 w-[50%]">
                <label htmlFor="number">Phone Number*</label>
                <br />
                <input
                  className="bg-blue-500 text-block p-2 rounded w-[100%]"
                  id="number"
                  type="number"
                  placeholder="eg. 9898989898"
                />
              </div>
              <div className="my-2 mx-4 w-[50%]">
                <label htmlFor="city">City*</label>
                <br />
                <input
                  className="bg-blue-500 text-block p-2 rounded w-[100%]"
                  id="city"
                  placeholder="eg. Mumbai"
                />
              </div>
            </div>
            <div className="my-2 ">
              <label htmlFor="features">What describes you best?*</label>
              <br />
              <select
                className="bg-blue-500 text-block p-2 rounded w-[100%]"
                id="features"
              >
                <option>--- Select ---</option>
                <option>Brand</option>
                <option>Agency</option>
                <option>Others</option>
              </select>
            </div>
            <div className="my-2 w-[100%]">
              <label htmlFor="comments">Comments*</label>
              <br />
              <textarea
                className="bg-blue-500 text-block p-2 rounded w-[100%]"
                id="comments"
              ></textarea>
            </div>
            <div>
              <button className="text-white bg-blue-400 px-4 py-2 w-[5rem] rounded font-bold">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="text-gray-400 my-4">
        <div className="flex flex-wrap lg:justify-between ">
          <div>
            <h1 className="font-bold text-2xl text-white">zo-show</h1>
            <p>Your Digital Screen Network partner</p>
          </div>
          <ul className="font-bold my-2 lg:my-0">
            <li>Home</li>
            <li>About us</li>
            <li>Our Products</li>
          </ul>
          <ul className="font-bold my-2 mx-2 lg:my-0 mx-0">
            <li>Career</li>
            <li>Culture</li>
            <li>Contact Us</li>
          </ul>
          <div>
            <h1 className="font-bold text-2xl text-white">
              Sign Up for Our Newsletters
            </h1>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-[1px] border-white my-2 rounded p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
