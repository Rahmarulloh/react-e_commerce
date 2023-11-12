import { IOption } from "utils/types";

export default function Option(props: IOption) {
  return (
    <button
      name={props.value}
      className="fltr-pla"
      onClick={()=>{
        props.handleCategory(props.value)
      }}
    >
      {props.value}
    </button>
  );
}
