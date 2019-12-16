module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'pragas_e_in',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
