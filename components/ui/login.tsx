"use client";

import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function LoginCard() {
  const pinRefs = React.useRef<Array<HTMLInputElement | null>>([]);

  const handlePinChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const raw = e.target.value.replace(/\D/g, "");

    if (!raw) {
      e.target.value = "";
      return;
    }

    const digit = raw.slice(-1);
    e.target.value = digit;

    const nextIndex = index + 1;
    if (nextIndex < pinRefs.current.length) {
      pinRefs.current[nextIndex]?.focus();
      pinRefs.current[nextIndex]?.select();
    }
  };

  const handlePinKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      const current = e.currentTarget.value;

      if (current) {
        e.currentTarget.value = "";
        return;
      }

      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        e.preventDefault();
        pinRefs.current[prevIndex]?.focus();
        pinRefs.current[prevIndex]?.select();
      }
    }
  };

  return (
    <Card className="w-full max-w-sm flex">
      <CardHeader>
        <CardTitle>Καλωσορίσατε στην εφαρμογή</CardTitle>
        <CardDescription>
          Εισάγετε τα στοιχεία σας για να συνδεθείτε
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            {/* AFM */}
            <div className="grid gap-2">
              <Label htmlFor="AFM">ΑΦΜ</Label>
              <Input
                id="AFM"
                type="text"
                placeholder="Πληκτρολογήστε το ΑΦΜ σας"
                required
              />
            </div>

            {/* 6-digit PIN */}
            <div className="grid gap-2">
              <Label>6-ψήφιο PIN</Label>
              <div className="flex gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Input
                    key={i}
                    ref={el => (pinRefs.current[i] = el)}
                    inputMode="numeric"
                    maxLength={1}
                    className="h-12 w-12 text-center text-xl font-semibold tracking-widest"
                    onChange={e => handlePinChange(i, e)}
                    onKeyDown={e => handlePinKeyDown(i, e)}
                    required
                  />
                ))}
              </div>
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Είσοδος
        </Button>
      </CardFooter>
    </Card>
  );
}
