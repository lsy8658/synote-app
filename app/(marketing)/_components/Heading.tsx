import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function Heading() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-[30px] md:text-[40px] font-bold md:leading-[60px]">
        생각, 문서 및 계획정리를 위한 서비스 &{" "}
        <span className="underline">Snote</span> 에 오신 것을 환영합니다.{" "}
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Snote은 더 나은, 더 빠른 작업이 <br />
        이루어지는 작업 공간입니다.
      </h3>
      <Button>
        Enter Snote <ArrowRight className="h-4 w-4 ml-2" />{" "}
      </Button>
    </div>
  );
}
