interface IProps {
  href: string;
  children: React.ReactNode;
}

export default function ExternalLink({ href, children }: IProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4 hover:no-underline"
    >
      {children}
    </a>
  );
}
