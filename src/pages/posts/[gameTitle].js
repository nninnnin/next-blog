import { useRouter } from 'next/router';

function gameArticle () {
  const router = useRouter();
  const { gameTitle } = router.query;

  return (
    <>
      <h1>오늘의 게임 : {gameTitle}</h1>
    </>
  );
}

export default gameArticle;
