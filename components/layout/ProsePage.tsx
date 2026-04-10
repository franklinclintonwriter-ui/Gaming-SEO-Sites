import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function ProsePage({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`py-14 sm:py-16 ${className}`}>
      <Container>
        <div className="mx-auto max-w-3xl">{children}</div>
      </Container>
    </div>
  );
}
