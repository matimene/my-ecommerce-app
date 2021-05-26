const { ApolloError } = require("apollo-server");
const bcrypt = require("bcrypt");

module.exports = async (_, args, { models }) => {
  const { username, name, password } = args.input;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  console.log("args createUser: ", args);

  try {
    const user = new models.User({
      username,
      info: { name },
      passwordHash,
    });
    await user.save();
    return user;
  } catch (e) {
    throw new ApolloError(e);
  }
};
