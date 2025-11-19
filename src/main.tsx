import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from './routes/index.tsx';
import { ThemeProvider } from './providers/theme-provider.tsx';


// import { ThemeProvider } from "./components/theme-provider.tsx";
// import { Provider } from "react-redux";
// import { store } from "./redux/store.ts";
// import { Toaster } from "./components/ui/sonner.tsx";



// import { ThemeProvider } from "./providers/theme.provider.tsx";
// import { Provider as ReduxProvider } from "react-redux";
// import { store } from "./redux/store.ts";
// import { Toaster } from "./components/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Provider store={store}>
      <ThemeProvider defaultTheme="light">
        <RouterProvider router={router} />
        <Toaster richColors={true} />
      </ThemeProvider>
    </Provider> */}

    {/* <ReduxProvider store={store}> */}
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        {/* <Toaster richColors={true} /> */}
      </ThemeProvider>
    {/* </ReduxProvider> */}
  </StrictMode>
);
