const getlimit = (limit) => {
  return !limit ? Number(process.env.AppLimit) : Number(limit);
};

const getOffset = (limit, page) => {
  if (!limit) limit = process.env.AppLimit;
  if (!page) page = process.env.AppPage;
  console.log(limit, page);
  console.log(Number((page - 1) * limit));
  return Number((page - 1) * limit);
};
const getPage = (page) => {
  return page ? Number(page) : Number(process.env.AppPage);
};

module.exports = {
  getlimit,
  getOffset,
  getPage,
};
