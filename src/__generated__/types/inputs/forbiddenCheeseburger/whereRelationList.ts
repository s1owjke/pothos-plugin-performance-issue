import { builder } from "src/builder";

import { ForbiddenCheeseburgerWhere } from "./where";

export const ForbiddenCheeseburgerWhereRelationList = builder.inputRef<any>("ForbiddenCheeseburgerWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: ForbiddenCheeseburgerWhere, required: false }),
    every: t.field({ type: ForbiddenCheeseburgerWhere, required: false }),
    none: t.field({ type: ForbiddenCheeseburgerWhere, required: false }),
  }),
});
