import axios from "axios";

// 환경 변수에서 Instagram API 정보 가져오기
const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
const userId = process.env.INSTAGRAM_USER_ID;

export const getInstagramPosts = async () => {
  try {
    const response = await axios.get(
      `https://graph.instagram.com/${userId}/media`,
      {
        params: {
          fields: "id,caption,media_type,media_url,permalink,created_time",
          access_token: accessToken,
        },
      }
    );
    // 받은 데이터를 날짜 기준으로 내림차순으로 정렬
    const sortedPosts = response.data.data.sort((a: any, b: any) => {
      return new Date(b.created_time).getTime() - new Date(a.created_time).getTime();
    });
    return sortedPosts;
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    return [];
  }
};
