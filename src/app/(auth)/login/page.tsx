import LoginForm from "@/components/(auth)/login/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex justify-center items-center md:max-w-[581px] md:h-[500px]  mx-auto border-2 border-[#33b1fc] md:px-12 px-6 py-5 rounded-[40px] bg-[#b9e3fc] ">
        <div>
          <div className="mb-6 text-center  space-y-5">
            <h2 className="text-2xl  font-semibold  ">Login to Account</h2>
            <p className="mt-6">
              Please enter your email and password to continue
            </p>
          </div>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
