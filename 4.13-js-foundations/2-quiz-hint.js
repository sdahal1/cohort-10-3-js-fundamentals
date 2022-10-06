const authors = [
    {
      name: { first: "Neil", surname: "Gaiman" },
      knighted: false,
    },
  ];
  const author = {
    name: {
      first: "Terry",
      surname: "Pratchett",
    },
  };
  
  authors.push(author);
  const result = [ authors, author ];
  author.knighted = true;
  console.log(result);