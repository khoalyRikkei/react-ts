import { Note } from "../App";

interface Props {
  data: Note[];
  onDelete: Function;
}

export default function ListNote({ data, onDelete }: Props) {
  return (
    <>
      {data &&
        data.map((item, index) => (
          <div className="card" key={index}>
            <textarea name="" rows={10} value={item.content}></textarea>
            <div className="btn-group">
              <div className="btn">{item.date.toLocaleDateString()}</div>
              <div className="btn" onClick={() => onDelete(index)}>
                Delete
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
