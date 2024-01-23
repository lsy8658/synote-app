import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 ">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          개인 정보 정책
        </Button>
        <Button variant="ghost" size="sm">
          이용약관
        </Button>
      </div>
    </div>
  );
}
