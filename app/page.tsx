import { FormattedDate } from "@/components/formatted-date";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {

  const user = {
    firstName: "Juan",
    lastName: "Ceballos",
    username: "jacu29",
    avatar: "/images/user.png"
  }

  return (
    // <<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <div className="relative flex flex-col h- w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Avatar className="size-12">
            <AvatarImage src={user.avatar} alt="User Avatar" />
            <AvatarFallback>{user.firstName.charAt(0)}{user.lastName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5 items-start leading-none">
            <h2 className="font-semibold">Hola, {user.firstName} {user.lastName}</h2>
            <p className="text-xs text-muted-foreground leading-none">
              <FormattedDate date={new Date()} />
            </p>
          </div>
        </div>
        <Button size="icon-lg" aria-label="Settings" variant="ghost" className="rounded-full">
          <MenuIcon className="size-5" />
        </Button>
      </div>
      <Card className="w-full bg-zinc-50 border-2 border-b-4 border-zinc-500 mb-6">
        <CardContent>
          <h3 className="scroll-m-20 font-semibold pb-2 text-muted-foreground">
            Total ahorrado
          </h3>
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">$ 40.000,00</h2>
          <Separator className="my-2" />
          <div className="flex justify-between text-xs text-muted-foreground font-medium ">
            <span className="capitalize">viajes</span>
            <span>$ 15.000,00</span>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground font-medium ">
            <span className="capitalize">comida</span>
            <span>$ 10.000,00</span>
          </div>
        </CardContent>
      </Card>
      <div className="flex items-center justify-between mb-4">
        <h2 className="scroll-m-20 text-xl font-semibold">Tus ahorros</h2>
        <Badge
          className="h-6 min-w-7 rounded-full px-1 font-mono tabular-nums"
          variant="default"
        >
          20
        </Badge>
      </div>
      <div className="grow space-y-2">
        <Card className="w-full bg-zinc-50 border-2 border-zinc-500 shadow-none">
          <CardHeader className="gap-0">
            <CardTitle className="text-lg font-semibold tracking-tighter">Viajes</CardTitle>
            <CardDescription className="flex items-center justify-between text-sm text-muted-foreground tracking-tighter">
              <span className="uppercase">Aritmético</span> <strong>+ $1000 / día</strong>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={40} className="w-full mb-2" />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>$ 15.000,00</span>
              <span className="">$ 400.000,00</span>
            </div>
          </CardContent>
        </Card>
      </div>
      <Button className="mt-6 w-full" size="lg" >
        <Link href="/savings/new" className="w-full">
          Agregar nuevo ahorro
        </Link>
      </Button>
    </div>
  );
}
