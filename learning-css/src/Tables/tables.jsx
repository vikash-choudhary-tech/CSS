import styles from "./tables.module.css";

const Table = () =>{
    const persons = [{personName: "vikash",age:21,gender:"Male",nationality:"Indian",language:"Hindi"},
        {personName: "vikash",age:21,gender:"Male",nationality:"Indian",language:"Hindi"},
        {personName: "vikash",age:21,gender:"Male",nationality:"Indian",language:"Hindi"},
        {personName: "vikash",age:21,gender:"Male",nationality:"Indian",language:"Hindi"},
        {personName: "vikash",age:21,gender:"Male",nationality:"Indian",language:"Hindi"}
    ]
return(
 <>
    <div className={styles.container}>
        <div className={styles.tableHeader}>Welcome To Tables they are awesome...</div>
        <table className={styles.tableContainer}>
            <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Nationality</th>
                <th>Language</th>
                <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {persons.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.personName}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>{item.nationality}</td>
                        <td>{item.language}</td>
                        <td className={styles.imgItem}><img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg" alt="test-image" className={styles.image}/></td>
                    </tr>

                ))}
            
            </tbody>
        </table>    
    </div>
</>)
}
export default Table;