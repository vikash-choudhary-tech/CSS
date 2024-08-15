import styles from "./MagazinePage.module.css";

const MagazinePage = () => {
  return (
    <>
      <div className={styles.magazineContainer}>
        <div className={styles.header}>Header</div>
        <div className={styles.main}>
          <div className={styles.sideBar}>
            <div>SideBar 1</div>
            <div>SideBar 2</div>
            <div>SideBar 3</div>
            <div>SideBar 4</div>
          </div>
          <div className={styles.mainContent}> Main</div>
        </div>
        <div className={styles.footer}>Footer</div>
      </div>
    </>
  );
};

export default MagazinePage;

// CSS Grid Layout Challenge

// Problem: Design a complex grid layout that mimics a magazine page layout with a header,
// footer, main content, and sidebar. The sidebar should span multiple rows.
// Requirements:
// Use CSS Grid to create the layout.
// Make the layout responsive with media queries.
// Ensure the main content area expands to fill available space.
