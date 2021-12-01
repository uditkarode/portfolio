import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function ProjectItem(props: {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  link: string;
}) {
  return (
    <Link href={props.link}>
      <a style={{ textDecoration: "none" }}>
        <div
          style={{
            minHeight: 154,
            maxWidth: 351,
            borderRadius: 10,
            border: "2px solid #303030",
          }}
        >
          <div
            style={{
              paddingLeft: 22,
              paddingRight: 22,
              paddingTop: 16,
              paddingBottom: 16,
              borderRadius: 10,
              background: "#151515",
              minHeight: 154,
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* Repo Name Holder */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {/* Book Icon */}
                <img
                  src="/book_icon.svg"
                  style={{ width: 14, height: 18 }}
                  alt="book"
                />

                {/* Repo Name */}
                <p
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: 19,
                    marginLeft: 15,
                    color: "#e9e9e9",
                  }}
                  className="no-spacing"
                >
                  {props.name}
                </p>
              </div>

              {/* Repo Description */}
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: 15,
                  color: "#e9e9e9",
                  opacity: 0.85,
                  marginTop: 5,
                  marginLeft: 1,
                  textDecoration: "none",
                }}
                className="no-spacing"
              >
                {props.description}
              </p>
            </div>

            {/* Language info */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              className="no-spacing"
            >
              {/* Circle */}
              <div
                style={{
                  height: 13,
                  width: 13,
                  borderRadius: 6.5,
                  background: props.languageColor,
                }}
                className="no-spacing"
              />

              {/* Language Name */}
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: 16,
                  color: "#e9e9e9",
                  opacity: 0.85,
                  marginLeft: 10,
                  textDecoration: "none",
                }}
                className="no-spacing"
              >
                {props.language}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
