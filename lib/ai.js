export async function explainExpression(expression, result) {
  const cleanExpression = expression?.trim() || "an empty expression";
  const cleanResult =
    result === "" || result == null ? "no result yet" : result;

  return [
    `I reviewed ${cleanExpression}.`,
    `The calculator currently resolves it to ${cleanResult}.`,
    "For a luxury-grade interpretation, this means the expression is now condensed into a single measurable outcome with the same precision a premium dashboard would surface.",
  ].join(" ");
}
