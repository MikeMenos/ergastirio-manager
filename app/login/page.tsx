import { LoginCard } from "@/components/ui/login";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-8 bg-white dark:bg-black">
        <div className="flex w-full flex-col items-center gap-6 text-center sm:text-left">
          <LoginCard />
        </div>
      </main>
    </div>
  );
}
