interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}

const QtyAddRemove = (props: Props) => {
  return (
    <div>
      <button className="btn btn-warning" onClick={() => props.onIncrease()}>
        <strong>-</strong>
      </button>
      <span className="m-4">
        <strong>{props.qty}</strong>
      </span>
      <button className="btn btn-warning" onClick={() => props.onDecrease()}>
        <strong>+</strong>
      </button>
    </div>
  );
};

export default QtyAddRemove;
