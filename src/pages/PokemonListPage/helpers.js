export const getTableData = (rowList) => ({
  columns: [
    {
      label: "Name",
      field: "name",
    },
    {
      label: "Sub Type",
      field: "subtype",
    },
    {
      label: "Super Type",
      field: "supertype",
    },
    {
      label: "Rarity",
      field: "rarity",
    },
    {
      label: "Detailed Info",
      field: "detailedInfoLink",
      sort: "disabled",
    },
  ],
  rows: rowList,
});

export const createSelectOptions = (options) =>
  options.map((supertype) => ({
    value: supertype,
    label: supertype,
  }));
