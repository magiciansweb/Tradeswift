import Link from 'next/link';
import {FcGoogle} from 'react-icons/fc'
import banner from '@/assets/5035121.jpg'
import Image from 'next/image';

// change
const SinginPage = () => {
    return (
        <div className="container mx-auto px-5 my-7 min-h-screen flex items-center justify-center lg:flex-row flex-col gap-8">
        <div className="">
          <h1 className="text-5xl font-semibold ">
            Hey there! <br /> Welcome back
          </h1>
          <Image src={banner} alt="banner" width={400} height={400} />
        </div>
        <div style={{boxShadow: "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px"}}  className="flex-1 max-w-sm px-7 py-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-5">Sign In</h1>
          <form>
            <label className="font-bold " htmlFor="email">
              Your Email
            </label>{" "}
            <br />
            <input
              type="email"
              required
              name="email"
              className="py-2 px-3 mb-3 mt-1 w-full rounded-sm border-2 border-black"
              placeholder="Enter email here..."
            />
            <label className="font-bold " htmlFor="email">
              Passwordd
            </label>{" "}
            <br />
            <input
              type="password"
              name="password"
              required
              className="py-2 px-3 mt-1 w-full rounded-sm border-2 border-black"
              placeholder="Enter Password here..."
            />
            <input
              type="submit"
              value="Sign In"
              className="w-full py-3 rounded bg-[#344563] font-medium mt-5 text-white cursor-pointer text-lg"
            />
          </form>
          <p className="my-2 text-center font-medium">or</p>
          <button className='w-full bg-[f5f7fc] py-3 rounded-md border-2 flex items-center justify-center gap-2 font-medium text-lg border-black'><span className='text-2xl'><FcGoogle/></span><span>Continue with Google</span></button>
          <p className="font-bold mt-1">
            Dont have any Account?
            <Link href="/signup" className="text-blue-600">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    );
};

export default SinginPage;