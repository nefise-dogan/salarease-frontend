"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

function HeaderButton({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isActive = pathname === href;
    const variant = isActive ? "flat" : "light";

    return (
        <Button
            as={Link}
            href={href}
            color="primary"
            radius="sm"
            variant={variant}
        >
            {children}
        </Button>
    );
}

function Header() {
    return (
        <nav className="flex justify-between bg-red-50 p-3 shadow-md sticky top-0 z-50">
            <Link className="align-center flex" href="/">
                <Image
                    className="rounded-small"
                    src="/salarease.png"
                    width={100}
                    height={40}
                    alt="SalarEase Logo"
                />
            </Link>
            <div className="flex gap-1">
                <HeaderButton href="/salary-predictor">
                    Salary Predictor
                </HeaderButton>
                <HeaderButton href="/analyzer">Analyzer</HeaderButton>
                <HeaderButton href="/about">About Us</HeaderButton>
            </div>
        </nav>
    );
}

export default Header;
