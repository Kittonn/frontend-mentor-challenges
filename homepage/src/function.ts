export const split_data = (data: string) => {
  let split_arr = data
    .split("\n")
    .filter((item) => item !== "")
    .slice(4)
    .map((item) => item.split(" | "));

  let data_arr = split_arr.map((item, i) => {
    let start_link = item[0].indexOf("(");
    let end_link = item[0].indexOf(")");
    let start_name = item[1].indexOf("[");
    let end_name = item[1].indexOf("]");
    let path = item[0].substring(start_link + 1, end_link).slice(9);
    let name = item[1].substring(start_name + 1, end_name);
    let stack = item[2].trim().split(" ");
    return { id: i, name, stack, path };
  });
  return data_arr;
};
