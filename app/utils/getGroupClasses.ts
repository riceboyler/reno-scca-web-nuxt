type Params = {
  group: number;
  year: string;
};

export const getGroupClasses = async ({ group, year }: Params) => {
  const { data } = await useFetch(`/api/results/solo/groups/${year}`);

  const groupData = data.value?.find((grp) => grp.GroupNum === group);

  if (!groupData) {
    console.error("Group Data not returned");
    return "";
  }

  return groupData.Classes;
};
