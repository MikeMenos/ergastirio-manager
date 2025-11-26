"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart, LogOut, ChevronDown } from "lucide-react";

const FAMILIES = ["DONUT", "ΑΛΛΟ", "ΑΡΤΟΠΟΙΗΜΑΤΑ", "ΣΦΟΛΙΑΤΑ"];

export default function Header() {
  const pathname = usePathname();

  // hide header on login page
  if (pathname === "/login") return null;

  // ---- MOCK DATA (replace with real BRAND / ADDRESS / BRANCHES) ----
  const branches = [
    {
      id: "1",
      brand: "ERGASTIRI",
      address: "Λεωφ. Κηφισίας 10, Αθήνα",
    },
    {
      id: "2",
      brand: "ERGASTIRI 2",
      address: "Λεωφ. Συγγρού 20, Αθήνα",
    },
  ];

  const currentBranch = branches[0];

  const handleBranchChange = (id: string) => {
    // TODO: σύνδεσε το με context / state / query param
    console.log("Change branch to:", id);
  };

  const handleLogout = () => {
    // TODO: βάλε εδώ την πραγματική logout λογική (auth, redirect κτλ)
    console.log("Logout clicked");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-4 px-4">

        {/* LEFT: Logo + Families */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} />
          <span className="hidden sm:inline text-lg font-semibold">
            Ergastirio Manager
          </span>
        </Link>

        {/* Families navigation */}
        <div className="flex-1 overflow-x-auto">
          <nav className="ml-4 flex items-center gap-1 md:gap-2">
            {FAMILIES.map((family) => (
              <Button
                key={family}
                asChild
                variant="ghost"
                size="sm"
                className="whitespace-nowrap text-xs font-medium"
              >
                <Link href={`/products?family=${encodeURIComponent(family)}`}>
                  {family}
                </Link>
              </Button>
            ))}
          </nav>
        </div>

        {/* RIGHT: Logout, Cart, Store dropdown */}
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
      
          <DropdownMenu>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Επιλογή καταστήματος</DropdownMenuLabel>
              {branches.map((branch) => (
                <DropdownMenuItem
                  key={branch.id}
                  onClick={() => handleBranchChange(branch.id)}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{branch.brand}</span>
                    <span className="text-xs text-slate-500">
                      {branch.address}
                    </span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
            
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-2 sm:px-3"
              >
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase tracking-wide text-slate-500">
                    Κατάστημα
                  </span>
                  <span className="text-xs sm:text-sm font-medium leading-tight">
                    {currentBranch.brand}
                  </span>
                  <span className="text-[10px] text-slate-500 truncate max-w-[140px] sm:max-w-[200px]">
                    {currentBranch.address}
                  </span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>

          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart" aria-label="Καλάθι">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={handleLogout}
          >
            <LogOut className="mr-1 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
