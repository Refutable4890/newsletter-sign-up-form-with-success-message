import { useLocation } from "react-router-dom";
import WhiteRoundedCard from "../components/WhiteRoundedCard";

export default function FormSubmitted() {
  const { state } = useLocation();

  return (
    <WhiteRoundedCard>
      <div className="flex min-h-[inherit] flex-col justify-between px-6 py-8 md:max-w-[504px]">
        <div>
          <img
            src="/images/icon-success.svg"
            className="mb-6 mt-[calc(100vh/8)] md:mt-[unset]"
          />
          <h1 className="text-4xl font-bold md:text-5xl">
            Thanks for subscribing!
          </h1>

          <p className="my-6">
            A confirmation email has been sent to{' '}
            <span className="font-bold">{state.email}</span>. Please open it and
            click the button inside to confirm your subscription.
          </p>
        </div>

        <button className="mt-6 w-full rounded-lg bg-dark-slate-grey p-4 text-white hover:bg-gradient-to-r hover:from-[#ff5379] hover:to-tomato hover:shadow-xl hover:shadow-[#ffc8c5]">
          Dismiss message
        </button>
      </div>
    </WhiteRoundedCard>
  );
}
