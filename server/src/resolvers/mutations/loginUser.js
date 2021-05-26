const { ApolloError } = require("apollo-server");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async (_, args, { models }) => {
  const { username, password } = args.input;

  const user = await models.User.findOne({ username });

  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    throw new ApolloError("Wrong username or password!");
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  return { value: jwt.sign(userForToken, process.env.JWT_SECRET) };
};
