export default {
  logo: <span>Demo Cash</span>,
  project: {
    link: 'https://arcusfi.com',
    icon: '',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="CashDemoDocs" />
      <meta property="og:description" content="Demo Docs for APN" />
    </>
  ),
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="arcusfi.com" target="_blank">
          Demo Docs GMR
        </a>
        .
      </span>
    ),
  },
  // ...
}
