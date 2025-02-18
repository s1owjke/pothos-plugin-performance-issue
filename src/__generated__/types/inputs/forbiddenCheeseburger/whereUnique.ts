import { builder } from "src/builder";

export const ForbiddenCheeseburgerWhereUnique = builder.inputRef<any>("ForbiddenCheeseburgerWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
