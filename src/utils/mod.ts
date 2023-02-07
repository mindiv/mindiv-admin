export const modData = (data: any) =>
  data?.map((d: any) => ({
    value: `${d._id}`,
    label: d.name,
  }));
