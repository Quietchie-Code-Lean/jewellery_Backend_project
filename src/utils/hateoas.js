

const prepareHATEOAS = (jewels) => {
  const results = jewels.map((jewel) => {
    return {
      name: jewel.name,
      href: `/jewels/${jewel.id}`
    };
  });

  return {
    total: jewels.length,
    results
  };
};

export default prepareHATEOAS;