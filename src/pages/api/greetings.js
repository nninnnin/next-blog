const greetings = (req, res) => {
  // POST 등 GET 이외의 요청을 핸들링하려면..
  if (req.method === 'POST') {
    // something inserted..
    return;
  }


  res.json({
    from: 'Justin',
    to: 'Jungmin',
    greetings: 'Say goodbye to 2020'
  })
};

export default greetings;
