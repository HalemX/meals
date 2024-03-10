import axiosClient from "../../../axiosClient";

export default {
  async searchMealsByName(context, enterName) {
    const response = await axiosClient.get(`search.php?s=${enterName}`);

    const responseData = await response.data;

    context.commit("setSearchMealsByName", responseData.meals);
  },

  async searchMealsLetter(context, letter) {
    const response = await axiosClient.get(`search.php?f=${letter}`);

    const responseData = await response.data;

    context.commit("setSearchMealsByLetter", responseData.meals);
  },

  async searchMealsByIng(context, enterIng) {
    const response = await axiosClient.get(`filter.php?i=${enterIng}`);

    const responseData = await response.data;

    context.commit("setSearchMealsByIng", responseData.meals);
  },

  //   async fetchMeals(context) {
  //     const response = await fetch(
  //       "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
  //     );
  //     const responseData = await response.json();
  //     if (!response.ok) {
  //       const error = new Error(responseData.message || "Failed to fetch Meals");
  //       throw error;
  //     }
  //     // console.log(responseData.meals);
  //     // const meals = [];
  //     // for (const key in responseData) {
  //     //   const request = {
  //     //     id: key,
  //     //     coachId: coachId,
  //     //     userEmail: responseData[key].userEmail,
  //     //     message: responseData[key].message,
  //     //   };
  //     //   requests.push(request);
  //     // }
  //     context.commit("setMeals", responseData.meals.slice(0, 5));
  //   },
};
