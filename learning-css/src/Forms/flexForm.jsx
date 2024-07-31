import styles from "./flexForm.module.css";

const FlexForm = () => <>
<div className={styles.container}>
    <form className={styles.formContainer}>
        <div className={styles.formHeader}>
            Welcome To Flex Forms....
        </div>
        <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text"/>
        </div>
        <div className={styles.formGroup}>
            <label>Age</label>
            <input type="number"/>
        </div>
        <div className={styles.formGroup}>
            <label>Address</label>
            <textarea></textarea>
        </div>
        <div className={styles.formGroup}>
            <label>Gender</label>
            <div className={styles.formGroupRadio}>
            Male
            <input type="radio" name="gender"/>
            Female
            <input type="radio" name="gender"/>
            </div>
        </div>
        <div className={styles.formGroup}>
            <label>Terms And Conditions</label>
            <div className={styles.formGroupCheckbox}>
            I Agree
            <input type="checkbox"/>
            </div>
        </div>
    </form>
</div>


</>

export default FlexForm;