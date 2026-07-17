export async function explainExpression(expression, result) {
  const cleanExpression = expression?.trim() || "an empty expression";
  const cleanResult =
    result === "" || result == null ? "no result yet" : result;

  return `I reviewed ${cleanExpression} and the result is ${cleanResult}.`;
}
