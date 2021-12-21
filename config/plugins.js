module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dw8c1hgck'),
        api_key: env('665626496597689'),
        api_secret: env('Fxb7urlDtP8fBj27Ze_WMhP2WPE'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
    // ...
  });