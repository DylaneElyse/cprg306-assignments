import "./globals.css";

export const metadata = {
  title: "Week 3 Assignment",
  description: "Week 3 Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 p-4">{children}</body>
    </html>
  );
}
