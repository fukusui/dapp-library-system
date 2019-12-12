if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

module.exports = {
  db: {
	  production:"",
	  development: process.env.DB_URL,
	  test: process.env.DB_TEST_URL
  }
};
