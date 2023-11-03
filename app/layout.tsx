import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { siteConfig } from "@/config/site"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { TailwindIndicator } from "@/components/ui/tailwind-indicator"
import { ScrollArea } from "@/components/ui/scroll-area"
import Navbar from "@/components/Nav"
import FooterSection from "@/components/Footer"
import CalculatorIcon from "@/components/Nav/calculator-icon"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["shop inc.", "shop inc. dashboard", "shop inc. marketing", "shop inc. dashboard marketing"],
  authors: [{ name: "Kazizo", url: "https://markazstudios.com" }],
  creator: "Kazizo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    // images: [`${siteConfig.url}/og.jpg`],
    creator: "@markazstudios",
  },
  icons: {
    icon: "/favicon.ico",
    //   shortcut: "/favicon-16x16.png",
    //   apple: "/apple-touch-icon.png",
  },
  //   manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ScrollArea className="h-screen">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-myscreen relative">
              <Navbar />
              {children}
              <FooterSection />

              <div className="container mx-auto flex items-end justify-end">
                <CalculatorIcon />
              </div>
            </div>

            <TailwindIndicator />
            <Toaster />
          </ThemeProvider>
        </ScrollArea>
      </body>
    </html>
  )
}
