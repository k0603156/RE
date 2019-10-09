module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    area: DataTypes.STRING,
    date: DataTypes.DATE,
    title: DataTypes.STRING,
    contents: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue('contents').split(';')
      },
      set(val) {
        this.setDataValue('contents', val.join(';'));
      },
    },
    images: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue('images').split(';')
      },
      set(val) {
        this.setDataValue('images', val.join(';'));
      },
    }
  }, {});
  Post.associate = function (models) {
    // associations can be defined here
  };
  return Post;
};