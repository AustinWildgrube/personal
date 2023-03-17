import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'Github', href: 'https://github.com/AustinWildgrube' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/austin-wildgrube-967071b7/' },
];

export default function Navigation() {
  return (
    <header>
      <nav className="container fixed top-0 right-0 left-0 z-50 mx-auto flex items-center justify-between p-6 backdrop-blur-lg lg:px-24">
        <Link href="/" className="-m-1.5 p-1.5" target="_blank">
          <Image src="/signature.png" height={200} width={200} alt="Austin Wildgrube logo" />
        </Link>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map(item => (
            <Link className="text-sm leading-6 text-slate-700" href={item.href} target="_blank" key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
