import { useNavigate } from "react-router-dom";
import WhiteRoundedCard from "../components/WhiteRoundedCard";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  email: string;
}

export default function SignUpForm() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    navigate("/form-submitted", { state: data });
  };

  return (
    <WhiteRoundedCard>
      <div className="flex min-h-[inherit] flex-col md:flex-row">
        <img
          className="h-[calc(100vh/3)] w-full rounded-b-xl object-cover md:order-last md:h-[unset] md:w-1/2 md:rounded-2xl"
          src="/images/illustration-sign-up-mobile.svg"
        />
        <div className="flex flex-grow flex-col justify-between px-6 py-8 md:w-1/2">
          <div>
            <h1 className="text-4xl font-bold md:text-5xl">Stay updated!</h1>
            <p className="my-6">
              Join 60,000+ product managers receiving monthly updates on:
            </p>

            <ul>
              <li className="my-2 flex gap-4">
                <div className="shrink-0">
                  <img src="/images/icon-list.svg" />
                </div>
                Product discovery and building what matters
              </li>
              <li className="my-2 flex gap-4">
                <div className="shrink-0">
                  <img src="/images/icon-list.svg" />
                </div>
                Measuring to ensure updates are a success
              </li>
              <li className="my-2 flex gap-4">
                <div className="shrink-0">
                  <img src="/images/icon-list.svg" />
                </div>
                And much more!
              </li>
            </ul>
          </div>

          <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2 flex justify-between text-sm font-bold">
              <h2>Email address</h2>
              <span className="text-tomato">{errors.email?.message}</span>
            </div>
            <input
              {...register("email", {
                required: "Please enter your email address",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please enter a valid email address",
                },
              })}
              className={
                "w-full rounded-lg border p-4  hover:border-dark-slate-grey " +
                (errors.email
                  ? "border-tomato bg-[#ffe8e6] hover:border-tomato"
                  : "")
              }
              placeholder="email@company.com"
            />

            <button className="mt-6 w-full rounded-lg bg-dark-slate-grey p-4 text-white hover:bg-gradient-to-r hover:from-[#ff5379] hover:to-tomato hover:shadow-xl hover:shadow-[#ffc8c5]">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
    </WhiteRoundedCard>
  );
}
