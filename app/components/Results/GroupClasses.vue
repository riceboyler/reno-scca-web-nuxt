<template>
  <div
    :id="`group${group}`"
    class="font-bold bg-accented p-1"
  >
    Group {{ group }} ({{ classes }})
  </div>
</template>

<script lang="ts" setup>
  type Props = {
    year: string;
    group: string;
  };
  const { year, group } = defineProps<Props>();

  const classes = await getGroupClasses({ group: parseInt(group), year });
</script>
