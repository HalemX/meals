import axiosClient from "../../../axiosClient";

export default {
  searchMealsByName(context, enterName) {
    axiosClient.get(`search.php?s=${enterName}`).then(({ data }) => {
      console.log(data);
      context.commit("setSearchMealsByName", data.meals);
    });
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
