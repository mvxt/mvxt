export default function Header(props) {
  const { title } = props;

  return (
    <div className="hidden sm:block max-w-3xl px-8 pt-4 mx-auto">
      <h1 className="text-4xl font-serif text-center">{title}</h1>
    </div>
  );
}
