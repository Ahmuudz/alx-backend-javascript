<<<<<<< HEAD
module.exports = function (api) {
  api.cache(true);

  const presets = [
=======
module.exports = {
  presets: [
>>>>>>> 82144228bf6bd9388925a8d64a7c6c6bf61818c4
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
<<<<<<< HEAD
  ];

  const plugins = [];

  return {
    presets,
    plugins,
  };
};

=======
  ],
};
>>>>>>> 82144228bf6bd9388925a8d64a7c6c6bf61818c4
