export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header text-light bg-dark">{props.title}</div>
      {props.children}
    </div>
  );
}
