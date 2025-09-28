declare module 'next-themes' {
  import * as React from 'react';
  
  export interface UseThemeProps {
    themes: string[];
    forcedTheme?: string | undefined;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    theme?: string | undefined;
    resolvedTheme?: string | undefined;
    systemTheme?: 'dark' | 'light' | undefined;
  }
  
  export interface ThemeProviderProps extends React.PropsWithChildren {
    themes?: string[] | undefined;
    forcedTheme?: string | undefined;
    enableSystem?: boolean | undefined;
    disableTransitionOnChange?: boolean | undefined;
    enableColorScheme?: boolean | undefined;
    storageKey?: string | undefined;
    defaultTheme?: string | undefined;
    attribute?: string | string[] | undefined;
    value?: { [themeName: string]: string } | undefined;
    nonce?: string;
  }
  
  export const useTheme: () => UseThemeProps;
  export const ThemeProvider: (props: ThemeProviderProps) => React.JSX.Element;
}