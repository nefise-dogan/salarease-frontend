import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Header from "../components/header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
    title: "SalarEase",
    description:
        "SalarEase is an application to calculate your salary for your next job.",
};

interface Props {
    children: React.ReactNode;
}

function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <div className=" relative bg-red-50 text-foreground light">
                        <Header />
                        <main className="min-h-screen border-b-1 border-red-200 bg-red-50 px-8 pb-16 pt-12">
                            {children}
                        </main>
                        <div className="bg-red-50 p-4 shadow-md">
                            <p className="text-center text-sm font-extralight text-red-900">
                                SalarEase - 2023
                            </p>
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}

export default RootLayout;
export { metadata };
