import { createSignal } from "solid-js";

/** Helper function to join classs */
export function cn(...classes: string[] | any[]) {
  return classes.filter(Boolean).join(" ");
}

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];

const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "#",
    price: { monthly: "$100", annually: "$1000" },
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 owener's accounts",
      "Up to 10 client's accounts",
      "Basic support",
    ],
    mostPopular: false,
  },
  {
    name: "Freelancer",
    id: "tier-freelancer",
    href: "#",
    price: { monthly: "$150", annually: "$1500" },
    description: "The essentials to provide your best work for clients.",
    features: [
      "10 owener's accounts",
      "Up to 20 client's accounts",
      "Basic support",
      "48-hour support response time",
    ],
    mostPopular: false,
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    price: { monthly: "$200", annually: "$2000" },
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "20 owener's accounts",
      "Up to 40 client's accounts",
      "Advanced support",
      "24-hour support response time",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: { monthly: "$400", annually: "$4000" } as any,
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited owener's accounts",
      "Unlimited client's accounts",
      "Advanced support",
      "1-hour, dedicated support response time",
      "Custom reporting tools",
    ],
    mostPopular: false,
  },
];

const notificationMethods = [
  { id: "email", title: "Email" },
  { id: "sms", title: "Phone (SMS)" },
  { id: "push", title: "Push notification" },
];

export function Pricing() {
  const [frequency, setFrequency] = createSignal(frequencies[0]);

  return (
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Pricing
          </h2>
          <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose an affordable plan that is packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div class="mt-16 flex justify-center">
          <div>
            <label class="text-base font-medium text-gray-900">
              Notifications
            </label>
            <p class="text-sm leading-5 text-gray-500">
              How do you prefer to receive notifications?
            </p>
            <fieldset class="mt-4">
              <legend class="sr-only">Notification method</legend>
              <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                {notificationMethods.map((notificationMethod) => (
                  <div class="flex items-center">
                    <input
                      id={notificationMethod.id}
                      name="notification-method"
                      type="radio"
                      checked={notificationMethod.id === "email"}
                      class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      for={notificationMethod.id}
                      class="ml-3 block text-sm font-medium text-gray-700"
                    >
                      {notificationMethod.title}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          {/* <RadioGroup
            value={frequency}
            onChange={setFrequency}
            class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
          >
            <RadioGroup.Label class="sr-only">
              Payment frequency
            </RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                class={({ checked }) =>
                  classs(
                    checked ? "bg-indigo-600 text-white" : "text-gray-500",
                    "cursor-pointer rounded-full py-1 px-2.5"
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup> */}
        </div>
        <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            <div
              class={cn(
                tier.mostPopular
                  ? "ring-2 ring-indigo-600"
                  : "ring-1 ring-gray-200",
                "rounded-3xl p-8"
              )}
            >
              <h3
                id={tier.id}
                class={cn(
                  tier.mostPopular ? "text-indigo-600" : "text-gray-900",
                  "text-lg font-semibold leading-8"
                )}
              >
                {tier.name}
              </h3>
              <p class="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p class="mt-6 flex items-baseline gap-x-1">
                <span class="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price[String(frequency()?.value)]}
                </span>
                <span class="text-sm font-semibold leading-6 text-gray-600">
                  {frequency()?.priceSuffix}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                class={cn(
                  tier.mostPopular
                    ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                    : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                  "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                Buy plan
              </a>
              <ul
                role="list"
                class="mt-8 space-y-3 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li class="flex gap-x-3">
                    {/* <CheckIcon
                      class="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    /> */}
                    ✔️ {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
