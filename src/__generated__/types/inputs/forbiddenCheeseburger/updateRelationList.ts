import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreate } from "./create";
import { ForbiddenCheeseburgerWhereUnique } from "./whereUnique";

export const ForbiddenCheeseburgerUpdateRelationList = builder.inputRef<any>("ForbiddenCheeseburgerUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ForbiddenCheeseburgerWhereUnique] }),
    set: t.field({ type: [ForbiddenCheeseburgerWhereUnique] }),
    disconnect: t.field({ type: [ForbiddenCheeseburgerWhereUnique] }),
    create: t.field({ type: [ForbiddenCheeseburgerCreate] }),
  }),
});
