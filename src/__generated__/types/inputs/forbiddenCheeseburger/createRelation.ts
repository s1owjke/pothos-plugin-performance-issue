import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreate } from "./create";
import { ForbiddenCheeseburgerWhereUnique } from "./whereUnique";

export const ForbiddenCheeseburgerCreateRelation = builder.inputRef<any>("ForbiddenCheeseburgerCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ForbiddenCheeseburgerWhereUnique }),
    create: t.field({ type: ForbiddenCheeseburgerCreate }),
  }),
});
