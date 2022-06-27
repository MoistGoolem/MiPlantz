import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import { NextUIProvider, createTheme } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Head from 'next/head'
import Layout from '../components/layout'
import { QueryClient, QueryClientProvider } from 'react-query'

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
    type: 'light',
    className: 'light',
    theme: {
        colors: {
            // brand colors
            primaryLight: '$green200',
            primaryLightHover: '$green300',
            primaryLightActive: '$green400',
            primaryLightContrast: '$green600',
            primary: '#4ADE7B',
            primaryBorder: '$green500',
            primaryBorderHover: '$green600',
            primarySolidHover: '$green700',
            primarySolidContrast: '$white',
            primaryShadow: '$green500',
            backgroundContrast: '#f5f5f5',

            gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
            link: '#5E1DAD',

            // you can also create your own color
            myColor: '#ff4ecd'
        }, 
        space: {

        },
        fonts: {

        }
    }
})
  
  const darkTheme = createTheme({
    type: 'dark',
    className: 'dark',
    theme: {
        colors: {
            // brand colors
            primaryLight: '$green200',
            primaryLightHover: '$green300',
            primaryLightActive: '$green400',
            primaryLightContrast: '$green600',
            primary: '#4ADE7B',
            primaryBorder: '$green500',
            primaryBorderHover: '$green600',
            primarySolidHover: '$green700',
            primarySolidContrast: '$white',
            primaryShadow: '$green500',

            gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
            link: '#5E1DAD',

            // you can also create your own color
            myColor: '#ff4ecd'
        }, 
        space: {

        },
        fonts: {

        }
    }
})

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <NextThemesProvider
                defaultTheme='system'
                attribute='class'
                value={{
                    light: lightTheme.className,
                    dark: darkTheme.className
                }}
            >
                <NextUIProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </NextUIProvider>
            </NextThemesProvider>
        </QueryClientProvider>
    )
}

export default MyApp
