import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import css from "./layout.module.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Innov8 - Voice Assistant AI Chat bot",
    description: "Developed by Team Innov8",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className={css.container}>
                    <div className={css.header}>
                        <div className={css.left}>
                            <img src="/logo.png" alt="team innov8" />
                        </div>
                        <div className={css.right}>
                            <h2>
                                Designed & Developed <br /> Team Innov8
                            </h2>
                        </div>
                    </div>
                    {children}
                </div>
            </body>
        </html>
    );
}
