import Link from "next/link";

interface LinkItem {
  label: string;
  href: string;
}

const FooterLinkGroup = ({
  title,
  links,
}: {
  title: string;
  links: LinkItem[];
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-champagne uppercase">{title}</h2>
      <ul className="flex flex-col gap-1.5 text-secondary text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkGroup;
