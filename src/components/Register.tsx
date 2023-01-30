import { FormEvent, useState } from "react";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
    <article>
      {success ? (
        <h4 className="m-0">
          Thank you!
          <br />
          Your contact has been successfully saved!
        </h4>
      ) : (
        <>
          <hgroup>
            <h2>Get notified when we're launching.</h2>
            <h3>
              Register your email below to be one of the first ones to know when
              we're live!
            </h3>
          </hgroup>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              disabled={loading}
              required
            />
            <button disabled={loading}>
              {loading ? <span aria-busy={loading}>Sending...</span> : "Submit"}
            </button>
          </form>
        </>
      )}
    </article>
  );
}
