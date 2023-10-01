type Ingredients = "Хлеб" | "Сыр" | "Колбаса"

export type Action =
    | { type: "addIngredient", payload: Ingredients }
    | { type: "clear" }

