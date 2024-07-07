import { Logo } from "@/components/Logo";

export default function LayaoutAuth({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-center h-full items-center">
            <Logo />
            <h1 className="text-2xl mb-4">
                Welcome to NerdyManager
            </h1>
            {children}
        </div>
    );
}