import axios from "axios";

const getRandomProblemFromBot = async () => {
  var data = JSON.stringify({
    query: `query  {
            randomQuestion(categorySlug: "", filters: {}) {
              titleSlug
            }
          }`,
    variables: {},
  });

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://leetcode.com/graphql/",
    headers: {
      "Content-Type": "application/json",
      Cookie:
        "csrftoken=WFBgx5dlJ0TkbYhnp9g0zqD4MGYAyRCV0r38j8xZI34zUA18WToifgJgGGpRDgHA",
    },
    data: data,
  };

  const botData = await axios(config);

  return botData.data;
};

export default getRandomProblemFromBot;
