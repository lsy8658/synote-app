"use client";

import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Spinner } from "@/components/Spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export default function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth();
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
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Snote
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Snote free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
}
