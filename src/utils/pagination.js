paginate = async ({
  model,
  query,
  where = {},
  order = [],
  defaultLimit = 10,
  maxLimit = 100,
  include = [],
  mapData
}) => {
  const page = parseInt(query.page, 10);
  const limit = parseInt(query.limit, 10);
  const safePage = Number.isInteger(page) && page > 0 ? page : 1;
  let safeLimit = Number.isInteger(limit) && limit > 0 ? limit : defaultLimit;
  if (safeLimit > maxLimit) safeLimit = maxLimit;

  const offset = (safePage - 1) * safeLimit;

  const result = await model.findAndCountAll({
    where,
    include,
    order,
    limit: safeLimit,
    offset
  });

  const mappedData = mapData
    ? result.rows.map(mapData)
    : result.rows;

  return {
    data: mappedData,
    pagination: {
      total: result.count,
      page: safePage,
      limit: safeLimit,
      totalPages: Math.max(Math.ceil(result.count / safeLimit), 1)
    }
  };
};

module.exports = { paginate };
