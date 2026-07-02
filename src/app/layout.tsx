import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teacher Maker | 교사를 위한 30분 바이브 코딩 입문",
  description:
    "개발을 몰라도 AI와 함께 30분 안에 첫 앱을 만들어 보는 교사용 바이브 코딩 입문 사이트입니다.",
  openGraph: {
    title: "Teacher Maker",
    description: "교사를 위한 30분 바이브 코딩 입문",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
