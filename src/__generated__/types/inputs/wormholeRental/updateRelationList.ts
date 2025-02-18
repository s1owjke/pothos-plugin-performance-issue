import { builder } from "src/builder";

import { WormholeRentalCreate } from "./create";
import { WormholeRentalWhereUnique } from "./whereUnique";

export const WormholeRentalUpdateRelationList = builder.inputRef<any>("WormholeRentalUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [WormholeRentalWhereUnique] }),
    set: t.field({ type: [WormholeRentalWhereUnique] }),
    disconnect: t.field({ type: [WormholeRentalWhereUnique] }),
    create: t.field({ type: [WormholeRentalCreate] }),
  }),
});
