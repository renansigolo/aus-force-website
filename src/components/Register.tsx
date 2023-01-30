import { FormEvent, useState } from "react";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Read the form data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // You can pass formData as a fetch body directly:
    fetch("/register-interest", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formJson),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Success!");
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        form.reset();
        setLoading(false);
      });
  }

  return (
    <article>
      <hgroup>
        <h2>Get notified when we're launching.</h2>
        <h3>
          Register your email below to be one of the first ones to know when
          we're live!
        </h3>
      </hgroup>

      <form onSubmit={handleSubmit} aria-busy={loading}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          required
        />
        <button>Submit</button>
      </form>
    </article>
  );
}
