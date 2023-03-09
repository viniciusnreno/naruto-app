export function Header(props) {
  return (
    <>
      <header>
        <h1 className="text-4xl font-bold mt-4 mb-9">{props.title}</h1>
      </header>
    </>
  );
}