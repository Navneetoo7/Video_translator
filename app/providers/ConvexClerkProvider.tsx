"use client";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string
);

const ConvexClearProvider = ({ childern }: { childern: ReactNode }) => (
  <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
  >
    <ConvexProviderWithClerk
      client={convex}
      useAuth={useAuth}
    >
      {childern}
    </ConvexProviderWithClerk>
  </ClerkProvider>
);

export default ConvexClearProvider;
