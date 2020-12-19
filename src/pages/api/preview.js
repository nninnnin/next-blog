const preview = (req, res) => {
  // sets some cookies on the browser which turns on the preview mode.
  // Any requests to Next.js containing these cookies will be considered as the preview mode, and the behavior for statically generated pages will change.
  res.setPreviewData({});

  res.end('프리뷰 모드가 활성화되었습니다!');
};

export default preview;
