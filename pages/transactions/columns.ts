import { h } from "vue";

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "id",
        header: () =>
          h(
            "div",
            {
              class: "text-left",
            },
            "Id"
          ),
        cell: ({ row }: any) => {
          const id = row.getValue("id");
          return h("div", { class: "text-left ont-medium" }, id);
        },
      },
    {
    accessorKey: "email",
    header: () =>
      h(
        "div",
        {
          class: "text-left",
        },
        "Email"
      ),
    cell: ({ row }: any) => {
      const Email = row.getValue("email");
      return h("div", { class: "text-left ont-medium" }, Email);
    },
  },

  {
    accessorKey: "status",
    header: () =>
      h(
        "div",
        {
          class: "text-left",
        },
        "Status"
      ),
    cell: ({ row }: any) => {
      const Status = row.getValue("status");
      return h("div", { class: "text-left ont-medium" }, Status);
    },
  },
  {
    accessorKey: "amount",
    header: () =>
      h(
        "div",
        {
          class: "text-left",
        },
        "Amount"
      ),
    cell: ({ row }: any) => {
      const amount = row.getValue("amount");
      return h("div", { class: "text-left font-medium" }, "$" + amount);
    },
  },
];
