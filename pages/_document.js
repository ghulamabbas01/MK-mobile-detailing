import * as React from "react";
import PropTypes from "prop-types";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import theme, { roboto } from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

export default function MyDocument(props) {
  const { emotionStyleTags } = props;

  return (
    <Html lang="en" className={roboto.className}>
      <Head>
        {/* PWA primary color */}
        {/* meta tages */}
        {/* twitter meta tages  */}

        <meta name="twitter:card" content="app" />
        <meta
          name="twitter:site"
          content="https://www.mkmobiledetailing.net/"
        />
        <meta
          name="description"
          content="MK Mobile Detailing is a mobile car detailing service based in [28 Jacqueline Ct ca daly city 94014]. Their website serves as a platform for potential customers to learn more about their services and make appointments.

          The website features a clean and modern design, with a color scheme that is easy on the eyes. The homepage showcases the services offered by MK Mobile Detailing, including car washing, detailing, and waxing. Each service has a brief description and a call-to-action button that directs the user to the booking page.
          
          The website's navigation is user-friendly, with clear links to the About Us, Services, Gallery, and Contact pages. The About Us page provides background information on the company, including its mission, vision, and values. The Services page offers detailed descriptions of each service offered by MK Mobile Detailing, including pricing information.
          
          The Gallery page showcases pictures of their previous work, giving potential customers an idea of the quality of service they can expect. The Contact page provides a form for users to fill out to schedule an appointment or request more information. The page also lists the company's contact information, including phone number and email address.
          
          Overall, the MK Mobile Detailing website effectively communicates the services offered by the company, provides a user-friendly interface for customers to schedule appointments, and showcases their previous work. It is well-designed and optimized for mobile devices, making it easy for users to access the website from their smartphones or tablets."
        />
        <meta name="twitter:app:name:iphone" content="mk mobile detaling" />
        <meta name="twitter:app:name:ipad" content="mk mobile detaling" />
        <meta name="twitter:app:name:googleplay" content="mk mobile detaling" />
        {/* twitter meta tages  */}
        <meta
          property="og:description"
          content="COMMERCEHOPE is a leading open source reactjs ecommerce script based on Nextjs, Material-UI and Mongodb that can be used to sell products online"
        />
        <meta property="og:url" content="https://commercehope.com" />
        <meta
          property="og:image"
          content="https://commercehope.com/img/commercehope-app-desktop.png"
        />
        <meta
          property="og:image:alt"
          content="commercehope client app image, reactjs nextjs ecommerce sctipt"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image"
          content="https://commercehope.com/img/nextjs-ecommerce-dashboard.png"
        />
        <meta
          property="og:image:alt"
          content="commercehope admin app image, reactjs mongodb ecommerce sctipt"
        />
        <meta property="og:image:width" content="900" />
        <meta property="og:image:height" content="800" />
        <meta
          property="og:image"
          content="https://commercehope.com/img/commercehope-app-desktop.png"
        />
        <meta property="og:site_name" content="mk mobile detailing" />
        <link rel="canonical" href="https://commercehope.com/" />
        <title>mk mobile detailing</title>
        <meta name="robots" content="index,follow" />
        <meta
          property="og:title"
          content="COMMERCEHOPE Open Source Reactjs Ecommerce Software"
        />
        <meta property="dc:creator" content="Techgater" />
        <meta
          property="keywords"
          content="COMMERCEHOPE ecommerce software,reactjs ecommerce script,nextjs ecommerce script,react next ecommerce script,open source script,ecommerce open source script,react mongodb ecommerce script, react js e-commerce script, next js ecommerce script, COMMERCEHOPE E-commerce script "
        />
        <meta name="application-name" content="Commercehope" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="fb:app_id" content="234412360263410" />
        <meta name="theme-color" content="#007DFC" />
        <meta http-equiv="x-ua-compatible" content="IE=edge; chrome=1" />
        <meta />
        {/* meta tages  */}
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="emotion-insertion-point" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation&family=Farsan&display=swap"
          rel="stylesheet"
        />
        {emotionStyleTags}
      </Head>
      <body style={{ scrollBehavior: "smooth" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

MyDocument.propTypes = {
  emotionStyleTags: PropTypes.array.isRequired,
};
