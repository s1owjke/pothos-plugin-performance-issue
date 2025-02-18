import { builder } from "src/builder";

export const SortOrder = builder.enumType("SortOrder", {
  values: {
    Asc: { value: "asc" },
    Desc: { value: "desc" },
  } as const,
});
