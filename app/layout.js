import "./globals.css";

export const metadata = {
  title: "Shopping List",
  description: "Shopping List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 p-4">{children}</body>
    </html>
  );
}
