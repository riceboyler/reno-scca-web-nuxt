<template>
  <tr
    v-for="(result, idx) in results"
    :key="result.ID"
    :class="idx % 2 === 1 ? 'bg-elevated' : ''"
  >
    <td class="border p-0.5 md:px-1 text-center">
      {{ result.GroupScore }}
    </td>
    <td class="border p-0.5 md:px-1 text-center uppercase">{{ result.Class }}</td>
    <td class="border p-0.5 md:px-1 text-center">{{ result.Number }}</td>
    <td class="border p-0.5 md:px-1 text-left">{{ result.FirstName }} {{ result.LastName }}</td>
    <td class="border p-0.5 md:px-1 text-left capitalize">{{ result.CarModel }}</td>
    <td class="border p-0.5 md:px-1 text-center">{{ result.RawTime.toFixed(3) }}</td>
    <td class="border p-0.5 md:px-1 text-center">{{ result.PaxTime.toFixed(3) }}</td>
    <td class="border p-0.5 md:px-1 text-center">{{ result.GroupDiff.toFixed(3) }}</td>
    <td class="border p-0.5 md:px-1 text-center">{{ result.GroupOff1st.toFixed(3) }}</td>
    <td
      class="border p-0.5 md:px-1 text-left"
      :class="
        (result.BestRun === 1 ? 'text-success font-bold bg-success/10!' : '',
        result.Pen1 !== '' ? 'text-error bg-primary/10!' : '')
      "
    >
      {{ result.Run1 }}{{ result.Pen1 !== "" ? ` (+${result.Pen1})` : "" }}
    </td>
    <td
      class="border p-0.5 md:px-1 text-left"
      :class="
        (result.BestRun === 2 ? 'text-success font-bold bg-success/10!' : '',
        result.Pen2 !== '' ? 'text-error bg-primary/10!' : '')
      "
    >
      {{ result.Run2 }}{{ result.Pen2 !== "" ? ` (+${result.Pen2})` : "" }}
    </td>
    <td
      class="border p-0.5 md:px-1 text-left"
      :class="result.BestRun === 3 ? 'text-success font-bold bg-success/10!' : ''"
    >
      {{ result.Run3 }}{{ result.Pen3 !== "" ? ` (+${result.Pen3})` : "" }}
    </td>
    <td
      class="border p-0.5 md:px-1 text-left"
      :class="
        (result.BestRun === 4 ? 'text-success font-bold bg-success/10!' : '',
        result.Pen4 !== '' ? 'text-error bg-primary/10!' : '')
      "
    >
      {{ result.Run4 }}{{ result.Pen4 !== "" ? ` (+${result.Pen4})` : "" }}
    </td>

    <td
      v-if="results.some((r) => r.Run5 > 0)"
      class="border p-0.5 md:px-1 text-left"
      :class="
        (result.BestRun === 5 ? 'text-success font-bold bg-success/10!' : '',
        result.Pen5 !== '' ? 'text-error bg-primary/10!' : '')
      "
    >
      {{ result.Run5 }}{{ result.Pen5 !== "" ? ` (+${result.Pen5})` : "" }}
    </td>
    <td
      v-if="results.some((r) => r.Run6 > 0)"
      class="border p-0.5 md:px-1 text-left"
      :class="
        (result.BestRun === 6 ? 'text-success font-bold bg-success/10!' : '',
        result.Pen6 !== '' ? 'text-error bg-primary/10!' : '')
      "
    >
      {{ result.Run6 }}{{ result.Pen6 !== "" ? ` (+${result.Pen6})` : "" }}
    </td>
    <td
      v-if="results.some((r) => r.Run7 > 0)"
      class="border p-0.5 md:px-1 text-left"
      :class="
        (result.BestRun === 7 ? 'text-success font-bold bg-success/10!' : '',
        result.Pen7 !== '' ? 'text-error bg-primary/10!' : '')
      "
    >
      {{ result.Run7 }}{{ result.Pen7 !== "" ? ` (+${result.Pen7})` : "" }}
    </td>
    <td
      v-if="results.some((r) => r.Run8 > 0)"
      class="border p-0.5 md:px-1 text-left"
      :class="
        (result.BestRun === 8 ? 'text-success font-bold bg-success/10!' : '',
        result.Pen8 !== '' ? 'text-error bg-primary/10!' : '')
      "
    >
      {{ result.Run8 }}{{ result.Pen8 !== "" ? ` (+${result.Pen8})` : "" }}
    </td>
    <td
      v-if="results.some((r) => r.Run9 > 0)"
      class="border p-0.5 md:px-1 text-left"
      :class="
        (result.BestRun === 9 ? 'text-success font-bold bg-success/10!' : '',
        result.Pen9 !== '' ? 'text-error bg-primary/10!' : '')
      "
    >
      {{ result.Run9 }}{{ result.Pen9 !== "" ? ` (+${result.Pen9})` : "" }}
    </td>
    <td
      v-if="results.some((r) => r.Run10 > 0)"
      class="border p-0.5 md:px-1 text-left"
      :class="
        (result.BestRun === 10 ? 'text-success font-bold bg-success/10!' : '',
        result.Pen10 !== '' ? 'text-error bg-primary/10!' : '')
      "
    >
      {{ result.Run10 }}{{ result.Pen10 !== "" ? ` (+${result.Pen10})` : "" }}
    </td>
    <td
      v-if="results.some((r) => r.Run11 > 0)"
      class="border p-0.5 md:px-1 text-left"
      :class="
        (result.BestRun === 11 ? 'text-success font-bold bg-success/10!' : '',
        result.Pen11 !== '' ? 'text-error bg-primary/10!' : '')
      "
    >
      {{ result.Run11 }}{{ result.Pen11 !== "" ? ` (+${result.Pen11})` : "" }}
    </td>
    <td
      v-if="results.some((r) => r.Run12 > 0)"
      class="border p-0.5 md:px-1 text-left"
      :class="
        (result.BestRun === 12 ? 'text-success font-bold bg-success/10!' : '',
        result.Pen12 !== '' ? 'text-error bg-primary/10!' : '')
      "
    >
      {{ result.Run12 }}{{ result.Pen12 !== "" ? ` (+${result.Pen12})` : "" }}
    </td>
  </tr>
</template>

<script lang="ts" setup>
  import type { SoloScore } from "~/db/models/SoloScore.model";

  const { results } = defineProps<{
    results: SoloScore[];
  }>();
</script>

<style lang="postcss"></style>
