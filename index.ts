type GroupByKeyFunction<T> = (item: T) => string | number;

export default function groupBy<T>(array: T[], groupByKey: GroupByKeyFunction<T>): Record<string | number, T[]> {
  return array.reduce((accumulator, currentItem) => {
    const key = groupByKey(currentItem);

    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentItem);
    return accumulator;
  }, {} as Record<string | number, T[]>);
}

