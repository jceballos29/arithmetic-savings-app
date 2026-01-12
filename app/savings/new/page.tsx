import { ArrowLeftIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CreateNewSavingPage() {
  return (
    <div className="relative flex flex-col h- w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <Button size="icon-lg" aria-label="Back" variant="outline" className="rounded-full">
          <Link href="/" className="w-full h-full flex items-center justify-center">
            <ArrowLeftIcon className="size-5" />
          </Link>
        </Button>
        <h2 className="scroll-m-20 text-xl font-semibold">Nuevo ahorro</h2>
        <Button size="icon-lg" aria-label="Settings" variant="ghost" className="rounded-full">
            <MenuIcon className="size-5" />
        </Button>
      </div>
    </div>
  );
}