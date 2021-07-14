export default function OrangeText(props: { children: string }) {
  return (
    <span
      style={{
        color: "#EA9A64",
        fontWeight: 500,
      }}
    >
      {props.children}
    </span>
  );
}
