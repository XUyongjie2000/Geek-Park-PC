const initialState = {
  //频道
  channels: [],
  //文章
  results: [],
  page: 1,
  per_page: 10,
  total_count: 0,
};

const article = (state = initialState, action) => {
  console.log(action.type === "article/setChannels");
  if (action.type === "article/setChannels") {
    console.log(1);
    return {
      ...state,
      channels: action.payload,
    };
  }
  if (action.type === "article/setArticles") {
    console.log(2);
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};

export default article;
