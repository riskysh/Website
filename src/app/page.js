import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mt-16">
      <span className="text-5xl font-semibold">Risky</span>
      <div className="flex flex-col gap-4 mt-12 font-geist-mono font-medium">
        <p>Hi! I am Risky, a creative web developer.</p>
        <div>
          <p>
            Specialized in <TextLink href="https://react.dev">React</TextLink>,{" "}
            <TextLink href="https://nextjs.org">NextJS</TextLink> and{" "}
            <TextLink href="https://kit.svelte.dev">SvelteKit</TextLink> with
            strong knowledge in Javascript.
          </p>
          <p>
            I am also decently experienced with{" "}
            <TextLink href="https://python.org">Python</TextLink> and in
            building UIs using{" "}
            <TextLink href="https://ui.shadcn.com">ShadCN</TextLink>.
          </p>
        </div>
        <p>
          Apart from this I play with some technologies like{" "}
          <TextLink href="https://rust-lang.org">Rust</TextLink> and{" "}
          <TextLink href="https://pocketbase.io">PocketBase</TextLink>.
        </p>
      </div>
      <div className="flex gap-3 mt-10 font-medium">
        <TextLink href="https://github.com/riskysh">Github</TextLink>
        <TextLink href="https://discord.com/users/1260949968751956008">
          Discord
        </TextLink>
        <TextLink href="mailto:notriskysh@gmail.com">Email</TextLink>
      </div>
    </div>
  );
}

const TextLink = ({ href, children }) => (
  <Link
    href={href}
    className="underline underline-offset-4 decoration-neutral-500 hover:decoration-white duration-700 font-geist-mono"
    target="_blank"
  >
    {children}
  </Link>
);
