import { http } from "@/utils";

//频道列表数据
export const getChannels = () => {
  return async (dispatch) => {
    const data = await http.get("channels");
    dispatch({ type: "article/setChannels", payload: data.channels });
  };
};
//文章数据
export const getArticles = (params) => {
  return async (dispatch) => {
    const data = await http.get("mp/articles", { params });
    dispatch({ type: "article/setArticles", payload: data });
  };
};
