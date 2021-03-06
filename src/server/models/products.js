/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    dbPoolInstance.query('SELECT * from products', (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        callback(null, queryResult.rows );
      }
    });
  };

  let search = (searchInput, order, callback) => {

    console.log("model order", order);
    console.log("model searchInput", searchInput);

    const queryString = `SELECT * from products WHERE name ILIKE '%${searchInput}%' ORDER BY ${order} ASC`;

    dbPoolInstance.query(queryString, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        callback(null, queryResult.rows );
      }
    });
  };

  return {
    getAll,
    search
  };
};