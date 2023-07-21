const eventApi = async (i) => {
  try {
    const result = await fetch(`https://knassbani2.execute-api.us-east-2.amazonaws.com/events/${i}`, {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await result.json();
    return data;
  } catch (error) {
    error(error);
    return null;
  }
};

export default eventApi;
