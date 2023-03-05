import axios from "axios";

const getRandomProblemFromBot = async (difficulty = null) => {
  var data = JSON.stringify({
    query: `query randomQuestion($categorySlug: String, $filters: QuestionListFilterInput) {
        randomQuestion(categorySlug: $categorySlug, filters: $filters) {
          titleSlug
        }
      }`,
    variables: {"categorySlug":"","filters": difficulty ? {"difficulty": difficulty} : {}}
  });

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://leetcode.com/graphql/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const botData = await axios(config);

  return botData.data;
};

export default getRandomProblemFromBot;
