import ForgetPasswordForm from "@/components/(auth)/forgetPassword/ForgetPasswordForm";

const ForgetPasswordPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white ">
      <div className="flex justify-center items-center md:max-w-[581px] md:h-[500px]  mx-auto border-2 border-[#33b1fc] md:px-12 px-6 py-5 rounded-[40px] bg-[#b9e3fc]  ">
        <div>
          <h2 className="text-2xl font-semibold text-center mb-6">
            Forgot Password
          </h2>
          <ForgetPasswordForm></ForgetPasswordForm>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
