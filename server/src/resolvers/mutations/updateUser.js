const { ApolloError, AuthenticationError } = require("apollo-server");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async (_, args, { currentUser, models }) => {
  if (!currentUser) {
    throw new AuthenticationError("not authenticated");
  }

  const { name, adress, phone, newPassword, password } = args.input;

  const passwordCorrect =
    currentUser === null
      ? false
      : await bcrypt.compare(password, currentUser.passwordHash);

  if (!passwordCorrect) {
    throw new AuthenticationError("Wrong password!");
  }

  try {
    currentUser.info = {
      name,
      adress,
      phone,
    };

    if (newPassword) {
      const newPasswordHash = await bcrypt.hash(newPassword, 10);
      currentUser.password = newPasswordHash;
    }

    const updatedUser = await currentUser.save();

    return updatedUser;
  } catch (e) {
    throw new ApolloError(e);
  }
};
