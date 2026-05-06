
import { Stack } from "expo-router";
import React from "react";
import "../global.css";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

export default function RootLayout() {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{
        headerShown:false
      }} />
    </QueryClientProvider>
  );
}
