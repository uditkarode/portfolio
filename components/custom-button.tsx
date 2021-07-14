/* eslint-disable @next/next/no-img-element */
export default function CustomButton(
  props: { type: "next" | "menu" },
) {
  return (
    <button
      style={{
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
      }}
      className="no-spacing"
    >
      <img
        src={props.type == "next" ? "/next_button.svg" : "/menu_button.svg"}
        alt={props.type == "next" ? "show next" : "open menu"}
        style={{ height: "100%", width: "100%" }}
      />
    </button>
  );
}
