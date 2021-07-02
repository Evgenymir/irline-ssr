const renderTemplate = (props) => {
  const {
    cssPath,
    jsPath,
    content = '',
    data = '',
    initialI18nStore,
    initialLanguage,
  } = props;

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="format-detection" content="telephone=no">
        <link rel="shortcut icon" href="./favicons/favicon.png"/>
        <link rel="stylesheet" href="/client/${cssPath}"/>
        <title>RS - React SSR</title>
      </head>
      <body>
        <noscript>
            You need to enable JavaScript to run this app.
        </noscript>
        <div id="root">${content}</div>
      
        <script type="application/json" id="data">${data.replace(/</g, '&lt;')}</script>
        <script>
          window.initialI18nStore = JSON.parse('${JSON.stringify(initialI18nStore)}');
          window.initialLanguage = '${initialLanguage}';
        </script>
        <script src="/client/${jsPath}"></script>
      </body>
    </html>`;
};

export default renderTemplate;