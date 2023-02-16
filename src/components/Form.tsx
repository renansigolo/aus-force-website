import { createSignal, Show } from "solid-js";

type FormProps = {
  setSuccess: (success: boolean) => void;
};

export function Form({ setSuccess }: FormProps) {
  const [loading, setLoading] = createSignal(false);
  const [email, setEmail] = createSignal("");

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    setLoading(true);

    // Read the form data

    const formData = { email: email() };

    await fetch(`${import.meta.env.PUBLIC_API_URL}/saveRegistration`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
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
    <form onSubmit={handleSubmit} class="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
      <div class="min-w-0 flex-1">
        <label for="email" class="sr-only">
          Email address
        </label>
        <input
          required
          disabled={loading()}
          class="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email()}
          onInput={(e) => setEmail(e.currentTarget.value)}
        />
      </div>

      <div class="mt-4 sm:mt-0 sm:ml-3">
        <button
          type="submit"
          disabled={loading()}
          class="block w-full rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
        >
          <Show when={loading()} fallback="Notify Me">
            <span aria-busy={loading()}>Sending...</span>
          </Show>
        </button>
      </div>
    </form>
  );
}
