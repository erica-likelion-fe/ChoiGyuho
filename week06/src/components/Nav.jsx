const Nav = () => {
  const list = [
    { value: "HTML", id: "list-1" },
    { value: "CSS", id: "list-2" },
    { value: "JS", id: "list-3" },
  ];
  return (
    <nav>
      <ol>
        {list.map((value) => {
          return <li key={value.id}>{value.value}</li>;
        })}
      </ol>
    </nav>
  );
};

export default Nav;
