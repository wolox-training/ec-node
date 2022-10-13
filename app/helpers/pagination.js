exports.pagination = (pagination, allWeets) => {
  const { page } = pagination;
  const { limit } = pagination;
  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;
  const userResult = allWeets.slice(startIndex, lastIndex);
  return userResult;
};
