import VerifyEmailForm from "@/components/(auth)/verifyEmail/VerifyEmailForm";

const VerifyEmailPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white ">
      <div className="flex justify-center items-center md:max-w-[501px] md:h-[350px]  mx-auto border-2 bg-[#b9e3fc]  md:px-12 px-6 py-5 rounded-[40px] border-[#33b1fc] ">
        <div>
          <h2 className="text-2xl font-semibold  text-center mb-6">
            Verify Email
          </h2>
          <VerifyEmailForm></VerifyEmailForm>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
