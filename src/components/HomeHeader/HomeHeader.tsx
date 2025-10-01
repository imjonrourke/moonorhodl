import { Emoji } from '~/components/app/Emoji';

export const HomeHeader = () =>   {
  return (
    <header>
      {/* <h1>&#128640; or &#57397; &#58407;</h1> */}
      <h1><Emoji emoji="rocket" /> or <Emoji emoji="diamond" /><Emoji emoji="hands" /></h1>
      <p>
        Check the size of your <Emoji emoji="moneyBag" /> after getting rekt by
        <Emoji emoji="flagUS" />
      </p>
      <p>Not financial advice.</p>
    </header>
  );
};
