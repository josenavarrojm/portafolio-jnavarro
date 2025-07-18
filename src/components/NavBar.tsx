import ThemeToggle from "@/components/ThemeToggle";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import SocialIcons from "@/components/SocialIcon";

export default function NavBar() {
  return (
    <div className="flex flex-row md:justify-between justify-between items-center pt-6 pb-4 px-10 space-x-4 self-end w-full animate-fade-down animate-ease-out animate-duration-[1100ms] z-[9999]">
      <div className="flex flex-row justify-center items-center self-end">
        <LocaleSwitcher />
        <ThemeToggle />
      </div>
      <SocialIcons />
      {/* <div className="flex flex-row h-8 items-center justify-center">
          <MapPin size={20} />
          <h2 className=" ml-0.5">Colombia</h2>
        </div> */}
    </div>
  );
}
