import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
  label: "string";
  showBackArrow?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="border-b-[0.5px] border-slate-600 p-5">
      <div className=" flex flex-row items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            color="gray"
            size={20}
            className="cursor-pointer transition hover:opacity-70"
          />
        )}
        <h1 className="font-semibold text-neutral-300">{label}</h1>
      </div>
    </div>
  );
};
