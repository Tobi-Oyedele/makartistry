interface Props {
  email: string;
  setEmail: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const FooterNewsletter = ({ email, setEmail, onSubmit }: Props) => {
  return (
    <div className="w-full lg:w-80 mx-0 my-2">
      <label htmlFor="subscribe" className="sr-only">
        Subscribe
      </label>

      <div className="flex">
        <input
          id="subscribe"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="block w-full px-3 py-2 text-sm text-gray-100 border-b border-gray-100 bg-eerie-black bg-opacity-10 focus:ring-0"
        />
        <button
          onClick={onSubmit}
          className="bg-secondary text-gray-900 px-4 py-2 text-sm"
        >
          Subscribe
        </button>
      </div>

      <p className="mt-2 text-xs text-gray-400">
        We&apos;ll never share your details. Read our{" "}
        <a href="/privacy-policy" className="text-secondary hover:underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default FooterNewsletter;
