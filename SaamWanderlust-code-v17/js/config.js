window._config = {
    cognito: {
        userPoolId: '', // e.g. us-east-2_uXboG5pAb
        userPoolClientId: '', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region: 'us-east-1', // e.g. us-east-1
        identityPoolId: '' // e.g. us-east-1:510eda3c-8339-6b01-2238-7de36aab7ca0
    },
    api: {
        invokeUrl: '' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod/photos',
    },
    s3: {
      bucket : '', // e.g. mynewbucket
      hostUrl : '', // e.g. http://mynewbucket.s3-website-us-east-1.amazonaws.com
      uploadPath : 'uploads/'
    },
    dynamodb: {
      tableName: 'SaamWanderlustPhotos'
    }
};
