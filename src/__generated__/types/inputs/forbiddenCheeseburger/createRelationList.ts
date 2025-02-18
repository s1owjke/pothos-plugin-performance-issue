import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreate } from "./create";
import { ForbiddenCheeseburgerWhereUnique } from "./whereUnique";

export const ForbiddenCheeseburgerCreateRelationList = builder.inputRef<any>("ForbiddenCheeseburgerCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ForbiddenCheeseburgerWhereUnique] }),
    create: t.field({ type: [ForbiddenCheeseburgerCreate] }),
  }),
});
