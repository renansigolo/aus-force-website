import { useState } from "react";
import { Form } from "./Form";

export default function RegisterForm() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="relative sm:py-16">
        <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-indigo-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-indigo-500 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-indigo-700 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              {success ? (
                <Heading
                  title="Thank you for your registration."
                  description="We'll let you know know when we're ready to go!"
                />
              ) : (
                <>
                  <Heading
                    title="Get notified when we&rsquo;re launching."
                    description="Register your email below to be one of the first ones to know when we're live!"
                  />
                  <Form setSuccess={setSuccess} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type HeadingProps = {
  title: string;
  description: string;
};
function Heading({ title, description }: HeadingProps) {
  return (
    <div className="sm:text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-200">
        {description}
      </p>
    </div>
  );
}
