import styles from "./FlexBox.module.scss";

const FlexBox = ({ flexDirection = "row", children }) => {
  return (
    <div style={{ flexDirection }} className={styles.box}>
      {children}
    </div>
  );
};

export default FlexBox;
