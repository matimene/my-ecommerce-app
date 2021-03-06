const createProduct = require("./createProduct");
const updateProduct = require("./updateProduct");
const disableProduct = require("./disableProduct");
const createUser = require("./createUser");
const loginUser = require("./loginUser");
const updateUser = require("./updateUser");
const createOrder = require("./createOrder");
const updateOrder = require("./updateOrder");
const setDiscountCodes = require("./setDiscountCodes");
const setFilters = require("./setFilters");
const setNewProducts = require("./SetNewProducts");
const setCategories = require("./setCategories");
const createStoreConfig = require("./createStoreConfig");

module.exports = {
  createProduct,
  updateProduct,
  createUser,
  loginUser,
  updateUser,
  createOrder,
  updateOrder,
  setDiscountCodes,
  setFilters,
  setNewProducts,
  setCategories,
  createStoreConfig,
  disableProduct,
};
