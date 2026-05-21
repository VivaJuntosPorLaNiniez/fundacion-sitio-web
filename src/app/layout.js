'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/layout/BackToTopButton";
import Loading from "@/components/ui/Loading";
import ErrorData from "@/components/ui/ErrorData";
import { AppProvider, useAppStatus } from "@/context/AppContext";
import '@/app/globals.css';

function LayoutWrapper({ children }) {
  const { dbLoading, dbError } = useAppStatus();
  const isBlockingOverlayVisible = dbLoading || dbError;

  return (
    <>
      <Navbar />
      <main className="relative pt-14 sm:pt-16 min-h-[calc(100vh-60px)] bg-gray-50">
        <div className={isBlockingOverlayVisible ? 'opacity-0 pointer-events-none select-none' : 'opacity-100'} aria-hidden={isBlockingOverlayVisible}>
          {children}
        </div>
        {dbError ? (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/95 px-4 backdrop-blur-sm">
            <ErrorData
              mensaje={dbError}
              AlDarClicReintentar={() => window.location.reload()}
            />
          </div>
        ) : dbLoading ? (
          <div className="absolute inset-0 z-40 flex items-center justify-center bg-white/95 px-4 backdrop-blur-sm">
            <Loading />
          </div>
        ) : null}
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AppProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </AppProvider>
      </body>
    </html>
  );
}