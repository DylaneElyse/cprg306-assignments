import "./globals.css";

export const metadata = {
  title: "CPRG 306 Assignments",
  description: "CPRG 306 Assignments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 p-4">{children}</body>
    </html>
  );
}
