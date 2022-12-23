import "./View5.scss";
import img from "./stuga.jpeg";

export const View5 = () => {
  return (
    <section className="view-5">
      <h2>Vi bokar en stuga, det borde duga</h2>
      <img src={img} alt="stuga" />
    </section>
  );
};
