module.exports = {
    default: {
      statusCode: 400,
      message: ''
    },
    notFound: {
      statusCode: 404,
      message: 'Not Found'
    },
    internalServerError: {
      statusCode: 500,
      message: 'Something went wrong. Please try again later.'
    },
    healthCheckError:{
        statusCode: 503,
        message: ''
    }
  }