import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <h2>ChakraUI Header</h2>
      {children}
      <h2>ChakraUI Footer</h2>
    </>
  );
}
