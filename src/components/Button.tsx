import { Link, Image } from '@chakra-ui/react';

type Props = {
  href: string;
  children: string;
};
export const Button = ({ href, children }: Props) => {
  return (
    <Link
      justifyContent={'space-between'}
      display={'flex'}
      border={'1px solid var(--chakra-colors-yellow-400)'}
      borderRadius={'8px'}
      href={href}
      paddingBlock={'8px'}
      paddingInline={'16px'}
      suppressHydrationWarning
    >
      {children}
      <Image alt="" src="/arrowRight.svg" />
    </Link>
  );
};
