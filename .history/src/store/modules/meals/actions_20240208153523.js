export default {
  async fetchMeals(context) {
    const response = await fetch(
      "('https://fakestoreapi.com/products?limit=5'"
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch Meals");
      throw error;
    }

    console.log(responseData);

    // const meals = [];

    // for (const key in responseData) {
    //   const request = {
    //     id: key,
    //     coachId: coachId,
    //     userEmail: responseData[key].userEmail,
    //     message: responseData[key].message,
    //   };
    //   requests.push(request);
    // }

    context.commit("setMeals", responseData);
  },
};
