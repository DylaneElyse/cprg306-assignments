import "./globals.css";

export const metadata = {
  title: "Week 2 Assignment",
  description: "Week 2 Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
