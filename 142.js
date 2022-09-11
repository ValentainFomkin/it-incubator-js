Array.prototype.remove_ = (integer_list, values_list) =>
  integer_list.filter((element) => !values_list.includes(element));
