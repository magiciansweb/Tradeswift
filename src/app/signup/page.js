import Link from 'next/link';
import {FcGoogle} from 'react-icons/fc'
import banner from '@/assets/9520.jpg'
import Image from 'next/image';


const SingUpPage = () => {
    return (
        <div className="container mx-auto min-h-screen px-5 my-5 flex items-center justify-center lg:flex-row flex-col gap-8">
        <div className="">
          <h1 className="text-5xl font-semibold ">
            Trading With In <br />TRADESWIFT
          </h1>
          <Image src={banner} alt="banner" width={350} height={350} />
        </div>
        <div style={{boxShadow: "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px"}}  className="flex-1 max-w-sm px-7 py-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-5">Sign Up Now!</h1>
          <form>
            <label className="font-bold " htmlFor="email">
              Your Name
            </label>{" "}
            <br />
            <input
              type="text"
              required
              name="name"
              className="py-1.5 px-3 mb-3 mt-1 w-full rounded-sm border-2 border-black"
              placeholder="Enter Your Name"
            />
            <label className="font-bold " htmlFor="email">
              Your Email
            </label>{" "}
            <br />
            <input
              type="email"
              required
              name="email"
              className="py-1.5 px-3 mb-3 mt-1 w-full rounded-sm border-2 border-black"
              placeholder="Enter email here..."
            />
            <label className="font-bold " htmlFor="email">
              Password
            </label>{" "}
            <br />
            <input
              type="password"
              name="password"
              required
              className="py-1.5 px-3 mt-1 w-full rounded-sm border-2 border-black"
              placeholder="Enter Password here..."
            />
            <input
              type="submit"
              value="Sign Up"
              className="w-full py-2.5 rounded bg-[#344563] font-medium mt-5 text-white cursor-pointer text-base"
            />
          </form>
          <div className="divider">OR</div>
          <button className='w-full bg-[f5f7fc] py-2.5 rounded-md border-2 flex items-center justify-center gap-2 font-medium border-black'><span className='text-2xl'><FcGoogle/></span><span>Continue with Google</span></button>
          <p className="font-bold mt-1">
            Already have an Account?
            <Link href="/signin" className="text-blue-600">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    );
};

export default SingUpPage;