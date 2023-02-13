import { useState, type FormEvent } from "react";

type FormProps = {
  setSuccess: (success: boolean) => void;
};
export function Form({ setSuccess }: FormProps) {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Read the form data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.PUBLIC_API_URL}/saveRegistration`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formJson),
    })
      .then((res) => {
        if (res.ok) {
          form.reset();
          setSuccess(true);
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 sm:mx-auto sm:flex sm:max-w-lg"
    >
      <div className="min-w-0 flex-1">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          required
          disabled={loading}
          className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
      </div>

      <div className="mt-4 sm:mt-0 sm:ml-3">
        <button
          type="submit"
          disabled={loading}
          className="block w-full rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
        >
          {loading ? <span aria-busy={loading}>Sending...</span> : "Notify me"}
        </button>
      </div>
    </form>
  );
}
