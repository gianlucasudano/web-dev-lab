import StackedBox from 'components/Layout/StackedBox';

function Home() {
  return (
    <>
      <header>
        <h1 className="display-medium">Hello World</h1>
      </header>
      <main className="surface">
        <StackedBox variant="outlined">
          <div className="body-medium">Pippo</div>
        </StackedBox>
      </main>
    </>
  );
}

export default Home;
