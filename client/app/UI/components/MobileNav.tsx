import { navList } from "./Navbar";
import Link from "next/link";
import { styles } from "./Button";

const MobileNav = () => {
  return (
    <nav data-testid="mobile-nav" className="w-full h-fit bg-background">
      <ul className="flex flex-col items-center gap-5 py-5 text-[0.85rem] tracking-[0.1rem] text-foreground">
        {navList.map((li) => (
          <li key={li.name}>
            <Link href={li.link}>{li.name}</Link>
          </li>
        ))}
        <Link
          data-test-id="membership-cta-mobile"
          className={`group relative ${styles}`}
          href={"/apply"}
        >
          <p className={`relative text-black`}>Apply for membership</p>
        </Link>
      </ul>
    </nav>
  );
};

export default MobileNav;
