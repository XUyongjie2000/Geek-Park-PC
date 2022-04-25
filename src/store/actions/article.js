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
    //console.log(data, "data");
  };
};
//删除文章
export const delArticle = (id) => {
  return async (dispatch) => {
    await http.delete("mp/articles/" + id);
  };
};
//文章提交
export const addArticle = (data, draft = false) => {
  return async (dispatch) => {
    await http.post(`mp/articles?draft=${false}`, data);
  };
};
