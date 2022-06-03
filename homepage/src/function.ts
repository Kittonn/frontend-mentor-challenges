export const split_data = (data: string) => {
  let split_arr = data
    .split("\n")
    .filter((item) => item !== "")
    .slice(4)
    .map((item) => item.split(" | "));
  console.log(split_arr);
  
  
  let data_arr = split_arr.map((item, i) => {
    let start_link = item[0].indexOf("(");
    let end_link = item[0].indexOf(")");
    let start_name = item[1].indexOf("[");
    let end_name = item[1].indexOf("]");
    let path = item[0].substring(start_link + 1, end_link).slice(9);
    let name = item[1].substring(start_name + 1, end_name);
    let stack = item[2].trim().split(" ");
    let demo_start = item[3].indexOf('(')
    let demo_end = item[3].indexOf(")")
    let demo = item[3].substring(demo_start+1,demo_end)
    let code_start = item[1].indexOf("(")
    let code_end = item[1].indexOf(")")
    let code = item[1].substring(code_start+1,code_end).slice(2)
    return { id: i, name, stack, path,demo,code };
  });
  return data_arr;
};
