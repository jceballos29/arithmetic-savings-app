import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    // <<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <div className="flex flex-col w-full max-w-3xl mx-auto">
      <h2 className="scroll-m-20 text-2xl font-semibold mb-4">Hola Juan</h2>
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
        <h2 className="scroll-m-20 text-2xl font-semibold">Tus ahorros</h2>
        <Badge
          className="h-6 min-w-7 rounded-full px-1 font-mono tabular-nums"
          variant="default"
        >
          20
        </Badge>
      </div>
      <div className="space-y-2">
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
    </div>
  );
}
