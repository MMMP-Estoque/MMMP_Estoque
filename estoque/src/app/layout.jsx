import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import "./globals.css";

export const metadata = {
  title: "MMMP Estoque",
  description: "Um site focado em controle de estoque",
};

export default function Layout({ children }) {
  return (
    /* Não exibir a navbar caso a página atual seja login ou cadastro*/
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
