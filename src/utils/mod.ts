export const modData = (data: any) =>
  data?.map((d: any) => ({
    value: `${d.id}`,
    label: d.name,
  }));
