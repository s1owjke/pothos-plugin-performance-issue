import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreate } from "./create";
import { ForbiddenCheeseburgerUpdate } from "./update";
import { ForbiddenCheeseburgerWhereUnique } from "./whereUnique";

export const ForbiddenCheeseburgerUpdateRelation = builder.inputRef<any>("ForbiddenCheeseburgerUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ForbiddenCheeseburgerWhereUnique }),
    disconnect: t.field({ type: ForbiddenCheeseburgerWhereUnique }),
    create: t.field({ type: ForbiddenCheeseburgerCreate }),
    update: t.field({ type: ForbiddenCheeseburgerUpdate }),
  }),
});
