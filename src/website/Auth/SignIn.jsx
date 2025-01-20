import { brainwave } from "../../assets";
import { BackgroundCircles } from "../../components/design/Header";

const SignIn = () => {
  return (
    <>
      <div className="container relative flex flex-col items-center justify-center px-6 py-14 mx-auto md:h-screen lg:py-0">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] ">
          <a className="block w-[12rem] xl:mr-8" href="#hero">
            <img src={brainwave} width={190} height={40} alt="Brainwave" />
          </a>
        </div>
        <div className="relative p-0.5 rounded-lg bg-conic-gradient">
          <div className="relative w-full z-3 bg-n-7 rounded-lg shadow  sm:max-w-md xl:p-0 ">
            <div className="p-6  md:space-y-6 sm:p-8">
              <form className="space-y-9 md:space-y-6  " action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-n-5   rounded-lg  w-full p-2.5  text-n-1  focus:outline focus:outline-n-13"
                    placeholder="name@emil.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-n-5   rounded-lg  w-full p-2.5  text-n-1  focus:outline focus:outline-n-13"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    &nbsp; Forgot password?
                  </a>
                </div>

                <div className="p-0.5 rounded-lg   bg-conic-gradient animate-spinGradient">
                  <button
                    type="submit"
                    className="w-full bg-n-7  rounded-lg p-3 text-n-1  "
                  >
                    Sign in
                  </button>
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account?
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    &nbsp;Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <BackgroundCircles />
      </div>
    </>
  );
};
export default SignIn;
