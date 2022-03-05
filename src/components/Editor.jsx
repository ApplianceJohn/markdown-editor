export default function Editor(props) {
  return (
    <textarea
      id="editor"
      onChange={props.handler}
      className="form-control p-3 w-100 border-0"
      defaultValue={props.input}
    ></textarea>
  );
}
