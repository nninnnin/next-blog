import { useRouter } from 'next/router';

function landingPage () {
  const router = useRouter();
  const { companyName } = router.query;

  return (
    <>
      <h1>{companyName}의 랜딩페이지</h1>
    </>
  );
}

// export async function getStaticProps (context) {
//   const res = await fetch('https://some/url/blah');
//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }

export default landingPage;
