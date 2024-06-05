import Link from 'next/link';
import clsx from 'clsx';

interface ButtonLink {
  type: string;
  path: string;
}

interface ButtonProps {
  label: string;
  style: 'primary' | 'secondary';
  link?: ButtonLink;
}

export const Button = ({ label, style, link }: ButtonProps) => {
  const baseClasses =
    'inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors';
  const primaryClasses = 'bg-white text-black';
  const secondaryClasses = 'bg-gray-900 text-white';

  const buttonClasses = clsx(baseClasses, {
    [primaryClasses]: style === 'primary',
    [secondaryClasses]: style === 'secondary',
  });

  return (
    <Link href={link?.path || '#'} className={buttonClasses} prefetch={false}>
      {label}
    </Link>
  );
};
