import { builder } from "src/builder";

import { WormholeRentalCreate } from "./create";
import { WormholeRentalWhereUnique } from "./whereUnique";

export const WormholeRentalCreateRelationList = builder.inputRef<any>("WormholeRentalCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [WormholeRentalWhereUnique] }),
    create: t.field({ type: [WormholeRentalCreate] }),
  }),
});
