const sendData = (data) => {
  const normalizeData = JSON.stringify(data);
  const result = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: normalizeData,
        status: 200,
        error: null,
      });
    }, 2000);
  });

  return result;
};

export default sendData;
