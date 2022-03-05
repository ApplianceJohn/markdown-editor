export default function Preview(props) {
  return (
    <div
      id="preview"
      className="p-3 w-100"
      dangerouslySetInnerHTML={props.output}
    />
  );
}
