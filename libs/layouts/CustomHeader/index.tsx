import Head from "next/head"

const CustomHeader = () => {
    return (
        <Head>
            <title>Irwan Phan</title>
            <meta name="application-name" content="Irwan Phan" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="Irwan Phan" />
            <meta name="description" content="Hi, I am Irwan, this is a personal profile page" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-config" content="/icons/browserconfig.xml" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-tap-highlight" content="no" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
            
            <link rel="icon" href="/icons/favicon.ico" />
            <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
            <link rel="shortcut icon" href="/icons/favicon.ico" />
            
            <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
            <meta name="keywords" content="profile portfolio github page react nextjs" />
        </Head>
    )
}

export default CustomHeader