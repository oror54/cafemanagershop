import React from "react";

type TableProp = {
  title: string;
};

export default function Table(prop: TableProp) {
  const { title } = prop;
  return <div>{title}</div>;
}
