import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MMMP Estoque",
  description: "Um site focado em controle de estoque",
};

export default function Layout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-100">
        <SidebarProvider>
          <AppSidebar />
          <main className="flex flex-col flex-1 w-full min-h-screen">
              <SidebarTrigger  />
              <div className="flex justify-center">
                {children}
              </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}
